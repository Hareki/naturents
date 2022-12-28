const { forwardRef } = require('react');
import Breadcrumbs from '../../../../ui/common/breadcrumbs/breadcrumbs';
import FillImage from '../../../../ui/common/image/fill-image';
import concat from 'classnames';
import { getCategoryNameById } from '../../../../../../helpers/category-helper';
import scss from './tab-header.module.scss';

const sectionData = [
  {
    content: 'Trang chủ',
    href: '/',
    selected: false
  },
  {
    content: 'Thực đơn',
    selected: false
  }
];

const TabHeader = forwardRef(
  ({ tabLinksJSX, categoryId }, bannerRef) => {
    const categoryName = getCategoryNameById(categoryId);

    return (
      <div className={scss.banner}>
        <FillImage
          ref={bannerRef}
          quality={90}
          wrapperClasses={scss['banner--background']}
          src='/images/menu/header-bg-2.jpg'
          priority
          alt='header background'
        />
        <div className={scss['banner--content']}>
          <div className={scss['left-content']}>
            <h2 className='secondary-heading'>{categoryName}</h2>
            <Breadcrumbs
              sections={sectionData.concat({
                content: categoryName,
                selected: true
              })}
            />
          </div>
          <div className={scss['right-content']}>
            <div className='menu-tabs'>
              <div
                className={concat(scss['tab-links'])}
                role='tablist'>
                {tabLinksJSX}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
TabHeader.displayName = 'TabHeader';

export default TabHeader;
