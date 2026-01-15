import { MD3LightTheme, MD3DarkTheme } from 'react-native-paper';

// Tema Padrão (Baseado nas cores do SAE/Brasil)
export const defaultTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#1351B4', // Azul padrão
    background: '#f5f5f5',
    surface: '#ffffff',
  },
};

// Tema de Alto Contraste (Cores vibrantes sobre fundo preto)
export const highContrastTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#FFFF00', // Amarelo (máximo contraste no preto)
    background: '#000000',
    surface: '#121212',
    onSurface: '#FFFFFF',
    onBackground: '#FFFFFF',
    outline: '#FFFF00', // Bordas em destaque
  },
};