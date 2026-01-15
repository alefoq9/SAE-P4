import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DrawerRoutes from "./drawer.routes";
import TopBar from "../../components/TopBar";
import { Text } from "react-native";
import Carregamento from "../screens/Carregamento";
import Login from "../screens/Login";
import { Inicio } from "../screens/Inicio";

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (

        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {/* Tela 1: Splash com sua animação das bolinhas */}
                <Stack.Screen name="Splash" component={Carregamento} />
                {/* Tela 2: Login */}
                <Stack.Screen name="Login" component={Login} />
                {/* Tela 3: O Drawer completo */}
                <Stack.Screen name="AppPrincipal" component={DrawerRoutes} />
                <Stack.Screen name="Inicio" component={Inicio} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}