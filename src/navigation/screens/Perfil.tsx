import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Avatar, List, Divider, useTheme, Text } from 'react-native-paper';

export function Perfil() {
  const theme = useTheme();

  // Dados organizados por categorias
  const dados = {
    discente: [
      { label: 'Nome', value: 'João da Silva' },
      { label: 'Sexo', value: 'Masculino' },
      { label: 'Data de Nascimento', value: '01/01/1990' },
      { label: 'País', value: 'Brasil' },
      { label: 'Unidade Federativa', value: 'SP' },
      { label: 'Cidade', value: 'São Paulo' },
    ],
    institucionais: [
      { label: 'Matrícula', value: '2023010203' },
      { label: 'Curso', value: 'Engenharia de Software' },
      { label: 'Semestre de Entrada', value: '2023.1' },
      { label: 'Semestre Letivo', value: '4º Semestre' },
      { label: 'Estado da Matrícula', value: 'Ativo' },
    ],
    contato: [
      { label: 'E-mail', value: 'joao.silva@email.com' },
      { label: 'Telefone', value: '(11) 99999-9999' },
      { label: 'Endereço', value: 'Rua das Flores, 123, Centro' },
    ]
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      {/* Avatar no topo */}
      <View style={styles.header}>
        <Avatar.Text 
          size={120} 
          label={getInitials(dados.discente[0].value)} 
          style={{ backgroundColor: theme.colors.primary }}
        />
      </View>

      {/* Seções de Informação */}
      <View style={[styles.card, { backgroundColor: theme.colors.surface }]}>
        
        {/* DADOS DO DISCENTE */}
        <List.Section>
          <List.Subheader style={styles.subheader}>Dados do Discente</List.Subheader>
          {dados.discente.map((item, index) => (
            <View key={`discente-${index}`}>
              <List.Item title={item.label} description={item.value} />
              {index < dados.discente.length - 1 && <Divider />}
            </View>
          ))}
        </List.Section>

        {/* DADOS INSTITUCIONAIS */}
        <List.Section>
          <List.Subheader style={styles.subheader}>Dados Institucionais</List.Subheader>
          {dados.institucionais.map((item, index) => (
            <View key={`inst-${index}`}>
              <List.Item title={item.label} description={item.value} />
              {index < dados.institucionais.length - 1 && <Divider />}
            </View>
          ))}
        </List.Section>

        {/* DADOS DE CONTATO */}
        <List.Section>
          <List.Subheader style={styles.subheader}>Dados de Contato</List.Subheader>
          {dados.contato.map((item, index) => (
            <View key={`contato-${index}`}>
              <List.Item title={item.label} description={item.value} />
              {index < dados.contato.length - 1 && <Divider />}
            </View>
          ))}
        </List.Section>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginVertical: 24,
  },
  userName: {
    marginTop: 12,
    fontWeight: 'bold',
  },
  card: {
    borderRadius: 12,
    marginBottom: 32,
    overflow: 'hidden', // Garante que o Divider não passe da borda arredondada
  },
  subheader: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#1351B4', // Cor destaque para as seções
  },
});