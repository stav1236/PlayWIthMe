import { RTL, useDarkMode } from '@play-with-me/ui';
import { ThemeProvider } from '@mui/material/styles';
import Header from './components/AppHeader/AppHeader';

const App = () => {
  const { theme } = useDarkMode();

  return (
    <RTL>
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    </RTL>
  );
};

export default App;
