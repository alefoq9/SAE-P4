import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { ThemeProvider, useAppTheme } from './context/ThemeContext';
import { defaultTheme, highContrastTheme } from './theme';
import Routes from './navigation/routes';
import { AgendamentosProvider } from './context/AgendamentosContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';

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
    <SafeAreaProvider>
    <ThemeProvider>
      <AgendamentosProvider>
        <Main />
      </AgendamentosProvider>
    </ThemeProvider>
    </SafeAreaProvider>
  );
}