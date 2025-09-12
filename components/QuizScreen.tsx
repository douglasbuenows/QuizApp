// components/QuizScreen.tsx

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { colors } from '../styles/colors';

// Definimos o formato de um objeto de pergunta para reutilizar o tipo
type Question = {
  question: string;
  options: string[];
  correctAnswer: string;
};

// Definimos o formato exato das props que o componente espera
type QuizScreenProps = {
  currentQuestion: Question;
  selectedOption: string | null;
  isOptionsDisabled: boolean;
  onOptionPress: (option: string) => void;
  onNextQuestion: () => void;
};

// Aplicamos a tipagem aqui na assinatura da função
export default function QuizScreen({
  currentQuestion,
  selectedOption,
  isOptionsDisabled,
  onOptionPress,
  onNextQuestion,
}: QuizScreenProps) {
  const getOptionStyle = (option: string) => {
    if (selectedOption) {
      const isCorrect = option === currentQuestion.correctAnswer;
      if (isCorrect) {
        return styles.correctOption;
      }
      if (option === selectedOption && !isCorrect) {
        return styles.incorrectOption;
      }
    }
    return {};
  };

  return (
    <View style={styles.container}>
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{currentQuestion.question}</Text>
      </View>

      <View style={styles.optionsContainer}>
        {currentQuestion.options.map((option) => (
          <TouchableOpacity
            key={option}
            style={[styles.option, getOptionStyle(option)]}
            onPress={() => onOptionPress(option)}
            disabled={isOptionsDisabled}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {selectedOption && (
        <TouchableOpacity style={styles.nextButton} onPress={onNextQuestion}>
          <Text style={styles.nextButtonText}>Próxima Pergunta</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
    paddingVertical: 60,
  },
  questionContainer: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 20,
    justifyContent: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  questionText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.black,
  },
  optionsContainer: {
    flex: 2,
    justifyContent: 'center',
  },
  option: {
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: colors.disabled,
    marginBottom: 15,
  },
  optionText: {
    fontSize: 18,
    color: colors.black,
  },
  correctOption: {
    borderColor: colors.correct,
    backgroundColor: '#D4EDDA',
  },
  incorrectOption: {
    borderColor: colors.incorrect,
    backgroundColor: '#F8D7DA',
  },
  nextButton: {
    backgroundColor: colors.primary,
    padding: 20,
    borderRadius: 15,
    marginTop: 20,
    alignItems: 'center',
  },
  nextButtonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});