import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#515b5f',
      main: '#263238',
      dark: '#1a2327',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffac33',
      main: '#ff9800',
      dark: '#d98b16',
      contrastText: '#fff',
    }
  }
});

export default theme;
