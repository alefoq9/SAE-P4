import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { View, StyleSheet } from 'react-native';
import { Switch, List, Divider, useTheme } from 'react-native-paper';

import TabRoutes from './tab.routes'
import StackRoutes from './stack.routes';
import TopBar from '../../components/TopBar';
// Importe o seu contexto de tema criado anteriormente
import { useAppTheme } from '../../context/ThemeContext'; 

const Drawer = createDrawerNavigator();

// Componente Customizado para o Menu Lateral
function CustomDrawerContent(props: any) {
  const { isHighContrast, toggleTheme } = useAppTheme();
  const theme = useTheme();

  return (
    <DrawerContentScrollView {...props}>
      {/* DrawerItemList renderiza automaticamente as telas (Início, Perfil) */}
      <DrawerItemList {...props} />

      <Divider style={styles.divider} />

      {/* Item de Acessibilidade */}
      <List.Item
        title="Alto Contraste"
        titleStyle={{ fontSize: 14 }}
        left={props => <List.Icon {...props} icon="contrast-box" />}
        right={() => (
          <Switch 
            value={isHighContrast} 
            onValueChange={toggleTheme} 
            color={theme.colors.primary}
          />
        )}
      />
    </DrawerContentScrollView>
  );
}

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator 
          // Adicionamos esta linha para usar o menu customizado
          drawerContent={(props) => <CustomDrawerContent {...props} />}
          screenOptions={{
            title: '',
            header: () => <TopBar />
          }}
        >
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

const styles = StyleSheet.create({
  divider: {
    marginVertical: 10,
    marginHorizontal: 16,
  },
});