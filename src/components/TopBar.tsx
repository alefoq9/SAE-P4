import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

export default function TopBar() {
    // Pegamos a tipagem da navegação do Drawer para liberar o 'openDrawer'
    const navigation = useNavigation<DrawerNavigationProp<any>>();

    return (
        <View style={styles.topBar}>
            {/* Botão Sanduíche */}
            <TouchableOpacity 
                onPress={() => navigation.openDrawer()}
                style={styles.menuButton}
            >
                <MaterialCommunityIcons name="menu" size={24} color="#FFFFFF" />
            </TouchableOpacity>

            <Image
                source={require("../assets/logo_sae-ufc.png")}
                style={styles.image}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    topBar: {
        height: 50, // Aumentei um pouco para facilitar o clique no ícone (toque humano)
        backgroundColor: '#0B1B77', // Seu azul marinho padrão
        flexDirection: 'row', // Alinha botão e logo na mesma linha
        alignItems: 'center',
        paddingHorizontal: 15,
        justifyContent: 'space-between',
    },
    menuButton: {
        marginRight: 10, // Espaço entre o botão e a logo
    },
    image: {
        width: 80,
        height: 25,
        resizeMode: 'contain',
    },
});