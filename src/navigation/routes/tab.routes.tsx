import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Importação das suas telas
import { Inicio } from "../screens/Inicio";
import { MeusDados } from "../screens/MeusDados";
import { Agendamentos } from "../screens/Agendamentos";
import { Notificacoes } from "../screens/Notificacoes";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  // --- LÓGICA DE ADAPTAÇÃO ---
  const isWeb = Platform.OS === 'web';
  
  // No Android, se houver insets.bottom (gestos), usamos ele. 
  // Se for 0 (botões virtuais), usamos um valor fixo de segurança.
  const bottomPadding = insets.bottom > 0 ? insets.bottom : 10;
  
  // Altura: Web é mais baixa, Android precisa de espaço para os botões do sistema
  const tabBarHeight = isWeb ? 80 : 70 + (insets.bottom > 0 ? insets.bottom : 5);

  return (
    <Tab.Navigator 
      screenOptions={{ 
        headerShown: false, 
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: theme.colors.surface, // Respeita o Alto Contraste
          borderTopWidth: 1,
          borderTopColor: theme.colors.outlineVariant,
          height: tabBarHeight,
          
          // Ajuste fino para Web vs Android
          paddingBottom: isWeb ? 10 : bottomPadding,
          paddingTop: 8,
          
          // Sombras/Elevação
          elevation: 10,
          shadowOpacity: 0.1,
          shadowRadius: 10,
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.onSurfaceVariant,
        
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
          // No Android, empurramos o texto um pouco para cima para não sumir
          // No Web, deixamos 0 para não cortar no topo
          marginBottom: isWeb ? 0 : 5, 
        },
        tabBarIconStyle: {
          marginBottom: isWeb ? 0 : 2,
        },
      }}
    >
      <Tab.Screen
        name="inicio"
        component={Inicio}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={24} />
          ),
          tabBarLabel: 'Início'
        }}
      />
      
      <Tab.Screen
        name="meusDados"
        component={MeusDados}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={24} />
          ),
          tabBarLabel: 'Dados'
        }} 
      />
      
      <Tab.Screen
        name="agendamentos"
        component={Agendamentos}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="calendar" color={color} size={24} />
          ),
          tabBarLabel: 'Agendas'
        }} 
      />
      
      <Tab.Screen
        name="notificacoes"
        component={Notificacoes}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={24} />
          ),
          tabBarLabel: 'Avisos'
        }} 
      />
    </Tab.Navigator>
  );
}