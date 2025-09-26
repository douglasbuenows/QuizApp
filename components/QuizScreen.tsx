// components/QuizScreen.tsx

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

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
  time: number
};

// Aplicamos a tipagem aqui na assinatura da função
export default function QuizScreen({
  currentQuestion,
  time,
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
      <Text style={styles.timerText}>Tempo: {time}</Text>
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

// Os estilos continuam os mesmos
const styles = StyleSheet.create({
  container: {
    // Fundo azul-claro
    flex: 1,
    backgroundColor: '#F0F4F8',
    padding: 16,
    paddingVertical: 60
  },
  questionContainer: {
    // Caixa de pergunta em branco com borda arredondada
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    justifyContent: 'center',
    marginBottom: 20
  },
  questionText: {
    // Texto da pergunta em roxo-escuro
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#4B427F',
  },
  optionsContainer: {
    // Container das opções
    flex: 1,
    justifyContent: 'space-around'
  },
  option: {
    // Estilo padrão das opções
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#E6E6FA' // Lilás claro
  },
  optionText: {
    // Texto das opções em cinza-escuro
    fontSize: 18,
    color: '#4A4A4A',
  },
  correctOption: {
    // Opção correta com borda e fundo em verde suave
    borderColor: '#B1D8B4',
    backgroundColor: '#E9F5E9',
    borderWidth: 2
  },
  incorrectOption: {
    // Opção incorreta com borda e fundo em vermelho suave
    borderColor: '#F1B0B7',
    backgroundColor: '#FCE7E9',
    borderWidth: 2
  },
  nextButton: {
    // Botão de próxima pergunta em azul-escuro
    backgroundColor: '#3B5998',
    padding: 15,
    borderRadius: 12,
    marginTop: 20,
    alignItems: 'center'
  },
  nextButtonText: {
    // Texto do botão em branco
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  timerText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#4B427F',
    marginBottom: 20,
  }
});