import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // 1. Importar
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const Cores = {
  branco: '#FFFFFF',
  cinza: '#807E7E',
  azulMarinho: '#071D41',
};

export default function Carregamento() {
  const [indexAtivo, setIndexAtivo] = useState(-1);
  
  // 2. Inicializar o Navigation (tipado para qualquer rota por enquanto)
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndexAtivo((prev) => {
        if (prev >= 4) {
          clearInterval(intervalo);
          return 4;
        }
        return prev + 1;
      });
    }, 600);

    return () => clearInterval(intervalo);
  }, []);

  // 3. ONDE COLOCAR O REDIRECIONAMENTO:
  useEffect(() => {
    if (indexAtivo === 4) {
      // Pequeno delay opcional de 500ms para o usuário ver todas as bolas brancas
      const timer = setTimeout(() => {
        // Substitua 'NOME_DA_SUA_ROTA_DRAWER' pelo nome que está no seu Stack
        navigation.replace('Login'); 
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [indexAtivo, navigation]);

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/logo_sae.png")} style={styles.image} />
      
      <View style={styles.ballContainer}>
        {[0, 1, 2, 3].map((i) => {
          let corAtual = Cores.azulMarinho;
          if (i < indexAtivo) {
            corAtual = Cores.branco;
          } else if (i === indexAtivo) {
            corAtual = Cores.cinza;
          }

          return (
            <View
              key={i}
              style={[styles.ball, { backgroundColor: corAtual }]}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // Ajustei para o seu azul marinho original das variáveis
    backgroundColor:'#0B1B77', 
  },
  image: {
    width: 195,
    height: 80,
    resizeMode: 'contain',
  },
  ballContainer: {
    flexDirection: 'row',
    marginTop: 30,
    gap: 10,
  },
  ball: {
    width: 8,
    height: 8,
    borderRadius: 4,
  }
});