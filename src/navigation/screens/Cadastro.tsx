import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, KeyboardAvoidingView, Platform, TouchableOpacity } from "react-native";
import { useNavigation, CommonActions } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TextInput, Text, useTheme, Checkbox } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import MyButton from '../../components/MyButton';

export default function Cadastro() {
    const theme = useTheme();
    const navigation = useNavigation<NativeStackNavigationProp<any>>();

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [telefone, setTelefone] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");

    const [esconderSenha, setEsconderSenha] = useState(true);
    const [esconderConfirmarSenha, setEsconderConfirmarSenha] = useState(true);
    const [aceitoTermos, setAceitoTermos] = useState(false);
    const [carregando, setCarregando] = useState(false);
    
    // Novo estado para controlar se o campo de senha está focado
    const [senhaFocada, setSenhaFocada] = useState(false);

    // Lógica de validação (Constantes calculadas)
    const hasMinLength = senha.length > 6;
    const hasUpperCase = /[A-Z]/.test(senha);
    const hasLowerCase = /[a-z]/.test(senha);
    const hasNumber = /[0-9]/.test(senha);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(senha);
    
    const isPasswordValid = hasMinLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
    const senhasConferem = senha === confirmarSenha && confirmarSenha.length > 0;

    const getBorderColor = (valid: boolean, length: number) => {
        if (length === 0) return theme.colors.outline;
        return valid ? "#14AE5C" : "#BF6A02";
    };

    const handleCadastro = () => {
        if (!aceitoTermos) return alert("Aceite os termos.");
        if (!isPasswordValid) return alert("Sua senha não atende aos requisitos.");
        if (!senhasConferem) return alert("As senhas não coincidem.");
        
        setCarregando(true);
        setTimeout(() => {
            setCarregando(false);
            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: 'Login' }],
                })
            );
        }, 1500);
    };

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"} 
            style={[styles.container, { backgroundColor: theme.colors.background }]}
        >
            <ScrollView 
                contentContainerStyle={styles.scrollContent} 
                showsVerticalScrollIndicator={false}
            >
                <Text variant="headlineSmall" style={[styles.title, { color: theme.colors.onSurface }]}>
                    Cadastrar no Sistema
                </Text>

                <TextInput label="Nome completo" mode="outlined" value={nome} onChangeText={setNome} style={styles.inputPaper} />
                <TextInput label="Email" mode="outlined" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" style={styles.inputPaper} />
                <TextInput label="CPF" mode="outlined" value={cpf} onChangeText={setCpf} keyboardType="numeric" style={styles.inputPaper} />
                <TextInput label="Telefone" mode="outlined" value={telefone} onChangeText={setTelefone} keyboardType="phone-pad" style={styles.inputPaper} />

                {/* --- INPUT SENHA --- */}
                <TextInput
                    label="Senha"
                    mode="outlined"
                    value={senha}
                    onChangeText={setSenha}
                    onFocus={() => setSenhaFocada(true)}
                    onBlur={() => setSenhaFocada(false)}
                    secureTextEntry={esconderSenha}
                    style={styles.inputPaper}
                    outlineColor={getBorderColor(isPasswordValid, senha.length)}
                    activeOutlineColor={getBorderColor(isPasswordValid, senha.length)}
                    right={<TextInput.Icon icon={esconderSenha ? "eye-off" : "eye"} onPress={() => setEsconderSenha(!esconderSenha)} />}
                />

                {/* REQUISITOS: Só aparecem se o campo estiver focado OU se já tiver texto */}
                {(senhaFocada || senha.length > 0) && (
                    <View style={styles.requirementsList}>
                        <RequirementItem text="Mais de 6 caracteres" met={hasMinLength} />
                        <RequirementItem text="Letra maiúscula e minúscula" met={hasUpperCase && hasLowerCase} />
                        <RequirementItem text="Número e Caractere Especial" met={hasNumber && hasSpecialChar} />
                    </View>
                )}

                {/* --- INPUT CONFIRMAR SENHA --- */}
                <TextInput
                    label="Confirmar Senha"
                    mode="outlined"
                    value={confirmarSenha}
                    onChangeText={setConfirmarSenha}
                    secureTextEntry={esconderConfirmarSenha}
                    style={[styles.inputPaper, { marginTop: (senhaFocada || senha.length > 0) ? 0 : 5 }]}
                    outlineColor={getBorderColor(senhasConferem, confirmarSenha.length)}
                    activeOutlineColor={getBorderColor(senhasConferem, confirmarSenha.length)}
                    right={<TextInput.Icon icon={esconderConfirmarSenha ? "eye-off" : "eye"} onPress={() => setEsconderConfirmarSenha(!esconderConfirmarSenha)} />}
                />

                {/* MENSAGEM DE CONFERÊNCIA (Igual ao código antigo) */}
                {confirmarSenha.length > 0 && (
                    <View style={styles.passwordMatchMessage}>
                        <MaterialCommunityIcons 
                            name={senhasConferem ? "check-circle" : "alert-circle"} 
                            size={16} 
                            color={senhasConferem ? "#14AE5C" : "#BF6A02"} 
                        />
                        <Text style={{ color: senhasConferem ? "#14AE5C" : "#BF6A02", fontSize: 12, marginLeft: 5 }}>
                            {senhasConferem ? "As senhas conferem" : "As senhas não conferem"}
                        </Text>
                    </View>
                )}

                <TouchableOpacity style={styles.checkboxArea} onPress={() => setAceitoTermos(!aceitoTermos)}>
                    <Checkbox status={aceitoTermos ? 'checked' : 'unchecked'} color={theme.colors.primary} />
                    <Text style={{ flex: 1, color: theme.colors.onSurface }}>
                        Eu concordo com os <Text style={styles.link}>Termos de Serviço do SAE</Text>
                    </Text>
                </TouchableOpacity>

                <MyButton title="CADASTRAR" onPress={handleCadastro} isLoading={carregando} />

                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.footerLink}>
                    <Text style={{ color: theme.colors.onSurfaceVariant }}>Já tem conta? Faça login</Text>
                </TouchableOpacity>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const RequirementItem = ({ text, met }: { text: string; met: boolean }) => (
    <View style={styles.reqRow}>
        <MaterialCommunityIcons name={met ? "check-circle" : "close-circle"} size={16} color={met ? "#14AE5C" : "#BF6A02"} />
        <Text style={{ color: met ? "#14AE5C" : "#BF6A02", fontSize: 12, marginLeft: 6 }}>{text}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: { flex: 1 },
    scrollContent: { 
        paddingHorizontal: 20, 
        paddingTop: Platform.OS === 'ios' ? 80 : 60, 
        paddingBottom: 50,
        alignItems: 'center', 
        gap: 10 
    },
    title: { fontWeight: 'bold', marginBottom: 20 },
    inputPaper: { width: '100%', backgroundColor: 'transparent' },
    requirementsList: { width: '100%', paddingHorizontal: 5, marginVertical: 8, gap: 4 },
    reqRow: { flexDirection: 'row', alignItems: 'center' },
    passwordMatchMessage: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: -5,
        marginBottom: 5,
        paddingLeft: 5,
    },
    checkboxArea: { flexDirection: 'row', alignItems: 'center', width: '100%', marginVertical: 10 },
    link: { fontWeight: 'bold', textDecorationLine: 'underline' },
    footerLink: { marginTop: 20, padding: 10 }
});