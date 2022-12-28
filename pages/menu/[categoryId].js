import { CircularProgress } from '@mui/material';
import {
  dehydrate,
  QueryClient,
  useInfiniteQuery
} from '@tanstack/react-query';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { getDishesByCategory } from '../../backend/controllers/dish-controller';
import { getLayout as getMenuTabsLayout } from '../../frontend/components/layout/menu-tabs-layout/full-menu-tabs-layout/full-menu-tabs-layout';
import TabTransition from '../../frontend/components/layout/page-transition-layout/page-transition-layout';
import DishCard from '../../frontend/components/ui/specified/dish-card/dish-card';
import { serialize } from '../../helpers/backend-helpers/db-helper';
import {
  CategoryName,
  getCategoryNameById
} from '../../helpers/category-helper';
import {
  myAxios,
  queryGenerator
} from '../../helpers/frontend-helpers/https-helper';

export const CATEGORY_DOCS_PER_PAGE = 8;
export const CATEGORY_INITIAL_PAGE = 1;

function APIQueryFn(categoryId) {
  async function fetchFromAPI(categoryId, { pageParam }) {
    const response = await myAxios.get(
      `/api/menu/${categoryId}${queryGenerator({
        amount: CATEGORY_DOCS_PER_PAGE,
        page: pageParam
      })}`
    );
    return response.data;
  }

  return fetchFromAPI.bind(null, categoryId);
}

export function MongooseQueryFn(categoryId) {
  return getDishesByCategory.bind(null, {
    categoryId,
    docsPerPage: CATEGORY_DOCS_PER_PAGE,
    pageNumber: CATEGORY_INITIAL_PAGE,
    prerender: true
  });
}

function CategoryPagination(props) {
  const { query } = useRouter();
  const categoryId = query.categoryId;

  const { ref: lazyLoadingRef, inView: isInView } = useInView();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: [categoryId],
      queryFn: APIQueryFn(categoryId),
      getNextPageParam: (data) =>
        data.nextPageNumber == -1 ? undefined : data.nextPageNumber,
      staleTime: 60 * 1000 * 5
    });

  useEffect(() => {
    //Fetch ngay lập tức sẽ dẫn đến xung đột với frame motion, làm animation bị lag
    const id = setTimeout(() => {
      if (isInView && hasNextPage) {
        fetchNextPage();
      }
    }, 500);
    return () => {
      clearTimeout(id);
    };
  }, [isInView, hasNextPage, fetchNextPage]);

  const allDishes = data.pages.reduce(
    (accumulator, page) => accumulator.concat(page.dishes),
    []
  );

  return (
    <Fragment>
      <Head>
        <title>{`${getCategoryNameById(
          categoryId
        )} | Naturents`}</title>
      </Head>
      <div style={{ position: 'relative' }}>
        <TabTransition>
          {allDishes.map((dish) => (
            <DishCard key={dish._id} {...dish} />
          ))}
        </TabTransition>
        <div
          style={{
            width: '100%',
            height: '20rem',
            backgroundColor: 'transparent',
            zIndex: '-999',
            pointerEvents: 'none',
            position: 'absolute',
            bottom: '0'
          }}
          ref={lazyLoadingRef}
        />
        {isFetchingNextPage && (
          <div
            style={{
              textAlign: 'center',
              marginTop: '10rem'
            }}>
            <CircularProgress />
          </div>
        )}
      </div>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const categoryId = context.params.categoryId;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(
    [categoryId],
    MongooseQueryFn(categoryId)
  );

  return {
    props: {
      dehydratedState: serialize(dehydrate(queryClient))
    },
    revalidate: 1800
  };
}

export function getStaticPaths() {
  const paths = [];
  for (const categoryId in CategoryName) {
    paths.push({ params: { categoryId } });
  }
  return {
    paths,
    fallback: false
  };
}

CategoryPagination.getLayout = getMenuTabsLayout;
export default CategoryPagination;
