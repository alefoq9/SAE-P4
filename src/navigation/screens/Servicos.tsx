import React from 'react';
import { StyleSheet, ScrollView, View, Image } from 'react-native';
import { Button, Card, Text, useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import IconTopic from '../../components/IconTopic';

export function Servicos() {
  const theme = useTheme();
  const navigation = useNavigation<any>();

  // Função para facilitar a navegação nos botões
  const irParaAgendar = () => navigation.navigate('inicioDrawer', { screen: 'agendamentos' });

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text variant="headlineMedium" style={[styles.title, { color: theme.colors.primary }]}>
        Serviços
      </Text>

      <Text variant="titleLarge" style={[styles.title1, { color: theme.colors.onSurface }]}>
        Acolhimento Integral
      </Text>
      <Text variant="bodyMedium" style={[styles.description, { color: theme.colors.onSurfaceVariant }]}>
        Conheça nossos serviços de suporte. Nosso objetivo é fortalecer seu vínculo com a universidade e garantir sua permanência acadêmica.
      </Text>

      {/* --- CARD: ACOLHIMENTO PSICOSSOCIAL --- */}
      <Card style={[styles.card, { backgroundColor: theme.colors.surface }]} mode="elevated">
        <Card.Content>
          <Text variant="titleLarge" style={[styles.title1, { color: theme.colors.primary }]}>
            Acolhimento Psicossocial
          </Text>

          <Text variant="bodyLarge" style={[styles.description, { color: theme.colors.onSurface, fontWeight: 'bold' }]}>
            O seu espaço seguro para escuta e apoio emocional.
          </Text>

          <Image
            source={require('../../assets/ui-image.png')}
            style={styles.image}
          />

          <Text variant="bodyMedium" style={[styles.description, { color: theme.colors.onSurface }]}>
            Oferecemos suporte emocional e psicológico para lidar com os desafios da vida universitária e pessoal.
          </Text>

          <View style={styles.topicWrapper}>
            <IconTopic icon="heart" text="Atendimento individual (Presencial ou Remoto)." />
            <IconTopic icon="information-outline" text="Orientações em crises de saúde mental." />
          </View>

          <Text variant="titleMedium" style={[styles.title1, { color: theme.colors.onSurface }]}>
            O Atendimento Psicossocial é uma Terapia?
          </Text>
          <Text variant="bodyMedium" style={[styles.description, { color: theme.colors.onSurfaceVariant }]}>
            Não. O nosso acolhimento é um serviço pontual e de orientação. Ele serve como uma porta de entrada para estabilizar a situação e realizar encaminhamentos.
          </Text>

          <Button
            mode="contained"
            icon="calendar-plus"
            onPress={irParaAgendar}
            style={styles.btnAgendar}
          >
            AGENDAR ACOLHIMENTO
          </Button>
        </Card.Content>
      </Card>

      {/* --- CARD: SERVIÇO SOCIAL --- */}
      <Card style={[styles.card, { backgroundColor: theme.colors.surface }]} mode="elevated">
        <Card.Content>
          <Text variant="titleLarge" style={[styles.title1, { color: theme.colors.primary }]}>
            Serviço Social
          </Text>

          <Text variant="bodyLarge" style={[styles.description, { color: theme.colors.onSurface, fontWeight: 'bold' }]}>
            Orientação e apoio para garantir sua permanência.
          </Text>

          <Image
            source={require('../../assets/ui-image.png')}
            style={styles.image}
          />

          <View style={styles.topicWrapper}>
            <IconTopic icon="account-group-outline" text="Vulnerabilidade socioeconômica e auxílios." />
            <IconTopic icon="shield-check-outline" text="Apoio em casos de violência." />
            <IconTopic icon="human-greeting" text="Encaminhamento para serviços de saúde." />
          </View>

          <Button
            mode="contained"
            icon="calendar-plus"
            onPress={irParaAgendar}
            style={styles.btnAgendar}
          >
            AGENDAR SERVIÇO SOCIAL
          </Button>
        </Card.Content>
      </Card>

      {/* --- CARD: ORIENTAÇÃO PEDAGÓGICA --- */}
      <Card style={[styles.card, { backgroundColor: theme.colors.surface }]} mode="elevated">
        <Card.Content>
          <Text variant="titleLarge" style={[styles.title1, { color: theme.colors.primary }]}>
            Orientação Pedagógica
          </Text>

          <Text variant="bodyLarge" style={[styles.description, { color: theme.colors.onSurface, fontWeight: 'bold' }]}>
            Foco em aprendizagem e organização de estudos.
          </Text>

          <Image
            source={require('../../assets/ui-image.png')}
            style={styles.image}
          />

          <View style={styles.topicWrapper}>
            <IconTopic icon="notebook-edit-outline" text="Foco, concentração e assimilação." />
            <IconTopic icon="clock-outline" text="Gestão do tempo e organização." />
          </View>

          <Button
            mode="contained"
            icon="calendar-plus"
            onPress={irParaAgendar}
            style={styles.btnAgendar}
          >
            AGENDAR ORIENTAÇÃO
          </Button>
        </Card.Content>
      </Card>
      
      {/* Espaçamento final para não cortar o conteúdo */}
      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    marginVertical: 12,
    borderRadius: 12,
    paddingBottom: 8,
  },
  title: {
    marginBottom: 8,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  title1: {
    marginTop: 12,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  description: {
    marginBottom: 10,
    lineHeight: 20,
  },
  image: {
    alignSelf: 'center',
    marginBottom: 16,
    width: 200,
    height: 120,
    resizeMode: 'contain',
  },
  topicWrapper: {
    marginVertical: 12,
    gap: 4,
  },
  btnAgendar: {
    marginTop: 16,
    alignSelf: 'stretch', // Botão ocupa a largura total do card para melhor clique
  }
});