import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface SocialButtonProps {
  title: string;
  onPress: () => void;
  iconName: React.ComponentProps<typeof Ionicons>['name'];
}

export default function SocialButton({ title, onPress, iconName }: SocialButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.content}>
        <Ionicons name={iconName} size={20} color="black" style={styles.icon} />
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 36,
    backgroundColor: '#f0f0f0',
    borderWidth: 0,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    marginTop: 15,
    elevation: 1, 
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  text: {
    color: '#1351B4',
    fontSize: 16,
  }
});