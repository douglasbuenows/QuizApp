import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

type StartScreenProps = {
  onStartQuiz: () => void;
};

export default function StartScreen({ onStartQuiz }: StartScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Quiz!</Text>
      <Text style={styles.subtitle}>Teste seus conhecimentos em React Native.</Text>
      
      <TouchableOpacity style={styles.button} onPress={onStartQuiz}>
        <Text style={styles.buttonText}>Iniciar Quiz</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F4F8',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4B427F',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 40,
    color: '#4A4A4A',
  },
  button: {
    backgroundColor: '#3B5998',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 24,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});