import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#3bb77e',
      main: '#3bb77e',
      dark: '#35a571'
    },
    text: {
      primary: '#4e5162',
      secondary: '#7e8198',
      disabled: '#b8b9c6'
    },
    error: {
      dark: '#d32f2f',
      main: '#eb4d4b',
      light: '#ff7979'
    },
    success: {
      light: '#3bb77e',
      main: '#3bb77e',
      dark: '#35a571'
    },
    action: {
      hoverOpacity: 0.1
    },
    grey: {
      0: '#fff',
      100: '#eaeaed',
      200: '#d5d5dc',
      300: '#bfc1ca',
      400: '#aaacb8',
      500: '#9597a7',
      600: '#808295',
      700: '#6b6d83',
      800: '#555971',
      900: '#3bb77e'
    },
    divider: 'rgba(#2b2f4e,0.12)'
  },
  shape: {
    borderRadius: 8
  },
  typography: {
    htmlFontSize: 10,
    fontSize: 16,
    fontFamily: "'SVN-Rubik', sans-serif"
  }
});

export default theme;
