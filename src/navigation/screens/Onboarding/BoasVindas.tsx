import React from 'react';
import { Image, StyleSheet, View } from "react-native";
import TopBar from "../../../components/TopBar"; 
import { Button, Text } from "react-native-paper";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export default function BemVindo() {

    const navigation = useNavigation<NativeStackNavigationProp<any>>();
    
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}> 

            <Image 
                style={{ alignSelf: 'center', marginTop: 60 }} 
                source={require('../../../assets/bem-vindo.png')} 
            />

            <View style={styles.container}>
                <Text style={styles.title}>
                    Bem vindo ao SAE
                </Text>
                <Text style={styles.secondaryText}>
                    O SAE (Serviço de Apoio ao Estudante) é o seu portal de suporte na universidade.
                </Text>

                <Button
                    buttonColor="#1351B4"
                    mode="contained"
                    onPress={() => { navigation.replace('Etapa1') }} 
                    style={{ alignSelf: 'center', marginTop: 16 }}
                >
                    INICIAR
                </Button>
            </View>

            <View style={styles.containerDots}>
                <View style={[styles.dot, styles.active]} />
                <View style={styles.dot} />
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
        fontWeight: 'bold',
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
        marginBottom: 40,
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