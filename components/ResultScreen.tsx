import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { colors } from '../styles/colors';

// Usando TypeScript para definir os "tipos" de props que esperamos receber
type ResultScreenProps = {
  score: number;
  totalQuestions: number;
  onPlayAgain: () => void; // Esperamos receber uma função para o botão
};

export default function ResultScreen({ score, totalQuestions, onPlayAgain }: ResultScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fim de Jogo!</Text>
      <Text style={styles.scoreText}>
        Você acertou {score} de {totalQuestions} perguntas!
      </Text>

      <TouchableOpacity style={styles.button} onPress={onPlayAgain}>
        <Text style={styles.buttonText}>Jogar Novamente</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
    padding: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: colors.black,
    textAlign: 'center',
  },
  scoreText: {
    fontSize: 24,
    marginBottom: 40,
    color: colors.black,
    textAlign: 'center',
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 15,
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});