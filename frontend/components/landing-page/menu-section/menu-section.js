import { forwardRef, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import {
  CategoryId,
  CategoryName
} from '../../../../helpers/category-helper';
import useLPScrollHandler from '../../../hooks/use-lp-scroll-handler';
import LinkButton from '../..//ui/common/buttons/link-button/link-button';
import PromotedDishesTab from '../../ui/specified/menu-tabs/promoted-tab/promoted-tab';
import scss from './menu-section.module.scss';

const defaultCategoryId = CategoryId.appetizers;
const getCtaTitle = (categoryId) => {
  if (
    categoryId != CategoryId['main-dishes'] &&
    categoryId != CategoryId.drinks
  ) {
    return `món ${CategoryName[categoryId]}`.toLowerCase();
  } else {
    return CategoryName[categoryId].toLowerCase();
  }
};
const getCtaUrl = (categoryId) => {
  return `/menu/${categoryId}`;
};
const MenuSection = forwardRef(
  ({ repeat, isInView, promotedDishes }, ref) => {
    const show = useLPScrollHandler({ isInView, repeat });
    const nodeRef = useRef();

    const [CtaInfo, setCtaInfo] = useState({
      title: getCtaTitle(defaultCategoryId),
      url: getCtaUrl(defaultCategoryId)
    });
    function onTabLinkClickHandler(categoryId) {
      setCtaInfo({
        title: getCtaTitle(categoryId),
        url: getCtaUrl(categoryId)
      });
    }

    return (
      <section ref={ref} className='section'>
        <CSSTransition
          nodeRef={nodeRef}
          timeout={0}
          in={show}
          classNames={{
            enterDone: scss['container--show']
          }}>
          <div className={scss.container} ref={nodeRef}>
            <h2 className={'secondary-heading ' + scss.heading}>
              Những món ăn nổi bật
            </h2>

            <PromotedDishesTab
              tabHeaderClasses={scss['tab-link']}
              tabContentClasses={scss['tab-content']}
              promotedDishes={promotedDishes}
              setCtaInfo={onTabLinkClickHandler}
              defaultCategoryId={defaultCategoryId}
            />

            <div className={scss['button-wrapper']}>
              <LinkButton href={CtaInfo.url}>
                Tất cả {CtaInfo.title}
              </LinkButton>
            </div>
          </div>
        </CSSTransition>
      </section>
    );
  }
);

MenuSection.displayName = 'MenuSection';

export default MenuSection;
