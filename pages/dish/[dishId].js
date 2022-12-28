import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import {
  getPromotedDishes,
  getSingleDish
} from '../../backend/controllers/dish-controller';
import DishDetails from '../../frontend/components/ui/specified/dish-details/dish-details';
import { serialize } from '../../helpers/backend-helpers/db-helper';

function DishDetailsPage({ dishDetails }) {
  const router = useRouter();
  const isLoading = router.isFallback;
  const title = dishDetails?.name || 'Đang tải';
  return (
    <Fragment>
      <Head>
        <title>{`${title} | Naturents`}</title>
      </Head>
      <DishDetails {...dishDetails} isLoading={isLoading} newPage />
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const dishId = context.params.dishId;
  const dishDetails = await getSingleDish(dishId);

  return {
    props: {
      dishDetails: serialize(dishDetails)
    },
    revalidate: 1800
  };
}

export async function getStaticPaths() {
  const promotedDishes = await getPromotedDishes();
  const paths = [];
  for (const category in promotedDishes) {
    promotedDishes[category].forEach((dish) => {
      paths.push({ params: { dishId: dish._id } });
    });
  }
  return {
    paths,
    fallback: true
  };
}
export default DishDetailsPage;
