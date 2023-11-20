import { Button } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { RTL } from '@play-with-me/ui';
import { useMemo } from 'react';
import { useDarkMode } from './contexts/DarkModeContext';

const getTheme = (isDarkMode: boolean) => {
  return createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      primary: {
        main: '#00DE85',
      },
      secondary: {
        main: '#FF4081',
      },
      background: {
        default: isDarkMode ? '#121212' : '#FFFFFF',
        paper: isDarkMode ? '#1E1E1E' : '#F5F5F5',
      },
      text: {
        primary: isDarkMode ? '#FFFFFF' : '#000000',
        secondary: isDarkMode ? '#B0B0B0' : '#666666',
      },
    },
  });
};

const App = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  const theme = useMemo(() => {
    const theme = getTheme(darkMode);
    document.documentElement.style.backgroundColor =
      theme.palette.background.default;
    return theme;
  }, [darkMode]);

  return (
    <RTL>
      <ThemeProvider theme={theme}>
        <Button variant="contained" onClick={toggleDarkMode}>
          {darkMode ? 'Dark Mode' : 'Light Mode'}
        </Button>
      </ThemeProvider>
    </RTL>
  );
};

export default App;
