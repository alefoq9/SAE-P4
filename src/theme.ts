import { DefaultTheme, MD3LightTheme } from 'react-native-paper';

export const theme = {
  ...MD3LightTheme, // ou DefaultTheme
  colors: {
    ...MD3LightTheme.colors,
    primary: '#4CAF50', // cor principal do app
    secondary: '#FFC107', // cor secundária
    background: '#F5F5F5', // fundo geral
    surface: '#09316eff', // fundo de cards
    text: '#212121', // cor do texto
    accent: '#03DAC6', // destaque
  },
  roundness: 12, // bordas arredondadas de cards/botões
};
