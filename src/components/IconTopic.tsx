import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, useTheme } from 'react-native-paper'; 

interface IconTopicProps {
    icon: string;
    text: string;
    color?: string;
    size?: number;
}

export default function IconTopic({
    icon,
    text,
    color,
    size = 24
}: IconTopicProps) {
    const theme = useTheme();

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
        marginVertical: 4,
    },
    text: {
        marginLeft: 12,
        flex: 1,
    },
});