import { Image, StyleSheet, View } from "react-native";
import TopBar from "../../../components/TopBar"; 
import { Button, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export default function Etapa1() {

    const navigation = useNavigation<NativeStackNavigationProp<any>>();

    return (
        <View style={{ flex: 1 }}>

            <Image style={{ alignSelf: 'center', marginTop: 60 }} source={require('../../../assets/etapa1.png')} />

            <View style={styles.container}>
                <Text style={styles.title}>
                    Passo 1
                </Text>
                <Text style={styles.secondaryText}>
                    Nosso app foi criado para simplificar sua vida, permitindo o agendamento rápido de atendimentos essenciais.
                </Text>

                <Button
                    buttonColor="#E5E5E5"
                    mode="contained"
                    onPress={() => { navigation.replace('Etapa2') }}
                    style={{ alignSelf: 'center', marginTop: 16 }}
                    labelStyle={{ color: '#1351B4',}}
                >
                    PULAR
                </Button>
            </View>

            <View style={styles.containerDots}>

                <View style={styles.dot} />
                <View style={[styles.dot, styles.active]} />
                <View style={styles.dot} />
                <View style={styles.dot} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 30,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',

        flex: 1,
    },
    title: {
        fontSize: 24,
        color: '#1351B4',
        marginBottom: 8
    },
    secondaryText: {
        fontSize: 14,
        textAlign: 'center',
        color: '#212121',
        marginBottom: 24
    },
    containerDots: {
        margin: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 8,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#CCCCCC',
    },
    active: {
        backgroundColor: '#1351B4',
    },
})