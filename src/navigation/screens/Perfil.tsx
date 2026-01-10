import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Avatar, List, Divider, useTheme } from 'react-native-paper';

export function Perfil() {
  const theme = useTheme();

  // Dados fictícios do usuário
  const usuario = {
    nome: 'João da Silva',
    email: 'joao.silva@email.com',
    sexo: 'Masculino',
    nascimento: '01/01/1990',
    pais: 'Brasil',
    uf: 'SP',
    cidade: 'São Paulo',
  };

  // Lista de campos incluindo nome e email
  const campos = [
    { label: 'Nome', value: usuario.nome },
    { label: 'Email', value: usuario.email },
    { label: 'Sexo', value: usuario.sexo },
    { label: 'Data de Nascimento', value: usuario.nascimento },
    { label: 'País', value: usuario.pais },
    { label: 'Unidade Federativa', value: usuario.uf },
    { label: 'Cidade', value: usuario.cidade },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Avatar no topo */}
      <View style={styles.header}>
        <Avatar.Text 
          size={150}  // Aumentei o tamanho do avatar
          label={usuario.nome.split(' ').map(n => n[0]).join('')} 
        />
      </View>

      {/* Lista seccionada */}
      <View style={styles.list}>
        {campos.map((item, index) => (
          <View key={index}>
            <List.Item
              title={item.label}
              description={item.value}
            />
            {index < campos.length - 1 && <Divider />}
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme => theme.colors.background,
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 16,
  },
  list: {
    backgroundColor: theme => theme.colors.surface,
    borderRadius: 8,
  },
});
