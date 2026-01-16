import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { 
  createDrawerNavigator, 
  DrawerContentScrollView, 
  DrawerItemList 
} from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Switch, List, Divider, useTheme } from 'react-native-paper';
import { useNavigation, CommonActions } from '@react-navigation/native';

// Importações das rotas
import TabRoutes from './tab.routes';
import StackRoutes from './stack.routes';

// Importação das telas
import { Servicos } from '../screens/Servicos'; // Verifique o caminho e nome exato
import TopBar from '../../components/TopBar';
import { useAppTheme } from '../../context/ThemeContext'; 

const Drawer = createDrawerNavigator();

// --- CONTEÚDO CUSTOMIZADO DO MENU LATERAL ---
function CustomDrawerContent(props: any) {
  const { isHighContrast, toggleTheme } = useAppTheme();
  const theme = useTheme();
  const navigation = useNavigation();

  const handleLogout = () => {
    Alert.alert(
      "Sair",
      "Deseja realmente sair do aplicativo?",
      [
        { text: "Cancelar", style: "cancel" },
        { 
          text: "Sair", 
          style: "destructive", 
          onPress: () => {
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{ name: 'Login' }],
              })
            );
          } 
        }
      ]
    );
  };

  return (
    <DrawerContentScrollView 
      {...props} 
      contentContainerStyle={{ 
        flex: 1, 
        backgroundColor: theme.colors.surface // Fundo dinâmico para Alto Contraste
      }}
    >
      <View style={styles.drawerContent}>
        
        {/* Renderiza as opções: Início, Serviços e Meu Perfil */}
        <DrawerItemList {...props} />

        <Divider style={styles.divider} />

        {/* Chave de Alto Contraste */}
        <List.Item
          title="Alto Contraste"
          titleStyle={[styles.menuLabel, { color: theme.colors.onSurface }]}
          left={p => <List.Icon {...p} icon="contrast-box" color={theme.colors.onSurfaceVariant} />}
          right={() => (
            <Switch 
              value={isHighContrast} 
              onValueChange={toggleTheme} 
              color={theme.colors.primary}
            />
          )}
        />
      </View>

      {/* Rodapé com botão de Sair */}
      <View style={[styles.logoutSection, { backgroundColor: theme.colors.surface }]}>
        <Divider />
        <List.Item
          title="Sair da Conta"
          titleStyle={[styles.menuLabel, { color: theme.colors.error }]}
          left={p => <List.Icon {...p} icon="logout" color={theme.colors.error} />}
          onPress={handleLogout}
        />
      </View>
    </DrawerContentScrollView>
  );
}

// --- NAVEGADOR PRINCIPAL (DRAWER) ---
export default function DrawerRoutes() {
  const theme = useTheme();

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        title: '',
        header: () => <TopBar />,
        drawerStyle: {
            backgroundColor: theme.colors.surface,
            width: 280,
        },
        // Cores que mudam conforme o tema (Padrão ou Alto Contraste)
        drawerActiveTintColor: theme.colors.primary,
        drawerInactiveTintColor: theme.colors.onSurfaceVariant,
        drawerActiveBackgroundColor: theme.colors.secondaryContainer,
        drawerLabelStyle: styles.menuLabel,
      }}
    >
      <Drawer.Screen
        name="inicioDrawer"
        component={TabRoutes}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          drawerLabel: 'Início',
        }}
      />

      <Drawer.Screen
        name="profile"
        component={StackRoutes}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
          drawerLabel: 'Meu Perfil',
        }}
      />

    <Drawer.Screen
        name="servicos"
        component={Servicos}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="toolbox-outline" color={color} size={size} />
          ),
          drawerLabel: 'Serviços',
        }}
      />

    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  divider: {
    marginVertical: 10,
    marginHorizontal: 16,
  },
  menuLabel: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  logoutSection: {
    paddingBottom: 20,
  },
});