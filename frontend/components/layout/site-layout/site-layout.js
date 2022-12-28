import { Fragment } from 'react';
import AppFooter from './app-footer/app-footer';
import AppHeader from './app-header/app-header';

function SiteLayout({ children }) {
  return (
    <Fragment>
      <AppHeader />
      {children}
      <AppFooter />
    </Fragment>
  );
}
export const getLayout = (page) => <SiteLayout>{page}</SiteLayout>;
export default SiteLayout;
