import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, ScrollView, Platform } from 'react-native';
import { 
  Text, RadioButton, Button, Card, Divider, 
  List, TextInput, Portal, Modal, useTheme 
} from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useAgendamentos } from '../../context/AgendamentosContext';

export default function Agendar() {
  const navigation = useNavigation();
  const theme = useTheme();
  const { adicionarAgendamento } = useAgendamentos();

  // --- ESTADOS DO FORMULÁRIO ---
  const [categoria, setCategoria] = useState<string>('Psicologia');
  const [campus, setCampus] = useState<string>('Campus Central');
  const [modalidade, setModalidade] = useState<string>('Presencial');
  const [date, setDate] = useState(new Date());
  
  const [showPicker, setShowPicker] = useState(false);
  const [pickerMode, setPickerMode] = useState<'date' | 'time'>('date');
  const [visible, setVisible] = useState(false);

  // --- FUNÇÕES ---
  const formatDate = (d: Date) => d.toLocaleDateString('pt-BR');
  const formatTime = (d: Date) => d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

  const onPickerChange = (event: any, selectedDate?: Date) => {
    setShowPicker(false);
    if (selectedDate) setDate(selectedDate);
  };

  const openPicker = (mode: 'date' | 'time') => {
    if (Platform.OS === 'web') {
      alert("Seletor nativo disponível apenas no celular.");
      return;
    }
    setPickerMode(mode);
    setShowPicker(true);
  };

  const finalizarAgendamento = () => {
    const novo = {
      id: Math.random().toString(36).substr(2, 9),
      tipo: categoria,
      data: formatDate(date),
      hora: formatTime(date),
      modalidade: modalidade,
      campus: campus
    };

    adicionarAgendamento(novo);
    setVisible(true);
  };

  const fecharESair = () => {
    setVisible(false);
    navigation.goBack();
  };

  return (
    <ScrollView style={[styles.background, { backgroundColor: theme.colors.background }]}>
      <View style={styles.container}>
        <Text variant="headlineSmall" style={[styles.titulo, { color: theme.colors.primary }]}>
          Novo Agendamento
        </Text>

        <Card style={styles.card} mode="elevated">
          <Card.Content>
            <List.Section>
              <List.Subheader style={styles.subheader}>O que você precisa?</List.Subheader>
              <RadioButton.Group onValueChange={v => setCategoria(v)} value={categoria}>
                <RadioButton.Item label="Psicologia" value="Psicologia" />
                <RadioButton.Item label="Serviço Social" value="Serviço Social" />
                <RadioButton.Item label="Orientação Pedagógica" value="Orientação Pedagógica" />
              </RadioButton.Group>
            </List.Section>

            <Divider />

            <List.Section>
              <List.Subheader style={styles.subheader}>Localização</List.Subheader>
              <RadioButton.Group onValueChange={v => setCampus(v)} value={campus}>
                <RadioButton.Item label="Campus Central" value="Campus Central" />
                <RadioButton.Item label="Campus Pici" value="Campus Pici" />
              </RadioButton.Group>
            </List.Section>

            <Divider />

            <List.Section>
              <List.Subheader style={styles.subheader}>Formato do atendimento</List.Subheader>
              <RadioButton.Group onValueChange={v => setModalidade(v)} value={modalidade}>
                <View style={styles.row}>
                  <RadioButton.Item label="Presencial" value="Presencial" style={{ flex: 1 }} />
                  <RadioButton.Item label="Remoto" value="Remoto" style={{ flex: 1 }} />
                </View>
              </RadioButton.Group>
            </List.Section>

            <Divider />

            <List.Section>
              <List.Subheader style={styles.subheader}>Escolha o horário</List.Subheader>
              <View style={styles.dateTimeWrapper}>
                <TextInput
                  label="Data"
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
            <Button mode="contained" onPress={finalizarAgendamento} style={styles.btnConfirmar}>
              Confirmar Agendamento
            </Button>
          </Card.Actions>
        </Card>
      </View>

      {showPicker && Platform.OS !== 'web' && (
        <DateTimePicker value={date} mode={pickerMode} is24Hour={true} onChange={onPickerChange} />
      )}

      <Portal>
        <Modal visible={visible} onDismiss={fecharESair} contentContainerStyle={[styles.modal, { backgroundColor: theme.colors.surface }]}>
          <Text variant="headlineSmall" style={[styles.modalTitle, { color: theme.colors.primary }]}>🎉 Agendado!</Text>
          <Text variant="bodyMedium" style={styles.modalText}>Seu atendimento de **{categoria}** foi solicitado.</Text>
          <Divider style={{ marginVertical: 10 }} />
          <Text variant="bodySmall">Unidade: {campus}</Text>
          <Text variant="bodySmall">Data: {formatDate(date)} às {formatTime(date)}</Text>
          <Button mode="contained" onPress={fecharESair} style={{ marginTop: 20 }}>Entendido</Button>
        </Modal>
      </Portal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1 },
  container: { padding: 16, paddingBottom: 40 },
  titulo: { marginBottom: 20, textAlign: 'center', fontWeight: 'bold' },
  card: { borderRadius: 12 },
  row: { flexDirection: 'row' },
  dateTimeWrapper: { gap: 10 },
  input: { backgroundColor: 'transparent', marginBottom: 10 },
  footer: { padding: 16 },
  btnConfirmar: { flex: 1, paddingVertical: 4 },
  subheader: { fontWeight: 'bold',
    fontSize: 16},
  modal: { padding: 24, margin: 20, borderRadius: 16 },
  modalTitle: { textAlign: 'center', fontWeight: 'bold', marginBottom: 12 },
  modalText: { textAlign: 'center' }
});