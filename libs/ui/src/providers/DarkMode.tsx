// DarkModeContext.tsx
import { Theme, createTheme } from '@mui/material/styles';
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
} from 'react';

export interface DarkModeContextProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  theme: Theme;
}

const DarkModeContext = createContext<DarkModeContextProps | undefined>(
  undefined
);

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
};

interface DarkModeProviderProps {
  children: ReactNode;
}

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
    typography: {
      subtitle1: {
        color: '#808080',
      },
    },
  });
};

export const DarkModeProvider: React.FC<DarkModeProviderProps> = ({
  children,
}) => {
  const storedDarkMode = localStorage.getItem('darkMode') === 'true';
  const [darkMode, setDarkMode] = useState(storedDarkMode);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', String(newDarkMode));
  };

  const theme = useMemo(() => {
    const theme = getTheme(darkMode);
    document.documentElement.style.backgroundColor =
      theme.palette.background.default;
    return theme;
  }, [darkMode]);

  const value: DarkModeContextProps = {
    darkMode,
    toggleDarkMode,
    theme,
  };

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
};
