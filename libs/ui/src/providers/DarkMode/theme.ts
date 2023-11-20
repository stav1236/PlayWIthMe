import { createTheme } from '@mui/material/styles';

export const getTheme = (isDarkMode: boolean) => {
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
