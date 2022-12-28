import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../../../styles/mui-theme-setting';
import createEmotionCache from './create-emotion-cache';

export const clientSideEmotionCache = createEmotionCache();
function MuiThemeProvider({ children, value }) {
  return (
    <CacheProvider value={value}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CacheProvider>
  );
}

export default MuiThemeProvider;
