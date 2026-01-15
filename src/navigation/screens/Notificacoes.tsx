import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Card, Text, useTheme } from 'react-native-paper';

export function Notificacoes() {
  const theme = useTheme();

  const notificacoes = [
    { titulo: 'Notícia', descricao: 'Novo auxílio publicado.', data: '19/12/2025 10:00' },
    { titulo: 'Agendamento Confirmado', descricao: 'Seu agendamento foi confirmado.', data: '18/12/2025 15:30' },
    { titulo: 'Atualização de Perfil', descricao: 'Seu perfil foi atualizado com sucesso.', data: '17/12/2025 09:20' },
  ];

  return (
    // Aplicamos a cor do fundo diretamente aqui usando o tema
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text variant="headlineSmall" style={styles.headerTitle}>Notificações</Text>
      
      {notificacoes.map((item, index) => (
        <View key={index} style={styles.notificationContainer}>
          <Card style={styles.card} elevation={1}>
            <Card.Content>
              <Text variant="titleMedium" style={{ color: theme.colors.primary, fontWeight: 'bold' }}>
                {item.titulo}
              </Text>
              <Text variant="bodyMedium" style={{ marginVertical: 4 }}>
                {item.descricao}
              </Text>
              <Text variant="bodySmall" style={{ color: theme.colors.onSurfaceVariant }}>
                {item.data}
              </Text>
            </Card.Content>
          </Card>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  headerTitle: {
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  notificationContainer: {
    marginBottom: 12,
  },
  card: {
    borderRadius: 8,
    backgroundColor: '#fff',
  },
});