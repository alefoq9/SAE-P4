import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DrawerRoutes from "./drawer.routes";
import TopBar from "../../components/TopBar";
import { Text } from "react-native";
import Carregamento from "../screens/Carregamento";

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (

        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {/* Tela 1: Splash com sua animação das bolinhas */}
                <Stack.Screen name="Splash" component={Carregamento} />
                {/* Tela 2: O Drawer completo */}
                <Stack.Screen name="AppPrincipal" component={DrawerRoutes} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}