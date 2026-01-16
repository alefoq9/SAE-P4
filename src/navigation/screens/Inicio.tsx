import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Card, Text, Avatar, useTheme, Divider, List, Chip } from 'react-native-paper';

export function Inicio() {
  const theme = useTheme();

  return (
    <ScrollView 
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      contentContainerStyle={styles.content}
    >
      {/* 1. CARD DE BOAS VINDAS */}
      <Card style={styles.welcomeCard} mode="elevated">
        <Card.Content>
          <View style={styles.row}>
            <View style={{ flex: 1 }}>
              <Text variant="headlineSmall" style={{ fontWeight: 'bold', color: theme.colors.primary }}>
                Boas-vindas!
              </Text>
              <Text variant="bodyLarge">Que bom ter você aqui no SAE.</Text>
            </View>
            <Avatar.Icon size={48} icon="hand-wave" style={{ backgroundColor: theme.colors.primaryContainer }} />
          </View>
        </Card.Content>
      </Card>

      {/* 2. DESTAQUES - ATENDIMENTOS POSSÍVEIS */}
      <Text variant="titleMedium" style={styles.sectionTitle}>Destaques</Text>
      <View style={styles.destaquesRow}>
        {[
          { label: 'Psicologia', icon: 'brain' },
          { label: 'Serviço Social', icon: 'account-group' },
          { label: 'Pedagogia', icon: 'book-open-variant' },
        ].map((item, index) => (
          <View key={index} style={styles.destaqueItem}>
            <Avatar.Icon size={50} icon={item.icon} />
            <Text variant="labelSmall" style={styles.destaqueLabel}>{item.label}</Text>
          </View>
        ))}
      </View>

      {/* 3. ATENDIMENTO ESPECIALIZADO */}
      <View style={styles.specialSection}>
        <Text variant="titleMedium" style={styles.sectionTitle}>Atendimento Especializado</Text>
        
        <View style={styles.chipRow}>
          <Chip icon="star" style={styles.chip} textStyle={{ fontSize: 11 }}>Apoio à Aprendizagem</Chip>
          <Chip icon="infinity" style={styles.chip} textStyle={{ fontSize: 11 }}>Suporte Autismo (TEA)</Chip>
        </View>

        <Card style={styles.infoCard} mode="outlined">
          <List.Section>
            <List.Subheader>Informativos e Auxílios</List.Subheader>
            <List.Item
              title="Auxílio Moradia"
              description="Informações sobre o edital 2024."
              left={props => <List.Icon {...props} icon="home-city" />}
            />
            <Divider />
            <List.Item
              title="Bolsa de Incentivo"
              description="Consulte critérios para permanência."
              left={props => <List.Icon {...props} icon="cash-check" />}
            />
            <Divider />
            <List.Item
              title="Apoio Tecnológico"
              description="Empréstimo de equipamentos e softwares."
              left={props => <List.Icon {...props} icon="laptop" />}
            />
          </List.Section>
        </Card>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
    paddingBottom: 32,
  },
  welcomeCard: {
    marginBottom: 24,
    borderRadius: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: 12,
    marginTop: 8,
  },
  destaquesRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 24,
  },
  destaqueItem: {
    alignItems: 'center',
    width: 80,
  },
  destaqueLabel: {
    marginTop: 8,
    textAlign: 'center',
    fontWeight: '600',
  },
  specialSection: {
    marginTop: 8,
  },
  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 16,
  },
  chip: {
    backgroundColor: 'transparent',
    borderWidth: 1,
  },
  infoCard: {
    borderRadius: 12,
  },
});