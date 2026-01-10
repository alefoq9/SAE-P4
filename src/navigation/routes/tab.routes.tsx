import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';


import { Inicio } from "../screens/Inicio";
import { MeusDados } from "../screens/MeusDados";
import { Agendamentos } from "../screens/Agendamentos";
import { Notificacoes } from "../screens/Notificacoes";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, animation: 'shift'}}>
            <Tab.Screen
                name="inicio"
                component={Inicio}
                options={{
                tabBarIcon: ( {color, size} ) => <MaterialCommunityIcons name="home" color={color} size={size} />,
                tabBarLabel: 'Início'
            }}
            />
            <Tab.Screen
                name="meusDados"
                component={MeusDados}
                options={{tabBarIcon: ( {color, size} ) => <MaterialCommunityIcons name="account" color={color} size={size} />,
                tabBarLabel: 'Meus Dados'
            }} 
            />
            <Tab.Screen
                name="agendamentos"
                component={Agendamentos}
                options={{tabBarIcon: ( {color, size} ) => <MaterialCommunityIcons name="calendar" color={color} size={size} />,
                tabBarLabel: 'Agendamentos'
            }} 
            />
            <Tab.Screen
                name="notificacoes"
                component={Notificacoes}
                options={{tabBarIcon: ( {color, size} ) => <MaterialCommunityIcons name="bell" color={color} size={size} />,
                tabBarLabel: 'Notificações'
            }} 
            />
        </Tab.Navigator>
    )
}