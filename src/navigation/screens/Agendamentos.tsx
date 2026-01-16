import React from 'react';
import { StyleSheet, View, FlatList, Alert, Platform } from 'react-native';
import { Card, Text, FAB, Divider, IconButton, useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useAgendamentos } from '../../context/AgendamentosContext';

export function Agendamentos() {
  const { lista, excluirAgendamento } = useAgendamentos();
  const navigation = useNavigation<any>();
  const theme = useTheme();

  const handleExcluir = (id: string) => {
    const confirmar = () => excluirAgendamento(id);

    if (Platform.OS === 'web') {
      if (window.confirm("Deseja cancelar este agendamento?")) confirmar();
    } else {
      Alert.alert("Excluir", "Deseja cancelar este agendamento?", [
        { text: "Não", style: "cancel" },
        { text: "Sim", onPress: confirmar, style: "destructive" }
      ]);
    }
  };

  const renderItem = ({ item }: any) => (
    <Card style={styles.card} mode="elevated">
      <Card.Content>
        <View style={styles.headerRow}>
          <Text variant="titleMedium" style={[styles.tipoText, { color: theme.colors.primary }]}>
            {item.tipo}
          </Text>
          <IconButton icon="trash-can-outline" iconColor={theme.colors.error} size={22} onPress={() => handleExcluir(item.id)} />
        </View>
        <Divider style={styles.divider} />
        <View style={styles.infoRow}>
          <Text variant="labelMedium" style={styles.label}>Data/Hora:</Text>
          <Text variant="bodyMedium">{item.data} - {item.hora}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text variant="labelMedium" style={styles.label}>Campus:</Text>
          <Text variant="bodyMedium">{item.campus}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text variant="labelMedium" style={styles.label}>Modalidade:</Text>
          <Text variant="bodyMedium" style={{ fontWeight: 'bold' }}>{item.modalidade}</Text>
        </View>
      </Card.Content>
    </Card>
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text variant="headlineSmall" style={styles.headerTitle}>Meus Agendamentos</Text>
      
      <FlatList
        data={lista}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={<Text style={styles.empty}>Nenhum agendamento para mostrar.</Text>}
      />

      <FAB
        icon="plus"
        label="Novo Agendamento"
        style={[styles.fab, { backgroundColor: theme.colors.primary }]}
        onPress={() => navigation.navigate('Agendar')}
        color="white"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  headerTitle: { marginBottom: 20, fontWeight: 'bold' },
  listContainer: { paddingBottom: 100 },
  card: { marginBottom: 16, borderRadius: 8 },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  tipoText: { fontWeight: 'bold', flex: 1 },
  divider: { marginVertical: 8 },
  infoRow: { flexDirection: 'row', marginBottom: 4 },
  label: { width: 90, color: '#666' },
  fab: { position: 'absolute', margin: 16, right: 0, bottom: 20 },
  empty: { textAlign: 'center', marginTop: 50, color: '#666' }
});