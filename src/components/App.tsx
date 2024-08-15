// libraries
import type { FC } from 'react';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
// components
import Home from 'components/layout/Home';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#BB86FC',
      light: '#D3B4FC',
      dark: '#9F6FDF',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#03DAC6',
      light: '#3DEDD5',
      dark: '#00B1A0',
      contrastText: '#000000',
    },
    error: {
      main: '#CF6679',
      light: '#E08EA5',
      dark: '#A73F50',
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#FBBC05',
      light: '#FFDA6A',
      dark: '#D09E00',
      contrastText: '#000000',
    },
    info: {
      main: '#2196F3',
      light: '#64B5F6',
      dark: '#1976D2',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#4CAF50',
      light: '#81C784',
      dark: '#388E3C',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#121212',
      paper: '#1E1E1E',
    },
    text: {
      primary: '#E0E0E0',
      secondary: '#B0B0B0',
      disabled: '#616161',
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    action: {
      active: '#BB86FC',
      hover: 'rgba(187, 134, 252, 0.08)',
      selected: 'rgba(187, 134, 252, 0.16)',
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
      focus: 'rgba(187, 134, 252, 0.16)',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#1E1E1E',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.4)',
        },
      },
    },
  },
});

const App: FC = () => (
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <Home />
  </ThemeProvider>
);

export default App;
