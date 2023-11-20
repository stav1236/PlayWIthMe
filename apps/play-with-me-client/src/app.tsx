import { Button } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { RTL } from '@play-with-me/ui';
import { useMemo } from 'react';
import { useDarkMode, getTheme } from '@play-with-me/ui';

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
