import { Text } from '@react-navigation/elements';
import { StyleSheet, View } from 'react-native';

export function MeusDados() {
  return (
    <View style={styles.container}>
      <Text>Meus Dados</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  row: {
    flexDirection: 'row',
    gap: 10,
  },
});
