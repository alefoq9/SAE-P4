import { createDrawerNavigator } from '@react-navigation/drawer'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import TabRoutes from './tab.routes'
import StackRoutes from './stack.routes';
import { View, Text } from 'react-native';
import TopBar from '../../components/TopBar';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
    return (

        <Drawer.Navigator screenOptions={{
            title: '',
            // Esta é a forma correta de colocar a barra "antes" de cada tela
            header: () => <TopBar />
        }}>

            <Drawer.Screen
                name="inicioDrawer"
                component={TabRoutes}
                options={{
                    drawerIcon: ({ color, size }) => <MaterialCommunityIcons name="home" color={color} size={size} />,
                    drawerLabel: 'Início'
                }}
            />
            <Drawer.Screen
                name="profile"
                component={StackRoutes}
                options={{
                    drawerIcon: ({ color, size }) => <MaterialCommunityIcons name="account" color={color} size={size} />,
                    drawerLabel: 'Meu Perfil'
                }}
            />
        </Drawer.Navigator>
    )
}