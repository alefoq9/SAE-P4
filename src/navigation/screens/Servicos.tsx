import React from 'react';
import { StyleSheet, ScrollView, View, Image } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';
// Import your new component (adjust the path if necessary)
import IconTopic from '../../components/IconTopic'

export function Servicos() {
    return (
        <ScrollView style={styles.container}>
            <Text variant="titleLarge" style={styles.title}>
                Serviços
            </Text>

            <Text variant="titleLarge" style={styles.title1}>
                Acolhimento Integral
            </Text>
            <Text variant="bodyMedium" style={styles.description}>
                Conheça nossos serviços de suporte. Nosso objetivo é fortalecer seu vínculo com a universidade e garantir sua permanência acadêmica.
            </Text>

            <Card style={styles.card} elevation={2}>
                <Card.Content>
                    <Text variant="titleLarge" style={styles.title1}>
                        Acolhimento Psicossocial
                    </Text>

                    <Text variant="bodyMedium" style={styles.description}>
                        O seu espaço seguro para escuta e apoio emocional.
                    </Text>
                    <Image
                        source={require('../../assets/ui-image.png')}
                        style={styles.image}
                    />

                    <Text variant="bodyMedium" style={styles.description}>
                        Oferecemos suporte emocional e psicológico para lidar com os desafios da vida universitária e pessoal.
                    </Text>

                    <Text variant="bodyMedium" style={styles.description}>
                        Nosso serviço de Acolhimento Psicossocial foi criado com o propósito central de cuidar do seu bem-estar emocional e mental.
                    </Text>

                    <View style={{ marginBottom: 8 }}>

                        <IconTopic
                            icon="heart"
                            text="Atendimento individual (Presencial ou Remoto)."
                        />

                        <IconTopic
                            icon="information-outline"
                            text="Orientações em crises de saúde mental."
                        />

                    </View>

                    <Text variant="titleLarge" style={styles.title1}>
                        O Atendimento Psicossocial é uma Terapia?
                    </Text>

                    <Text variant="bodyMedium" style={styles.description}>
                        Não. O nosso acolhimento é um serviço pontual e de orientação. Ele serve como uma porta de entrada para estabilizar a situação e, se necessário, realizar o encaminhamento para a rede de saúde especializada (psicólogos e psiquiatras) fora do campus.
                    </Text>

                    <Text variant="titleLarge" style={styles.title1}>
                        Pronto para Agendar?
                    </Text>

                    <Text variant="bodyMedium" style={styles.description}>
                        Se você está enfrentando dificuldades, sentindo-se sobrecarregado(a) ou precisa de orientação, clique no botão abaixo. Priorizamos um agendamento rápido e discreto.
                    </Text>

                    <Button
                        mode="contained"
                        icon="plus"
                        onPress={() => { }}
                        style={{ alignSelf: 'center' }}
                    >
                        AGENDAR SERVIÇO
                    </Button>
                </Card.Content>
            </Card>
            <Card style={styles.card} elevation={2}>
                <Card.Content>
                    <Text variant="titleLarge" style={styles.title1}>
                        Serviço Social
                    </Text>

                    <Text variant="bodyMedium" style={styles.description}>
                        Orientação e apoio para garantir sua permanência na universidade.
                    </Text>
                    <Image
                        source={require('../../assets/ui-image.png')}
                        style={styles.image}
                    />

                    <Text variant="bodyMedium" style={styles.description}>
                        Oferece orientação em questões socioeconômicas, violências e encaminhamento para a rede de saúde e bem-estar.
                    </Text>

                    <Text variant="bodyMedium" style={styles.description}>
                        O Serviço Social atua na interface entre o estudante e os recursos institucionais e comunitários. Nosso foco é fortalecer seu vínculo com a universidade, promovendo seus direitos e a sua qualidade de vida, especialmente em momentos de vulnerabilidade.
                    </Text>

                    <View style={{ marginBottom: 8 }}>

                        <IconTopic
                            icon="account-group-outline"
                            text="Vulnerabilidade socioeconômica e auxílios.."
                        />

                        <IconTopic
                            icon="heart"
                            text="Apoio em casos de violência."
                        />
                        <IconTopic
                            icon="human"
                            text="Encaminhamento para serviços de saúde."
                        />


                    </View>

                    <Text variant="titleLarge" style={styles.title1}>
                        Quem deve procurar?
                    </Text>

                    <Text variant="bodyMedium" style={styles.description}>
                        Qualquer estudante que esteja enfrentando dificuldades financeiras inesperadas, necessite de orientação sobre seus direitos a benefícios estudantis ou precise de apoio em questões de saúde ou violência.
                    </Text>

                    <Text variant="titleLarge" style={styles.title1}>
                        Pronto para Agendar?
                    </Text>

                    <Text variant="bodyMedium" style={styles.description}>
                        Garantir seus direitos é o primeiro passo para o sucesso acadêmico. Agende um horário para conhecer os recursos disponíveis para você.
                    </Text>

                    <Button
                        mode="contained"
                        icon="plus"
                        onPress={() => { }}
                        style={{ alignSelf: 'center' }}
                    >
                        AGENDAR SERVIÇO
                    </Button>
                </Card.Content>
            </Card>
            <Card style={styles.card} elevation={2}>
                <Card.Content>
                    <Text variant="titleLarge" style={styles.title1}>
                        Orientação Pedagógica
                    </Text>

                    <Text variant="bodyMedium" style={styles.description}>
                        O seu espaço seguro para escuta e apoio emocional.
                    </Text>
                    <Image
                        source={require('../../assets/ui-image.png')}
                        style={styles.image}
                    />

                    <Text variant="bodyMedium" style={styles.description}>
                        Foco em cognição e aprendizagem significativa, ajudando a superar dificuldades acadêmicas.
                    </Text>

                    <Text variant="bodyMedium" style={styles.description}>
                        A Orientação Pedagógica visa aprimorar sua experiência de aprendizagem. Nossos profissionais trabalham para identificar e superar as dificuldades que impactam seu desempenho, transformando desafios em habilidades sólidas para o sucesso acadêmico.
                    </Text>

                    <View style={{ marginBottom: 8 }}>

                        <IconTopic
                            icon="note"
                            text="Foco, concentração e assimilação de conteúdo."
                        />

                        <IconTopic
                            icon="clock"
                            text="Gestão do tempo e organização de estudos."
                        />
                        <IconTopic
                            icon="human"
                            text="Suporte para estudantes no espectro autista."
                        />

                    </View>

                    <Text variant="titleLarge" style={styles.title1}>
                        Quem deve procurar?
                    </Text>

                    <Text variant="bodyMedium" style={styles.description}>
                        Estudantes que sentem que estão se esforçando, mas não obtendo os resultados esperados, que possuem dificuldade em se organizar ou que buscam estratégias mais eficientes de estudo.
                    </Text>

                    <Text variant="titleLarge" style={styles.title1}>
                        Pronto para Agendar?
                    </Text>

                    <Text variant="bodyMedium" style={styles.description}>
                        Invista em suas habilidades de aprendizagem. Agende sua orientação e descubra as melhores ferramentas para turbinar seu desempenho.
                    </Text>

                    <Button
                        mode="contained"
                        icon="plus"
                        onPress={() => { }}
                        style={{ alignSelf: 'center' }}
                    >
                        AGENDAR SERVIÇO
                    </Button>
                </Card.Content>
            </Card>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    card: {
        marginVertical: 8,
        borderRadius: 8,
        paddingBottom: 8,
    },
    title: {
        marginBottom: 4,
        textAlign: 'center',
    },
    title1: {
        marginTop: 8,
        marginBottom: 8,
        fontWeight: 'bold',
    },
    description: {
        marginBottom: 10,
        color: '#444',
    },
    image: {
        alignSelf: 'center',
        marginBottom: 8,
    }
});