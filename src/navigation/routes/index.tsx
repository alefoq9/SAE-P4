import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DrawerRoutes from "./drawer.routes";
import TopBar from "../../components/TopBar";
import { Text } from "react-native";
import Carregamento from "../screens/Carregamento";
import Login from "../screens/Login";
import { Inicio } from "../screens/Inicio";

const Stack = createNativeStackNavigator();

// navigation/routes.tsx corrigido

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Splash" component={Carregamento} />
                <Stack.Screen name="Login" component={Login} />
                
                {/* Esta é a única entrada para a parte logada do app */}
                <Stack.Screen name="AppPrincipal" component={DrawerRoutes} />
                
                {/* REMOVA A LINHA ABAIXO: */}
                {/* <Stack.Screen name="Inicio" component={Inicio} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}