import { Tabs } from 'expo-router';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { PaperProvider } from "react-native-paper";

export default function RootLayout() {
  return (
    <PaperProvider>
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Inicial',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" size={28} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="perfil"
          options={{
            title: 'Meus Dados',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" size={28} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="agendamento"
          options={{
            title: 'Agendamentos',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="calendar-check" size={28} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="notificacoes"
          options={{
            title: 'Notificações',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bell" size={28} color={color} />
            ),
          }}
        />
      </Tabs>
    </PaperProvider>
  );
}
