import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Card, Text, useTheme, TextInput, Button, Divider } from 'react-native-paper';

export function MeusDados() {
  const theme = useTheme();

  // Estados para dados que o usuário pode simular a alteração
  const [pais, setPais] = useState('Brasil');
  const [ufNac, setUfNac] = useState('CE');
  const [munNac, setMunNac] = useState('Fortaleza');
  const [cep, setCep] = useState('60440-554');
  const [logradouro, setLogradouro] = useState('Rua Campus do Pici');
  const [numero, setNumero] = useState('S/N');
  const [bairro, setBairro] = useState('Pici');
  const [telefone, setTelefone] = useState('(85) 3366-9891');
  const [email, setEmail] = useState('estudante.sae@ufc.br');

  return (
    <ScrollView 
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      contentContainerStyle={styles.scrollContent}
    >
      <Text 
        variant="headlineSmall" 
        style={[styles.headerTitle, { color: theme.colors.onSurface }]}
      >
        Meus Dados
      </Text>

      {/* --- SEÇÃO 1: DADOS DO DISCENTE (FIXOS) --- */}
      <Card style={[styles.card, { backgroundColor: theme.colors.surface }]} mode="elevated">
        <Card.Content>
          <Text variant="titleMedium" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            Dados do Discente
          </Text>
          <Divider style={styles.divider} />
          
          <DataInfo label="Nome" value="Fulano de Tal da Silva" />
          <DataInfo label="Curso" value="Sistemas de Informação" />
          <DataInfo label="Sexo" value="Masculino" />
          <DataInfo label="Data de Nascimento" value="12/05/2001" />
          <DataInfo label="Estado Civil" value="Solteiro(a)" />
        </Card.Content>
      </Card>

      {/* --- SEÇÃO 2: NACIONALIDADE (EDITÁVEL) --- */}
      <Card style={[styles.card, { backgroundColor: theme.colors.surface }]} mode="elevated">
        <Card.Content>
          <Text variant="titleMedium" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            Nacionalidade
          </Text>
          <TextInput label="País" value={pais} onChangeText={setPais} mode="outlined" style={styles.input} />
          <View style={styles.row}>
            <TextInput label="UF" value={ufNac} onChangeText={setUfNac} mode="outlined" style={[styles.input, { flex: 1, marginRight: 8 }]} />
            <TextInput label="Município" value={munNac} onChangeText={setMunNac} mode="outlined" style={[styles.input, { flex: 2 }]} />
          </View>
        </Card.Content>
      </Card>

      {/* --- SEÇÃO 3: ENDEREÇO (EDITÁVEL) --- */}
      <Card style={[styles.card, { backgroundColor: theme.colors.surface }]} mode="elevated">
        <Card.Content>
          <Text variant="titleMedium" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            Endereço
          </Text>
          <TextInput label="CEP" value={cep} onChangeText={setCep} mode="outlined" style={styles.input} />
          <TextInput label="Logradouro" value={logradouro} onChangeText={setLogradouro} mode="outlined" style={styles.input} />
          <View style={styles.row}>
            <TextInput label="Número" value={numero} onChangeText={setNumero} mode="outlined" style={[styles.input, { flex: 1, marginRight: 8 }]} />
            <TextInput label="Bairro" value={bairro} onChangeText={setBairro} mode="outlined" style={[styles.input, { flex: 2 }]} />
          </View>
          <TextInput label="Complemento" placeholder="Apto, Bloco..." mode="outlined" style={styles.input} />
        </Card.Content>
      </Card>

      {/* --- SEÇÃO 4: CONTATO (EDITÁVEL) --- */}
      <Card style={[styles.card, { backgroundColor: theme.colors.surface }]} mode="elevated">
        <Card.Content>
          <Text variant="titleMedium" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            Contato
          </Text>
          <TextInput label="Telefone/Celular" value={telefone} onChangeText={setTelefone} mode="outlined" style={styles.input} />
          <TextInput label="Email" value={email} onChangeText={setEmail} mode="outlined" style={styles.input} />
        </Card.Content>
      </Card>

      <Button 
        mode="contained" 
        onPress={() => {}} 
        style={styles.button}
        contentStyle={{ paddingVertical: 8 }}
      >
        CONFIRMAR ALTERAÇÕES
      </Button>

    </ScrollView>
  );
}

// Sub-componente para exibir dados fixos de forma elegante
function DataInfo({ label, value }: { label: string; value: string }) {
  const theme = useTheme();
  return (
    <View style={styles.dataInfoContainer}>
      <Text variant="labelMedium" style={{ color: theme.colors.onSurfaceVariant }}>{label}</Text>
      <Text variant="bodyLarge" style={{ color: theme.colors.onSurface, fontWeight: '500' }}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 110, // Espaço extra para a Tab Bar
  },
  headerTitle: {
    marginBottom: 20,
    fontWeight: 'bold',
  },
  card: {
    borderRadius: 12,
    marginBottom: 16,
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  divider: {
    marginBottom: 12,
  },
  dataInfoContainer: {
    marginBottom: 12,
  },
  input: {
    marginBottom: 12,
    backgroundColor: 'transparent',
  },
  row: {
    flexDirection: 'row',
  },
  button: {
    marginTop: 8,
    borderRadius: 8,
  },
});