import concat from 'classnames';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { cloneElement, useEffect, useRef } from 'react';
import { CategoryId } from '../../../../../helpers/category-helper';
import { getLayout as getSiteLayout } from '../../site-layout/site-layout';
import { TAB_LINK_DATA } from '../menu-tabs-data';
import scss from './full-menu-tabs-layout.module.scss';
import TabHeader from './tab-header/tab-header';
import TabLink from './tab-link/tab-link';

function getRotateDeg(categoryId) {
  switch (categoryId) {
    case CategoryId.appetizers:
      return 0;
    case CategoryId['main-dishes']:
      return 90;
    case CategoryId.desserts:
      return 180;
    case CategoryId.drinks:
      return 270;
    default:
      throw new Error('Invalid rotateDeg');
  }
}
function MenuTabsLayout({ children }) {
  const bannerRef = useRef();

  const router = useRouter();
  const categoryId = router.query.categoryId;
  const pathname = `/menu/${categoryId}`;

  useEffect(() => {
    const rotateDeg = getRotateDeg(categoryId);
    bannerRef.current.style.filter = `hue-rotate(${rotateDeg}deg)  saturate(1.4)`;
  }, [categoryId]);

  const tabLinksJSX = TAB_LINK_DATA.map(({ href, title }) => {
    return (
      <TabLink href={href} key={href} role='tab'>
        {title}
      </TabLink>
    );
  });

  return (
    <div className={concat('section', scss.section)}>
      <TabHeader
        ref={bannerRef}
        tabLinksJSX={tabLinksJSX}
        pathname={pathname}
        categoryId={categoryId}
      />
      <div className={scss['tab-content']}>
        <AnimatePresence mode='wait' initial={false}>
          {cloneElement(children, {
            key: pathname
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}

export const getLayout = (children) =>
  getSiteLayout(<MenuTabsLayout>{children}</MenuTabsLayout>);

export default MenuTabsLayout;
