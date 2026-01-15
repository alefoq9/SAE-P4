import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { ThemeProvider, useAppTheme } from './context/ThemeContext';
import { defaultTheme, highContrastTheme } from './theme';
import Routes from './navigation/routes';

function Main() {
  const { isHighContrast } = useAppTheme();

  return (
    <PaperProvider theme={isHighContrast ? highContrastTheme : defaultTheme}>
      <Routes />
    </PaperProvider>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  );
}