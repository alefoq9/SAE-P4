import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// Importamos o Text do Paper para ele aceitar as variantes de tipografia
import { Text, useTheme } from 'react-native-paper'; 

interface IconTopicProps {
    icon: string;
    text: string;
    color?: string; // Cor opcional (caso queira forçar uma cor específica)
    size?: number;
}

export default function IconTopic({
    icon,
    text,
    color, // Removemos o valor default fixo daqui
    size = 24
}: IconTopicProps) {
    const theme = useTheme();

    // Lógica: Se você passar uma cor via props, usa ela. 
    // Se não passar, ele usa a cor primária do tema atual (Alto Contraste ou Padrão).
    const iconColor = color || theme.colors.primary;

    return (
        <View style={styles.container}>
            <MaterialCommunityIcons
                name={icon as any}
                size={size}
                color={iconColor}
            />
            <Text 
                variant="bodyMedium" 
                style={[styles.text, { color: theme.colors.onSurface }]}
            >
                {text}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 4, // Um pequeno espaçamento entre tópicos ajuda na leitura
    },
    text: {
        marginLeft: 12,
        flex: 1, // Importante: faz o texto quebrar linha se for muito longo em vez de sair da tela
    },
});