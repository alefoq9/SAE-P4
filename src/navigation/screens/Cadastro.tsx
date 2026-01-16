import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
    Platform
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Ionicons } from "@expo/vector-icons";

import MyButton from '../../components/MyButton';

// --- Componente para um item da lista de requisitos ---
interface RequirementProps {
    text: string;
    isMet: boolean;
}

const PasswordRequirement = ({ text, isMet }: RequirementProps) => {
    const color = isMet ? "#14AE5C" : "#BF6A02"; // Verde se atendido, Laranja se não
    const iconName = isMet ? "checkmark-circle-outline" : "close-circle-outline";

    return (
        <View style={styles.requirementContainer}>
            <Ionicons name={iconName} size={18} color={color} style={{ marginRight: 8 }} />
            <Text style={{ color: color, fontSize: 14 }}>{text}</Text>
        </View>
    );
};

export default function Cadastro() {
    const navigation = useNavigation<NativeStackNavigationProp<any>>();

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [telefone, setTelefone] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");

    const [esconderSenha, setEsconderSenha] = useState(true);
    const [esconderConfirmarSenha, setEsconderConfirmarSenha] = useState(true);
    const [campoFocado, setCampoFocado] = useState<string | null>(null);
    const [aceitoTermos, setAceitoTermos] = useState(false);
    const [carregando, setCarregando] = useState(false);

    // --- Estados para os requisitos da senha ---
    const [hasMinLength, setHasMinLength] = useState(false);
    const [hasUpperCase, setHasUpperCase] = useState(false);
    const [hasLowerCase, setHasLowerCase] = useState(false);
    const [hasNumber, setHasNumber] = useState(false);
    const [hasSpecialChar, setHasSpecialChar] = useState(false);

    // --- Função para validar a senha em tempo real ---
    const handleSenhaChange = (text: string) => {
        setSenha(text);
        // Mais de 6 caracteres
        setHasMinLength(text.length > 6);
        // Letra maiúscula
        setHasUpperCase(/[A-Z]/.test(text));
        // Letra minúscula
        setHasLowerCase(/[a-z]/.test(text));
        // Número (0 - 9)
        setHasNumber(/[0-9]/.test(text));
        // Caractere especial (Lista expandida incluindo !)
        setHasSpecialChar(/[!@#$%^&*(),.?":{}|<>]/.test(text));
    };

    // Função para decidir a cor da borda
    const getBorderColor = (nomeCampo: string) => {
        // Lógica da SENHA (Requisitos)
        if (nomeCampo === 'senha' && campoFocado === 'senha') {
            const allMet = hasMinLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
            return allMet ? "#14AE5C" : "#BF6A02";
        }

        // Lógica da CONFIRMAÇÃO (Comparação)
        if (nomeCampo === 'confirmarSenha') {
            if (confirmarSenha.length > 0) {
                return senha === confirmarSenha ? "#14AE5C" : "#BF6A02";
            }
        }

        // Padrão (Azul focado, Cinza desfocado)
        return campoFocado === nomeCampo ? "#1351B4" : "#ccc";
    };
    
    // Verifica se todos os requisitos de senha foram atendidos
    const isPasswordValid = hasMinLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;

    const handleCadastro = () => {
        if (!aceitoTermos) {
            alert("Você precisa aceitar os Termos de Serviço.");
            return;
        }
        if (!isPasswordValid) {
            alert("Sua senha não atende a todos os requisitos.");
            return;
        }
        if (senha !== confirmarSenha) {
            alert("As senhas não coincidem.");
            return;
        }

        setCarregando(true);
        setTimeout(() => {
            setCarregando(false);
            console.log("Cadastrado com sucesso!");
            navigation.navigate('Login');
        }, 1500);
    };

    return (
        <View style={styles.containerPrincipal}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1 }}
            >
                <ScrollView
                    contentContainerStyle={styles.scrollContent}
                    showsVerticalScrollIndicator={false}
                >
                    <Text style={styles.title}>Cadastrar no Sistema</Text>

                    {/* --- NOME COMPLETO --- */}
                    <View style={[styles.inputArea, { borderColor: getBorderColor('nome') }]}>
                        <TextInput
                            style={styles.input}
                            placeholder="Nome completo"
                            placeholderTextColor="#999"
                            value={nome}
                            onChangeText={setNome}
                            onFocus={() => setCampoFocado('nome')}
                            onBlur={() => setCampoFocado(null)}
                        />
                    </View>

                    {/* --- EMAIL --- */}
                    <View style={[styles.inputArea, { borderColor: getBorderColor('email') }]}>
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            placeholderTextColor="#999"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            value={email}
                            onChangeText={setEmail}
                            onFocus={() => setCampoFocado('email')}
                            onBlur={() => setCampoFocado(null)}
                        />
                    </View>

                    {/* --- CPF --- */}
                    <View style={[styles.inputArea, { borderColor: getBorderColor('cpf') }]}>
                        <TextInput
                            style={styles.input}
                            placeholder="CPF"
                            placeholderTextColor="#999"
                            keyboardType="numeric"
                            value={cpf}
                            onChangeText={setCpf}
                            onFocus={() => setCampoFocado('cpf')}
                            onBlur={() => setCampoFocado(null)}
                        />
                    </View>

                    {/* --- TELEFONE --- */}
                    <View style={[styles.inputArea, { borderColor: getBorderColor('telefone') }]}>
                        <TextInput
                            style={styles.input}
                            placeholder="Telefone"
                            placeholderTextColor="#999"
                            keyboardType="phone-pad"
                            value={telefone}
                            onChangeText={setTelefone}
                            onFocus={() => setCampoFocado('telefone')}
                            onBlur={() => setCampoFocado(null)}
                        />
                    </View>

                    {/* --- SENHA --- */}
                    <View style={[styles.inputArea, { borderColor: getBorderColor('senha') }]}>
                        <TextInput
                            style={styles.input}
                            placeholder="Senha"
                            placeholderTextColor="#999"
                            secureTextEntry={esconderSenha}
                            value={senha}
                            onChangeText={handleSenhaChange}
                            onFocus={() => setCampoFocado('senha')}
                            onBlur={() => setCampoFocado(null)}
                        />
                        <TouchableOpacity style={styles.icon} onPress={() => setEsconderSenha(!esconderSenha)}>
                            <Ionicons 
                                name={esconderSenha ? 'eye-off' : 'eye'} 
                                size={24} 
                                color={getBorderColor('senha') === "#ccc" ? "#999" : getBorderColor('senha')} 
                            />
                        </TouchableOpacity>
                    </View>

                    {/* --- Lista de Requisitos da Senha --- */}
                    {(campoFocado === 'senha' || senha.length > 0) && (
                        <View style={styles.requirementsList}>
                            <PasswordRequirement text="Mais de 6 caracteres" isMet={hasMinLength} />
                            <PasswordRequirement text="Letra maiúscula e minúscula" isMet={hasUpperCase && hasLowerCase} />
                            <PasswordRequirement text="Número (0 - 9)" isMet={hasNumber} />
                            <PasswordRequirement text="Caractere especial (@, #, $)" isMet={hasSpecialChar} />
                        </View>
                    )}

                    {/* --- CONFIRMAR SENHA --- */}
                    <View style={[styles.inputArea, { borderColor: getBorderColor('confirmarSenha') }]}>
                        <TextInput
                            style={styles.input}
                            placeholder="Confirmar senha"
                            placeholderTextColor="#999"
                            secureTextEntry={esconderConfirmarSenha}
                            value={confirmarSenha}
                            onChangeText={setConfirmarSenha}
                            onFocus={() => setCampoFocado('confirmarSenha')}
                            onBlur={() => setCampoFocado(null)}
                        />
                        <TouchableOpacity style={styles.icon} onPress={() => setEsconderConfirmarSenha(!esconderConfirmarSenha)}>
                            <Ionicons name={esconderConfirmarSenha ? 'eye-off' : 'eye'} size={24} color={campoFocado === 'confirmarSenha' ? "#1351B4" : "#999"} />
                        </TouchableOpacity>
                    </View>

                    {/* --- AVISO DE CONFERÊNCIA DE SENHA --- */}
                    {confirmarSenha.length > 0 && (
                        <View style={styles.passwordMatchMessage}>
                            <Ionicons 
                                name={senha === confirmarSenha ? "checkmark-circle" : "alert-circle"} 
                                size={16} 
                                color={senha === confirmarSenha ? "#14AE5C" : "#BF6A02"} 
                            />
                            <Text style={{ 
                                color: senha === confirmarSenha ? "#14AE5C" : "#BF6A02",
                                fontSize: 12,
                                marginLeft: 5 
                            }}>
                                {senha === confirmarSenha ? "As senhas conferem" : "As senhas não conferem"}
                            </Text>
                        </View>
                    )}

                    {/* --- CHECKBOX TERMOS --- */}
                    <TouchableOpacity
                        style={styles.checkboxContainer}
                        onPress={() => setAceitoTermos(!aceitoTermos)}
                        activeOpacity={0.8}
                    >
                        <Ionicons
                            name={aceitoTermos ? "checkbox" : "square-outline"}
                            size={24}
                            color={aceitoTermos ? "#1351B4" : "#666"}
                        />
                        <Text style={styles.termosText}>
                            Eu concordo com os <Text style={styles.linkText}>Termos de Serviço do SAE</Text>
                        </Text>
                    </TouchableOpacity>

                    {/* --- BOTÃO CADASTRAR --- */}
                    <View style={{ width: '100%', marginTop: 10 }}>
                        <MyButton
                            title="CADASTRAR"
                            onPress={handleCadastro}
                            isLoading={carregando}
                        />
                    </View>

                    <TouchableOpacity style={{ marginTop: 20 }} onPress={() => navigation.goBack()}>
                        <Text style={{ color: '#666' }}>Já tem conta? Faça login</Text>
                    </TouchableOpacity>

                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    containerPrincipal: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContent: {
        paddingHorizontal: 20,
        paddingTop: 50,
        paddingBottom: 50,
        alignItems: 'center',
        gap: 15,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    inputArea: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 56,
        borderWidth: 1.5,
        borderRadius: 5,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
    },
    input: {
        flex: 1,
        height: '100%',
        fontSize: 16,
        color: '#333',
    },
    icon: {
        padding: 5,
    },
    // Estilos para os requisitos
    requirementsList: {
        width: '100%',
        marginTop: -5,
        marginBottom: 5,
        paddingLeft: 5,
        gap: 8,
    },
    requirementContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    // Estilo para mensagem de match de senha
    passwordMatchMessage: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: -10, // Aproxima um pouco mais do input
        marginBottom: 5,
        paddingLeft: 5,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginTop: 5,
        marginBottom: 10,
    },
    termosText: {
        marginLeft: 10,
        color: '#333',
        fontSize: 14,
        flex: 1,
    },
    linkText: {
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    }
});