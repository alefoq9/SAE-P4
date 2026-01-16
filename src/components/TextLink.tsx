import React from 'react';
import { TouchableOpacity, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';

interface TextLinkProps {
  title: string;
  onPress: () => void;
  // Adicionamos esta propriedade opcional para aceitar estilos extras
  customStyle?: StyleProp<ViewStyle>; 
}

export default function TextLink({ title, onPress, customStyle }: TextLinkProps) {
  return (
    // O array [...] permite juntar o estilo padrão com o novo estilo que passarmos
    <TouchableOpacity style={[styles.container, customStyle]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-end', // Padrão continua sendo à direita
    marginTop: 10,
    paddingVertical: 5,
  },
  text: {
    color: '#1351B4',
    fontSize: 14,
    fontWeight: '600',
  }
});