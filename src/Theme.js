import { createMuiTheme } from '@material-ui/core/styles';

export const Theme = createMuiTheme({
  palette: {
    primary: {
      700: '#119620',
      500: '#2FB735',
      100: '#C5E9C4',
      200: '#A0DB9E',
      main: '#1f6ed7',
      light: '#535457',
      contrastText: '#000000'
    },
    secondary: {
      main: '#5f5b66'
    },
    text: {
      primary: 'rgba(0, 0, 0, 1)',
      primaryMediumEmphasis: 'rgba(0, 0, 0, 0.6)',
      secondary: 'rgba(255, 255, 255, 1)',
      secondaryMediumEmphasis: 'rgba(255, 255, 255, 0.6)'
    }
  },
  typography: {
    subtitle1: { fontWeight: 500 }
  }
});