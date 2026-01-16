import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DrawerRoutes from "./drawer.routes";
import TopBar from "../../components/TopBar";
import { Text } from "react-native";
import Carregamento from "../screens/Carregamento";
import Login from "../screens/Login";
import Agendar from "../screens/Agendar";
import { Inicio } from "../screens/Inicio";
import Cadastro from "../screens/Cadastro";
import BemVindo from "../screens/Onboarding/BoasVindas";
import Etapa1 from "../screens/Onboarding/etapa1";
import Etapa2 from "../screens/Onboarding/etapa2";
import Etapa3 from "../screens/Onboarding/etapa3";

const Stack = createNativeStackNavigator();

// navigation/routes.tsx corrigido

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Splash" component={Carregamento} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />

                <Stack.Screen name="BemVindo" component={BemVindo} />
                <Stack.Screen name="Etapa1" component={Etapa1} />
                <Stack.Screen name="Etapa2" component={Etapa2} />
                <Stack.Screen name="Etapa3" component={Etapa3} />
                
                {/* Esta é a única entrada para a parte logada do app */}
                <Stack.Screen name="AppPrincipal" component={DrawerRoutes} />
                <Stack.Screen name="Agendar" component={Agendar} />
                {/* REMOVA A LINHA ABAIXO: */}
                {/* <Stack.Screen name="Inicio" component={Inicio} /> */}
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}