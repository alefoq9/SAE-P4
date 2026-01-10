import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Card, Text, useTheme, Divider, List } from 'react-native-paper';

export function Notificacoes() {
  const theme = useTheme();

  // Notificações fictícias
  const notificacoes = [
    { titulo: 'Notícia', descricao: 'Novo auxílio publicado.', data: '19/12/2025 10:00' },
    { titulo: 'Agendamento Confirmado', descricao: 'Seu agendamento foi confirmado.', data: '18/12/2025 15:30' },
    { titulo: 'Atualização de Perfil', descricao: 'Seu perfil foi atualizado com sucesso.', data: '17/12/2025 09:20' },
  ];

  return (
    <ScrollView style={styles.container}>
      {notificacoes.map((item, index) => (
        <View key={index} style={styles.notificationContainer}>
          <Card style={styles.card} elevation={2}>
            <Card.Content>
              <Text variant="titleMedium">{item.titulo}</Text>
              <Text variant="bodyMedium" style={{ marginVertical: 4 }}>
                {item.descricao}
              </Text>
              <Text variant="bodySmall" style={{ color: theme.colors.onSurfaceVariant }}>
                {item.data}
              </Text>
            </Card.Content>
          </Card>
          {index < notificacoes.length - 1 && <Divider style={{ marginVertical: 8 }} />}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme => theme.colors.background,
    padding: 16,
  },
  notificationContainer: {
    marginBottom: 8,
  },
  card: {
    borderRadius: 12,
  },
});
