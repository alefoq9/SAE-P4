import React from "react";
import { View, Image, StyleSheet, TouchableOpacity, Platform, StatusBar } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

export default function TopBar() {
    const navigation = useNavigation<DrawerNavigationProp<any>>();
    const canGoBack = navigation.canGoBack();

    const handlePress = () => {
        if (canGoBack) {
            navigation.goBack();
        } else {
            navigation.openDrawer();
        }
    };

    return (
        <View style={styles.topBar}>
            {/* Botão na Esquerda */}
            <TouchableOpacity 
                onPress={handlePress}
                style={styles.menuButton}
                activeOpacity={0.7}
            >
                <MaterialCommunityIcons 
                    name={canGoBack ? "arrow-left" : "menu"} 
                    size={24} 
                    color="#FFFFFF" 
                />
            </TouchableOpacity>

            {/* Logo na Direita */}
            <Image
                source={require("../assets/logo_sae-ufc.png")}
                style={styles.image}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    topBar: {
        // Altura restaurada para o seu padrão original (50px de conteúdo + status bar)
        height: Platform.OS === 'android' ? 50 + (StatusBar.currentHeight || 0) : 90,
        backgroundColor: '#0B1B77',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        // Space-between garante: item 1 (botão) na esquerda, item 2 (logo) na direita
        justifyContent: 'space-between', 
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 40,
    },
    menuButton: {
        paddingVertical: 5,
    },
    image: {
        width: 80,
        height: 25,
        resizeMode: 'contain',
    },
});