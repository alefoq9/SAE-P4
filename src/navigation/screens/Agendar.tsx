import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Platform } from 'react-native';
import { 
  Text, 
  RadioButton, 
  Button, 
  Card, 
  Divider, 
  List, 
  TextInput,
  Portal,
  Modal
} from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';

export function Agendamentos() {
  // --- ESTADOS DO FORMULÁRIO ---
  const [categoria, setCategoria] = useState<string>('Psicologia');
  const [campus, setCampus] = useState<string>('Campus Central');
  const [modalidade, setModalidade] = useState<string>('Presencial');
  const [date, setDate] = useState(new Date());
  
  // Estados de Controle de UI
  const [showPicker, setShowPicker] = useState(false);
  const [pickerMode, setPickerMode] = useState<'date' | 'time'>('date');
  const [visible, setVisible] = useState(false); // Controle do Modal de Sucesso

  // --- FUNÇÕES AUXILIARES ---
  const formatDate = (d: Date) => d.toLocaleDateString('pt-BR');
  const formatTime = (d: Date) => d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

  const onPickerChange = (event: any, selectedDate?: Date) => {
    setShowPicker(false);
    if (selectedDate) setDate(selectedDate);
  };

  const openPicker = (mode: 'date' | 'time') => {
    setPickerMode(mode);
    setShowPicker(true);
  };

  const finalizarAgendamento = () => {
    // Aqui no futuro você enviaria para o seu banco de dados
    setVisible(true);
  };

  return (
    <ScrollView style={styles.background}>
      <View style={styles.container}>
        <Text variant="headlineSmall" style={styles.titulo}>Novo Agendamento</Text>

        <Card style={styles.card} mode="elevated">
          <Card.Content>
            
            {/* 1. CATEGORIA */}
            <List.Section>
              <List.Subheader>O que você precisa?</List.Subheader>
              <RadioButton.Group onValueChange={v => setCategoria(v)} value={categoria}>
                <RadioButton.Item label="Psicologia" value="Psicologia" />
                <RadioButton.Item label="Serviço Social" value="Serviço Social" />
                <RadioButton.Item label="Orientação Pedagógica" value="Orientação Pedagógica" />
              </RadioButton.Group>
            </List.Section>

            <Divider />

            {/* 2. CAMPUS */}
            <List.Section>
              <List.Subheader>Localização</List.Subheader>
              <RadioButton.Group onValueChange={v => setCampus(v)} value={campus}>
                <RadioButton.Item label="Campus Central" value="Campus Central" />
                <RadioButton.Item label="Campus Pici" value="Campus Pici" />
              </RadioButton.Group>
            </List.Section>

            <Divider />

            {/* 3. MODALIDADE */}
            <List.Section>
              <List.Subheader>Formato do atendimento</List.Subheader>
              <RadioButton.Group onValueChange={v => setModalidade(v)} value={modalidade}>
                <View style={styles.row}>
                  <RadioButton.Item label="Presencial" value="Presencial" style={{ flex: 1 }} />
                  <RadioButton.Item label="Remoto" value="Remoto" style={{ flex: 1 }} />
                </View>
              </RadioButton.Group>
            </List.Section>

            <Divider />

            {/* 4. DATA E HORA */}
            <List.Section>
              <List.Subheader>Escolha o horário</List.Subheader>
              <View style={styles.dateTimeWrapper}>
                <TextInput
                  label="Data da sessão"
                  value={formatDate(date)}
                  mode="outlined"
                  editable={false}
                  onPressIn={() => openPicker('date')}
                  right={<TextInput.Icon icon="calendar" onPress={() => openPicker('date')} />}
                  style={styles.input}
                />
                <TextInput
                  label="Horário"
                  value={formatTime(date)}
                  mode="outlined"
                  editable={false}
                  onPressIn={() => openPicker('time')}
                  right={<TextInput.Icon icon="clock" onPress={() => openPicker('time')} />}
                  style={styles.input}
                />
              </View>
            </List.Section>

          </Card.Content>

          <Card.Actions style={styles.footer}>
            <Button 
              mode="contained" 
              onPress={finalizarAgendamento}
              style={styles.btnConfirmar}
            >
              Confirmar Agendamento
            </Button>
          </Card.Actions>
        </Card>
      </View>

      {/* SELETOR NATIVO */}
      {showPicker && (
        <DateTimePicker
          value={date}
          mode={pickerMode}
          is24Hour={true}
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={onPickerChange}
        />
      )}

      {/* PORTAL PARA O MODAL DE SUCESSO */}
      <Portal>
        <Modal 
          visible={visible} 
          onDismiss={() => setVisible(false)} 
          contentContainerStyle={styles.modal}
        >
          <Text variant="headlineSmall" style={styles.modalTitle}>🎉 Agendado!</Text>
          <Text variant="bodyMedium" style={styles.modalText}>
            Seu atendimento de **{categoria}** foi solicitado com sucesso.
          </Text>
          <Divider style={{ marginVertical: 10 }} />
          <Text variant="bodySmall">Local: {campus} ({modalidade})</Text>
          <Text variant="bodySmall">Data: {formatDate(date)} às {formatTime(date)}</Text>
          
          <Button 
            mode="text" 
            onPress={() => setVisible(false)} 
            style={{ marginTop: 20 }}
          >
            Fechar
          </Button>
        </Modal>
      </Portal>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, backgroundColor: '#f5f5f5' },
  container: { padding: 16, paddingBottom: 40 },
  titulo: { marginBottom: 20, textAlign: 'center', fontWeight: 'bold', color: '#6200ee' },
  card: { borderRadius: 12 },
  row: { flexDirection: 'row' },
  dateTimeWrapper: { paddingHorizontal: 8, gap: 10 },
  input: { backgroundColor: '#fff' },
  footer: { padding: 16 },
  btnConfirmar: { flex: 1, borderRadius: 8, paddingVertical: 4 },
  modal: {
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    borderRadius: 12,
  },
  modalTitle: { textAlign: 'center', color: '#4CAF50', marginBottom: 10 },
  modalText: { textAlign: 'center', marginBottom: 10 }
});