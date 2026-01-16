import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Card, Text, useTheme, Avatar } from 'react-native-paper';

export function Notificacoes() {
  const theme = useTheme();

  const notificacoes = [
    { titulo: 'Notícia', descricao: 'Novo auxílio publicado.', data: '19/12/2025 10:00', icon: 'newspaper-variant' },
    { titulo: 'Agendamento Confirmado', descricao: 'Seu agendamento foi confirmado.', data: '18/12/2025 15:30', icon: 'calendar-check' },
    { titulo: 'Atualização de Perfil', descricao: 'Seu perfil foi atualizado com sucesso.', data: '17/12/2025 09:20', icon: 'account-edit' },
  ];

  return (
    <ScrollView 
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      contentContainerStyle={styles.scrollContent} // Adicionado para espaçamento final
    >
      <Text 
        variant="headlineSmall" 
        style={[styles.headerTitle, { color: theme.colors.onSurface }]}
      >
        Notificações
      </Text>
      
      {notificacoes.map((item, index) => (
        <View key={index} style={styles.notificationContainer}>
          <Card 
            style={[styles.card, { backgroundColor: theme.colors.surface }]} 
            mode="elevated"
          >
            <Card.Title
              title={item.titulo}
              titleStyle={{ color: theme.colors.primary, fontWeight: 'bold' }}
              subtitle={item.data}
              subtitleStyle={{ color: theme.colors.onSurfaceVariant }}
              left={(props) => (
                <Avatar.Icon 
                  {...props} 
                  icon={item.icon} 
                  size={40} 
                  style={{ backgroundColor: theme.colors.primaryContainer }} 
                  color={theme.colors.onPrimaryContainer}
                />
              )}
            />
            <Card.Content>
              <Text variant="bodyMedium" style={{ color: theme.colors.onSurface }}>
                {item.descricao}
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
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 90, // Espaço para a Tab Bar não cobrir o conteúdo
  },
  headerTitle: {
    marginBottom: 20,
    fontWeight: 'bold',
  },
  notificationContainer: {
    marginBottom: 12,
  },
  card: {
    borderRadius: 12,
  },
});