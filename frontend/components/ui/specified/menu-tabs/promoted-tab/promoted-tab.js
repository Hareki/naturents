import concat from 'classnames';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
  CategoryId,
  CategoryName,
  getCategoryIdByName,
  getCategoryNameById
} from '../../../../../../helpers/category-helper';
import TabTransition from '../../../../layout/page-transition-layout/page-transition-layout';
import DishCard from '../../dish-card/dish-card';
import BlankTab from '../blank-tab/blank-tab';
import scss from './promoted-tab.module.scss';

const getLinkTitles = () => {
  const titles = [];
  for (const id in CategoryName) {
    titles.push(CategoryName[id]);
  }
  return titles;
};

function PromotedDishesTab({
  tabHeaderClasses,
  tabContentClasses,
  promotedDishes,
  setCtaInfo,
  defaultCategoryId
}) {
  const [activeTabId, setActiveTabId] = useState(defaultCategoryId);
  const onLinkClick = (id) => {
    setActiveTabId(id);
    setCtaInfo(id);
  };

  return (
    <div className='promoted-dishes-tab'>
      <div className={tabHeaderClasses}>
        {getLinkTitles().map((title) => {
          const categoryId = getCategoryIdByName(title);
          const isActive = activeTabId === categoryId;

          return (
            <button
              key={categoryId}
              className={concat(scss['tab-link'], {
                [scss['tab-link--active']]: isActive
              })}
              onClick={() => onLinkClick(categoryId)}
              role='tab'>
              {title}
            </button>
          );
        })}
      </div>

      <div className={tabContentClasses}>
        <AnimatePresence mode='wait' initial={false}>
          {getLinkTitles().map((title) => {
            const categoryId = getCategoryIdByName(title);
            const isActive = activeTabId === categoryId;

            const haveItems = promotedDishes[categoryId].length > 0;
            return (
              isActive && (
                <TabTransition key={categoryId}>
                  {haveItems ? (
                    <div className={scss['tab-content']}>
                      {promotedDishes[categoryId].map((dish) => (
                        <DishCard key={dish._id} {...dish} />
                      ))}
                    </div>
                  ) : (
                    <BlankTab />
                  )}
                </TabTransition>
              )
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default PromotedDishesTab;
