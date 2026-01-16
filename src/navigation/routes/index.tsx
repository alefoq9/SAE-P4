import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importação das Rotas de Subnível
import DrawerRoutes from "./drawer.routes";

// Importação dos Componentes Globais
import TopBar from "../../components/TopBar";

// Importação das Telas
import Carregamento from "../screens/Carregamento";
import Login from "../screens/Login";
import Cadastro from "../screens/Cadastro";
import Agendar from "../screens/Agendar";

// Telas de Onboarding
import BemVindo from "../screens/Onboarding/BoasVindas";
import Etapa1 from "../screens/Onboarding/etapa1";
import Etapa2 from "../screens/Onboarding/etapa2";
import Etapa3 from "../screens/Onboarding/etapa3";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Splash"
        screenOptions={{ 
          headerShown: false, // Por padrão, ocultamos o header nativo do Stack
          animation: 'slide_from_right' 
        }}
      >
        {/* --- FLUXO INICIAL (SEM TOPBAR) --- */}
        <Stack.Screen name="Splash" component={Carregamento} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />

        {/* --- FLUXO ONBOARDING (SEM TOPBAR) --- */}
        <Stack.Screen name="BemVindo" component={BemVindo} />
        <Stack.Screen name="Etapa1" component={Etapa1} />
        <Stack.Screen name="Etapa2" component={Etapa2} />
        <Stack.Screen name="Etapa3" component={Etapa3} />

        {/* --- ÁREA LOGADA (DRAWER GERENCIA O PRÓPRIO HEADER) --- */}
        <Stack.Screen 
          name="AppPrincipal" 
          component={DrawerRoutes} 
        />

        {/* --- TELA DE AGENDAR (FORA DO DRAWER, COM TOPBAR) --- */}
        <Stack.Screen 
          name="Agendar" 
          component={Agendar} 
          options={{ 
            headerShown: true, // Ativamos para esta tela específica
            header: () => <TopBar />, // Injetamos sua TopBar customizada
            animation: 'slide_from_bottom' // Transição elegante estilo MD3
          }} 
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}