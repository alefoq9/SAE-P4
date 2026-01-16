import React from 'react';
import { StyleSheet, ScrollView, View, Image } from 'react-native';
import { Button, Card, Text, useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import IconTopic from '../../components/IconTopic';

export function Servicos() {
  const theme = useTheme();
  const navigation = useNavigation<any>();

  const irParaAgendar = () => navigation.navigate('Agendar');

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text variant="titleLarge" style={[styles.title, { color: theme.colors.primary }]}>
        Serviços
      </Text>

      <Text variant="titleLarge" style={[styles.title1, { color: theme.colors.onSurface }]}>
        Acolhimento Integral
      </Text>
      <Text variant="bodyMedium" style={[styles.description, { color: theme.colors.onSurfaceVariant }]}>
        Conheça nossos serviços de suporte. Nosso objetivo é fortalecer seu vínculo com a universidade e garantir sua permanência acadêmica.
      </Text>

      {/* --- CARD 1: ACOLHIMENTO PSICOSSOCIAL --- */}
      <Card style={[styles.card, { backgroundColor: theme.colors.surface }]} elevation={2}>
        <Card.Content>
          <Text variant="titleLarge" style={[styles.title1, { color: theme.colors.primary }]}>
            Acolhimento Psicossocial
          </Text>

          <Text variant="bodyMedium" style={[styles.description, { color: theme.colors.onSurface, fontWeight: 'bold' }]}>
            O seu espaço seguro para escuta e apoio emocional.
          </Text>
          
          <Image
            source={require('../../assets/ui-image.png')}
            style={styles.image}
          />

          {/* TEXTO RECUPERADO AQUI */}
          <Text variant="bodyMedium" style={[styles.description, { color: theme.colors.onSurface }]}>
            Oferecemos suporte emocional e psicológico para lidar com os desafios da vida universitária e pessoal.
          </Text>

          <Text variant="bodyMedium" style={[styles.description, { color: theme.colors.onSurface }]}>
            Nosso serviço de Acolhimento Psicossocial foi criado com o propósito central de cuidar do seu bem-estar emocional e mental.
          </Text>

          <View style={{ marginBottom: 8 }}>
            <IconTopic icon="heart" text="Atendimento individual (Presencial ou Remoto)." />
            <IconTopic icon="information-outline" text="Orientações em crises de saúde mental." />
          </View>

          <Text variant="titleLarge" style={[styles.title1, { color: theme.colors.onSurface }]}>
            O Atendimento Psicossocial é uma Terapia?
          </Text>

          <Text variant="bodyMedium" style={[styles.description, { color: theme.colors.onSurfaceVariant }]}>
            Não. O nosso acolhimento é um serviço pontual e de orientação. Ele serve como uma porta de entrada para estabilizar a situação e, se necessário, realizar o encaminhamento para a rede de saúde especializada (psicólogos e psiquiatras) fora do campus.
          </Text>

          <Text variant="titleLarge" style={[styles.title1, { color: theme.colors.onSurface }]}>
            Pronto para Agendar?
          </Text>

          <Text variant="bodyMedium" style={[styles.description, { color: theme.colors.onSurfaceVariant }]}>
            Se você está enfrentando dificuldades, sentindo-se sobrecarregado(a) ou precisa de orientação, clique no botão abaixo. Priorizamos um agendamento rápido e discreto.
          </Text>

          <Button
            mode="contained"
            icon="plus"
            onPress={irParaAgendar}
            style={styles.btnAction}
          >
            AGENDAR SERVIÇO
          </Button>
        </Card.Content>
      </Card>

      {/* --- CARD 2: SERVIÇO SOCIAL --- */}
      <Card style={[styles.card, { backgroundColor: theme.colors.surface }]} elevation={2}>
        <Card.Content>
          <Text variant="titleLarge" style={[styles.title1, { color: theme.colors.primary }]}>
            Serviço Social
          </Text>

          <Text variant="bodyMedium" style={[styles.description, { color: theme.colors.onSurface, fontWeight: 'bold' }]}>
            Orientação e apoio para garantir sua permanência na universidade.
          </Text>

          <Image
            source={require('../../assets/ui-image.png')}
            style={styles.image}
          />

          {/* TEXTO RECUPERADO AQUI */}
          <Text variant="bodyMedium" style={[styles.description, { color: theme.colors.onSurface }]}>
            Oferece orientação em questões socioeconômicas, violências e encaminhamento para a rede de saúde e bem-estar.
          </Text>

          <Text variant="bodyMedium" style={[styles.description, { color: theme.colors.onSurface }]}>
            O Serviço Social atua na interface entre o estudante e os recursos institucionais e comunitários. Nosso foco é fortalecer seu vínculo com a universidade, promovendo seus direitos e a sua qualidade de vida, especialmente em momentos de vulnerabilidade.
          </Text>

          <View style={{ marginBottom: 8 }}>
            <IconTopic icon="account-group-outline" text="Vulnerabilidade socioeconômica e auxílios." />
            <IconTopic icon="heart" text="Apoio em casos de violência." />
            <IconTopic icon="human" text="Encaminhamento para serviços de saúde." />
          </View>

          <Text variant="titleLarge" style={[styles.title1, { color: theme.colors.onSurface }]}>
            Quem deve procurar?
          </Text>

          <Text variant="bodyMedium" style={[styles.description, { color: theme.colors.onSurfaceVariant }]}>
            Qualquer estudante que esteja enfrentando dificuldades financeiras inesperadas, necessite de orientação sobre seus direitos a benefícios estudantis ou precise de apoio em questões de saúde ou violência.
          </Text>

          <Button
            mode="contained"
            icon="plus"
            onPress={irParaAgendar}
            style={styles.btnAction}
          >
            AGENDAR SERVIÇO
          </Button>
        </Card.Content>
      </Card>

      {/* --- CARD 3: ORIENTAÇÃO PEDAGÓGICA --- */}
      <Card style={[styles.card, { backgroundColor: theme.colors.surface }]} elevation={2}>
        <Card.Content>
          <Text variant="titleLarge" style={[styles.title1, { color: theme.colors.primary }]}>
            Orientação Pedagógica
          </Text>

          <Text variant="bodyMedium" style={[styles.description, { color: theme.colors.onSurface, fontWeight: 'bold' }]}>
            Foco em cognição e aprendizagem significativa.
          </Text>

          <Image
            source={require('../../assets/ui-image.png')}
            style={styles.image}
          />

          {/* TEXTO RECUPERADO AQUI */}
          <Text variant="bodyMedium" style={[styles.description, { color: theme.colors.onSurface }]}>
            Foco em cognição e aprendizagem significativa, ajudando a superar dificuldades acadêmicas.
          </Text>

          <Text variant="bodyMedium" style={[styles.description, { color: theme.colors.onSurface }]}>
            A Orientação Pedagógica visa aprimorar sua experiência de aprendizagem. Nossos profissionais trabalham para identificar e superar as dificuldades que impactam seu desempenho.
          </Text>

          <View style={{ marginBottom: 8 }}>
            <IconTopic icon="note" text="Foco, concentração e assimilação de conteúdo." />
            <IconTopic icon="clock" text="Gestão do tempo e organização de estudos." />
            <IconTopic icon="human" text="Suporte para estudantes no espectro autista." />
          </View>

          <Button
            mode="contained"
            icon="plus"
            onPress={irParaAgendar}
            style={styles.btnAction}
          >
            AGENDAR SERVIÇO
          </Button>
        </Card.Content>
      </Card>
      
      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  card: { marginVertical: 8, borderRadius: 8, paddingBottom: 8 },
  title: { marginBottom: 4, textAlign: 'center', fontWeight: 'bold' },
  title1: { marginTop: 8, marginBottom: 8, fontWeight: 'bold' },
  description: { marginBottom: 10, lineHeight: 20 },
  image: { alignSelf: 'center', marginBottom: 8, height: 120, resizeMode: 'contain' },
  btnAction: { alignSelf: 'center', marginTop: 8 }
});