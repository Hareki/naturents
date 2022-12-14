import createEmotionServer from '@emotion/server/create-instance';
import Document, {
  Head,
  Html,
  Main,
  NextScript
} from 'next/document';
import createEmotionCache from '../frontend/components/layout/abstracts/mui-theme-provider/create-emotion-cache';
import theme from '../frontend/styles/mui-theme-setting';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta
            name='theme-color'
            content={theme.palette.primary.main}
          />
          <meta name='emotion-insertion-point' content='' />
          {this.props.emotionStyleTags}
        </Head>
        <body>
          {/* Phải để nó render ra dù là width = 0, set display:none sẽ không chạy dc */}
          <div id='portal' />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;

  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        }
    });

  const initialProps = await Document.getInitialProps(ctx);

  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags
  };
};

export default MyDocument;
