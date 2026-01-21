import React, { useState } from 'react';
import { View, StyleSheet, Image, ScrollView, Platform } from "react-native";
// Importes para navegação e correção de tipos
import { useNavigation, CommonActions } from '@react-navigation/native'; 
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TextInput, Text, useTheme } from 'react-native-paper';

import Logo from '../../assets/logo-sae-tagline.png';
import MyButton from '../../components/MyButton';
import SocialButton from '../../components/SocialButton';
import TextLink from '../../components/TextLink';

export default function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [esconderSenha, setEsconderSenha] = useState(true);
    
    const theme = useTheme();

    // Tipagem correta para evitar o erro de 'never' e permitir o reset
    const navigation = useNavigation<NativeStackNavigationProp<any>>();

    const handleLogin = () => {
        // RESET: Limpa o histórico de Login/Cadastro e define o App como tela inicial
        // Isso resolve o problema do botão voltar aparecer no lugar do menu
        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: 'BemVindo' }], 
            })
        );
    };

    return (
        <ScrollView 
            contentContainerStyle={[styles.container, { backgroundColor: theme.colors.background }]}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.centerContent}>
                <Image source={Logo} style={styles.logo} />
                <Text variant="titleLarge" style={[styles.title, { color: theme.colors.onSurface }]}>
                    Acesso ao Sistema
                </Text>
            </View>
            
            {/* Input Email */}
            <TextInput
                label="E-mail"
                mode="outlined"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                style={styles.inputPaper}
                activeOutlineColor={theme.colors.primary}
                textColor={theme.colors.onSurface}
            />

            {/* Input Senha */}
            <TextInput
                label="Senha"
                mode="outlined"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry={esconderSenha}
                style={styles.inputPaper}
                activeOutlineColor={theme.colors.primary}
                textColor={theme.colors.onSurface}
                right={
                    <TextInput.Icon 
                        icon={esconderSenha ? "eye-off" : "eye"} 
                        onPress={() => setEsconderSenha(!esconderSenha)} 
                        color={theme.colors.onSurfaceVariant}
                    />
                }
            />
            
            <View style={styles.widthWrapper}>
                <TextLink 
                    title="Esqueci minha senha" 
                    onPress={() => alert('Recuperação de senha')}
                />
            </View>

            <View style={[styles.widthWrapper, { marginTop: 10 }]}>
                <MyButton title="ENTRAR" onPress={handleLogin} />
            </View>

            <View style={styles.widthWrapper}>
                <SocialButton 
                    title="Entrar com Google" 
                    iconName="logo-google" 
                    onPress={() => alert('Lógica do Google')}
                />
            </View>
            
            {/* Área de Cadastro Corrigida e Alinhada */}
            <View style={styles.cadastroContainer}>
                <Text style={[styles.textoCadastro, { color: theme.colors.onSurface }]}>
                    Ainda não tem conta?
                </Text>
                <TextLink 
                    title="Primeiro Acesso" 
                    onPress={() => navigation.navigate('Cadastro')}
                    customStyle={styles.linkAjuste} 
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 40,
        gap: 12,
    },
    centerContent: {
        alignItems: 'center',
        justifyContent: 'center' 
    },
    title: {
        marginBottom: 20,
        fontWeight: 'bold'
    },
    inputPaper: {
        width: 328,
        backgroundColor: 'transparent',
    },
    logo: {
        width: 220,
        height: 110,
        resizeMode: 'contain',
        marginBottom: 10
    },
    widthWrapper: {
        width: 328,
    },
    cadastroContainer: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textoCadastro: {
        fontSize: 14,
    },
    linkAjuste: {
        marginTop: 0,
        marginLeft: 5, // Espaço entre o texto e o link
        alignSelf: 'center',
    }
});