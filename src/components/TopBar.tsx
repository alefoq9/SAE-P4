import React from "react";
import { View, Image, StyleSheet, TouchableOpacity, Platform, StatusBar } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useTheme } from 'react-native-paper'; // Importante para o Alto Contraste

export default function TopBar() {
    const theme = useTheme();
    const navigation = useNavigation<DrawerNavigationProp<any>>();
    const canGoBack = navigation.canGoBack();

    // Lógica de Cores para Acessibilidade
    // Se estiver no modo escuro/alto contraste, vira preto com ícone amarelo/branco
    const backgroundColor = theme.dark ? '#000000' : '#0B1B77';
    const iconColor = theme.dark ? theme.colors.primary : '#FFFFFF';

    const handlePress = () => {
        if (canGoBack) {
            navigation.goBack();
        } else {
            navigation.openDrawer();
        }
    };

    return (
        <View style={[styles.topBar, { backgroundColor }]}>
            <TouchableOpacity 
                onPress={handlePress}
                style={styles.menuButton}
                activeOpacity={0.7}
            >
                <MaterialCommunityIcons 
                    name={canGoBack ? "arrow-left" : "menu"} 
                    size={24} 
                    color={iconColor} 
                />
            </TouchableOpacity>

            <Image
                source={require("../assets/logo_sae-ufc.png")}
                style={[
                    styles.image,
                    theme.dark && { tintColor: '#FFFFFF' } // Garante que a logo apareça no fundo preto
                ]}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    topBar: {
        height: Platform.OS === 'android' ? 56 + (StatusBar.currentHeight || 0) : 100,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        justifyContent: 'space-between', 
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 40,
        // Adiciona uma borda inferior apenas no modo alto contraste para separar do conteúdo
        borderBottomWidth: 0.5,
        borderBottomColor: 'rgba(255,255,255,0.1)'
    },
    menuButton: {
        padding: 8,
    },
    image: {
        width: 100,
        height: 35,
        resizeMode: 'contain',
    },
});