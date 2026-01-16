import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// 1. Define your interface (The "Label" for the box)
interface IconTopicProps {
    icon: string;
    text: string;
    color?: string;
    size?: number;
}

// 2. Destructure the variables and assign the type AFTER the closing brace
export default function IconTopic({
    icon,
    text,
    color = '#1351B4', // Default values work here
    size = 24          // Changed '24' (string) to 24 (number)
}: IconTopicProps) {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons
                name={icon as any} // 'as any' stops TS from complaining about specific icon names
                size={size}
                color={color}
            />
            <Text style={styles.text}>
                {text}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        marginLeft: 8,
    },
});