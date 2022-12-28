import { QueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import Metadata from '../frontend/components/layout/abstracts/metadata/metadata';
import MuiThemeProvider, {
  clientSideEmotionCache
} from '../frontend/components/layout/abstracts/mui-theme-provider/mui-theme-provider';
import configNProgress from '../frontend/components/layout/abstracts/nprogress/nprogress';
import QueryClientSSR from '../frontend/components/layout/abstracts/query-client-ssr/query-client-ssr';
import SiteLayout from '../frontend/components/layout/site-layout/site-layout';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../frontend/fonts/SVN-Rubik/stylesheet.css';
import '../frontend/styles/base-styles.scss';
import '../frontend/styles/components/progress-bar.scss';

configNProgress();
export function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache
}) {
  const [queryClient] = useState(() => new QueryClient());

  const getLayout =
    Component.getLayout ||
    ((page) => <SiteLayout>{page}</SiteLayout>);

  return (
    <MuiThemeProvider value={emotionCache}>
      <QueryClientSSR
        queryClient={queryClient}
        dehydratedState={pageProps.dehydratedState}>
        <Metadata />
        {getLayout(<Component {...pageProps} />)}
      </QueryClientSSR>
    </MuiThemeProvider>
  );
}

export default MyApp;
