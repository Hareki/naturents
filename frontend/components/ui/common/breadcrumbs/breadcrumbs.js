import HomeIcon from '@mui/icons-material/Home';
import BreadcrumbsMUI from '@mui/material/Breadcrumbs';
import concat from 'classnames';
import Link from 'next/link';
import scss from './breadcrumbs.module.scss';

export default function Breadcrumbs({ sections }) {
  return (
    <div className={scss.breadcrumbs}>
      <BreadcrumbsMUI aria-label='breadcrumb' separator='>'>
        {sections.map(({ href, content, selected }, index) => {
          const isHomePage = content === 'Trang chủ';

          /* eslint-disable */
          let BreadcrumbWrapper;
          if (href) BreadcrumbWrapper = Link;
          else
            BreadcrumbWrapper = ({ children, ...props }) => (
              <div {...props}>{children}</div>
            );
          /* eslint-enable */
          return (
            <BreadcrumbWrapper
              href={href}
              key={index}
              className={concat(scss.link, {
                [scss.selected]: selected
              })}>
              {isHomePage && <HomeIcon />} {content}
            </BreadcrumbWrapper>
          );
        })}
      </BreadcrumbsMUI>
    </div>
  );
}
