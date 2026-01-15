import { createURL } from 'expo-linking';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';
import Routes from './navigation/routes';
import { PaperProvider } from 'react-native-paper';
import { theme } from './theme';

SplashScreen.preventAutoHideAsync();

const prefix = createURL('/');

export function App() {

  return (
    <PaperProvider theme={theme}>
      <Routes />
    </PaperProvider>
  );
}
