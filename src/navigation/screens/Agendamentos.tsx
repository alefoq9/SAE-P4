import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Alert, Platform } from 'react-native';
import { Card, Text, FAB, Divider, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

// Dados iniciais (Mockados)
const INITIAL_DATA = [
  {
    id: '1',
    tipo: 'Psicologia Clínica e Social',
    data: '20/05/2024',
    hora: '14:00',
    modalidade: 'Presencial',
  },
  {
    id: '2',
    tipo: 'Serviço Social e Benefícios',
    data: '22/05/2024',
    hora: '10:30',
    modalidade: 'Remoto',
  }
];

export function Agendamentos() {
  const [agendamentos, setAgendamentos] = useState(INITIAL_DATA);
  const navigation = useNavigation<any>();

  // Função para deletar o agendamento
  const handleExcluir = (id: string) => {
    const executarExclusao = () => {
      setAgendamentos((listaAtual) => listaAtual.filter(item => item.id !== id));
    };

    if (Platform.OS === 'web') {
      // Confirmação para Navegador
      if (window.confirm("Tem certeza que deseja cancelar este agendamento?")) {
        executarExclusao();
      }
    } else {
      // Confirmação Nativa (Android/iOS)
      Alert.alert(
        "Excluir Agendamento",
        "Tem certeza que deseja cancelar este atendimento?",
        [
          { text: "Não", style: "cancel" },
          { text: "Sim, excluir", onPress: executarExclusao, style: "destructive" }
        ]
      );
    }
  };

  const renderItem = ({ item }: any) => (
    <Card style={styles.card} mode="elevated">
      <Card.Content>
        {/* Cabeçalho do Card com Título e Lixeira */}
        <View style={styles.headerRow}>
          <Text variant="titleMedium" style={styles.tipoText}>
            {item.tipo}
          </Text>
          <IconButton 
            icon="trash-can-outline" 
            iconColor="#d32f2f" 
            size={22} 
            onPress={() => handleExcluir(item.id)}
            style={styles.deleteBtn}
          />
        </View>
        
        <Divider style={styles.divider} />

        {/* Informações em Lista */}
        <View style={styles.infoRow}>
          <Text variant="labelMedium" style={styles.label}>Data e Hora:</Text>
          <Text variant="bodyMedium">{item.data} às {item.hora}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text variant="labelMedium" style={styles.label}>Modalidade:</Text>
          <Text 
            variant="bodyMedium" 
            style={{ 
              color: item.modalidade === 'Presencial' ? '#1351B4' : '#2e7d32', 
              fontWeight: 'bold' 
            }}
          >
            {item.modalidade}
          </Text>
        </View>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <Text variant="headlineSmall" style={styles.headerTitle}>
        Meus Agendamentos
      </Text>

      <FlatList
        data={agendamentos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.empty}>Nenhum agendamento encontrado.</Text>
          </View>
        }
      />

      <FAB
        icon="plus"
        label="Novo Agendamento"
        style={styles.fab}
        onPress={() => navigation.navigate('Agendar')}
        color="white"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  headerTitle: {
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  listContainer: {
    paddingBottom: 100, // Espaço para não cobrir o último card com o FAB
  },
  card: {
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 3, // Sombra no Android
  },
  headerRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'flex-start',
  },
  tipoText: {
    color: '#1351B4',
    fontWeight: 'bold',
    flex: 1, // Garante que o texto ocupe o espaço e empurre a lixeira
    marginTop: 8,
  },
  deleteBtn: {
    margin: 0,
    padding: 0,
  },
  divider: {
    marginVertical: 10,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 6,
    alignItems: 'center',
  },
  label: {
    color: '#666',
    marginRight: 8,
    width: 90, // Mantém os valores alinhados verticalmente
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 20,
    backgroundColor: '#1351B4',
  },
  emptyContainer: {
    marginTop: 50,
    alignItems: 'center',
  },
  empty: {
    color: '#666',
    fontSize: 16,
  },
});