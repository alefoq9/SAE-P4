import React, { useState } from 'react';
// 1. Importar a tipagem correta da navegação Stack
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Logo from '../../assets/logo-sae-tagline.png';

import MyButton from '../../components/MyButton';
import SocialButton from '../../components/SocialButton';
import TextLink from '../../components/TextLink';

export default function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [esconderSenha, setEsconderSenha] = useState(true);
    
    // 2. CORREÇÃO: Avisar que esse estado aceita string OU null
    const [campoFocado, setCampoFocado] = useState<string | null>(null);

    // 3. CORREÇÃO: Tipar o hook de navegação para habilitar o .replace()
    const navigation = useNavigation<NativeStackNavigationProp<any>>();

    const [carregando, setCarregando] = useState(false);

    const handleLogin = () => {
        console.log("Logando...");
        // Agora o TypeScript sabe que .replace existe!
        // Certifique-se que o nome 'AppPrincipal' está registrado no seu arquivo de rotas (App.js ou index.tsx)
        navigation.replace('BemVindo');
    };

    const getBorderColor = (nomeCampo: string) => {
        return campoFocado === nomeCampo ? "#1351B4" : "#ccc";
    };

    return (
        <View style={styles.container}>
            <View style={styles.centerContent}>
                <Image source={Logo} style={styles.logo} />
                <Text style={styles.title}>Acesso ao Sistema</Text>
            </View>
            
            {/* Input Email */}
            <View style={[styles.inputArea, { borderColor: getBorderColor('email') }]}>
                <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    placeholderTextColor="#999"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                    selectionColor="#1351B4"
                    onFocus={() => setCampoFocado('email')}
                    onBlur={() => setCampoFocado(null)}
                 />
            </View>

            {/* Input Senha */}
            <View style={[styles.inputArea, { borderColor: getBorderColor('senha') }]}> 
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    placeholderTextColor="#999"
                    secureTextEntry={esconderSenha}
                    value={senha}
                    onChangeText={setSenha}
                    selectionColor="#1351B4"
                    onFocus={() => setCampoFocado('senha')}
                    onBlur={() => setCampoFocado(null)}
                />
                <TouchableOpacity style={styles.icon} onPress={() => setEsconderSenha(!esconderSenha)}>
                    <Ionicons name={esconderSenha ? 'eye-off' : 'eye'} size={24} color={campoFocado === 'senha' ? "#1351B4" : "#999"} />
                </TouchableOpacity>
            </View>
            
            {/* Esqueci a Senha */}
            <View style={{ width: 328 }}>
                <TextLink 
                    title="Esqueci minha senha" 
                    onPress={() => alert('Navegar para recuperação de senha')}
                />
            </View>

            {/* 2. Botão de Entrar */}
            <View style={{ width: 328, marginTop: 20 }}>
                <MyButton 
                    title="ENTRAR" 
                    onPress={handleLogin}
                />
            </View>

            {/* 3. Botão Google */}
            <View style={{ width: 328 }}>
                <SocialButton 
                    title="Entrar com Google" 
                    iconName="logo-google" 
                    onPress={() => alert('Lógica do Google')}
                />
            </View>
            
            {/* Área de Cadastro / Primeiro Acesso */}
            <View style={styles.cadastroContainer}>
                <Text style={styles.textoCadastro}>Ainda não tem conta?</Text>
                
                <TextLink 
                    title="Primeiro Acesso" 
                    onPress={() => navigation.navigate('Cadastro')}
                    // Aqui sobrescrevemos o alinhamento para ficar no centro
                    customStyle={{ alignSelf: 'center', marginTop: 0 }} 
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
    backgroundColor: '#fff',
  },
  centerContent: {
    alignItems: 'center',
    justifyContent: 'center' 
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    color: '#333'
  },
  inputArea: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 328, height: 56,
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
    padding: 5
},
  logo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10
},
textoOu: {
  marginHorizontal: 10,
  color: '#999',
  fontSize: 14,
},
cadastroContainer: {
    marginTop: 30, // Dá um espaço dos botões de cima
    flexDirection: 'row', // Coloca o texto e o link na mesma linha
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5, // Espaço entre a pergunta e o link
  },
  textoCadastro: {
    color: '#333',
    fontSize: 14,
  }
});