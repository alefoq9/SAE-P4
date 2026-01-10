import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Button, Text } from 'react-native-paper';

export function Inicio() {
  return (
    <View style={styles.container}>
      <Card style={styles.card} elevation={2}>
        <Card.Content>
          <Text variant="titleLarge" style={styles.title}>
            Boas Vindas!
          </Text>
          <Text variant="bodyMedium">
            Que bom ter você aqui.
          </Text>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    marginVertical: 8,
    borderRadius: 8,
  },
  title: {
    marginBottom: 4,
  },
});
