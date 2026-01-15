import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface TextLinkProps {
  title: string;
  onPress: () => void;
}

export default function TextLink({ title, onPress }: TextLinkProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-end',
    marginTop: 10,
    paddingVertical: 5,
  },
  text: {
    color: '#1351B4',
    fontSize: 14,
    fontWeight: '600',
  }
});