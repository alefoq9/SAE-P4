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
    <Card 
      style={[styles.card, { backgroundColor: theme.colors.surface }]} 
      mode="elevated"
    >
      <Card.Content>
        <View style={styles.headerRow}>
          <Text 
            variant="titleMedium" 
            style={[styles.tipoText, { color: theme.colors.primary }]}
          >
            {item.tipo}
          </Text>
          <IconButton 
            icon="trash-can-outline" 
            iconColor={theme.colors.error} 
            size={22} 
            onPress={() => handleExcluir(item.id)} 
          />
        </View>
        
        <Divider style={[styles.divider, { backgroundColor: theme.colors.outlineVariant }]} />
        
        <View style={styles.infoRow}>
          <Text 
            variant="labelMedium" 
            style={[styles.label, { color: theme.colors.onSurfaceVariant }]}
          >
            Data/Hora:
          </Text>
          <Text variant="bodyMedium" style={{ color: theme.colors.onSurface }}>
            {item.data} - {item.hora}
          </Text>
        </View>

        <View style={styles.infoRow}>
          <Text 
            variant="labelMedium" 
            style={[styles.label, { color: theme.colors.onSurfaceVariant }]}
          >
            Campus:
          </Text>
          <Text variant="bodyMedium" style={{ color: theme.colors.onSurface }}>
            {item.campus}
          </Text>
        </View>

        <View style={styles.infoRow}>
          <Text 
            variant="labelMedium" 
            style={[styles.label, { color: theme.colors.onSurfaceVariant }]}
          >
            Modalidade:
          </Text>
          <Text 
            variant="bodyMedium" 
            style={{ fontWeight: 'bold', color: theme.colors.onSurface }}
          >
            {item.modalidade}
          </Text>
        </View>
      </Card.Content>
    </Card>
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text 
        variant="headlineSmall" 
        style={[styles.headerTitle, { color: theme.colors.onSurface }]}
      >
        Meus Agendamentos
      </Text>
      
      <FlatList
        data={lista}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={
          <Text style={[styles.empty, { color: theme.colors.onSurfaceVariant }]}>
            Nenhum agendamento para mostrar.
          </Text>
        }
      />

      <FAB
        icon="plus"
        label="Novo Agendamento"
        style={[styles.fab, { backgroundColor: theme.colors.primary }]}
        onPress={() => navigation.navigate('Agendar')}
        // onPrimary garante que o ícone e texto do botão contrastem com a cor do FAB
        color={theme.colors.onPrimary} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 16 
  },
  headerTitle: { 
    marginBottom: 20, 
    fontWeight: 'bold' 
  },
  listContainer: { 
    paddingBottom: 100 
  },
  card: { 
    marginBottom: 16, 
    borderRadius: 12, // Bordas um pouco mais arredondadas para o Material 3
  },
  headerRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center' 
  },
  tipoText: { 
    fontWeight: 'bold', 
    flex: 1 
  },
  divider: { 
    marginVertical: 8 
  },
  infoRow: { 
    flexDirection: 'row', 
    marginBottom: 6 
  },
  label: { 
    width: 100, // Aumentado levemente para evitar quebra de linha em fontes grandes
    fontWeight: '600'
  },
  fab: { 
    position: 'absolute', 
    margin: 16, 
    right: 0, 
    bottom: Platform.OS === 'web' ? 20 : 80 // Ajuste para não cobrir a Tab Bar no Android
  },
  empty: { 
    textAlign: 'center', 
    marginTop: 50,
    fontSize: 16
  }
});