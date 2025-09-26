import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
type EndTimeProps = {
  onPlayAgain: () => void;
};
export const EndTime: React.FC<EndTimeProps> = ({ onPlayAgain }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fim de Jogo!</Text>
      <Text style={styles.scoreText}>Infelizmente o tempo acabou!</Text>

      <TouchableOpacity style={styles.button} onPress={onPlayAgain}>
        <Text style={styles.buttonText}>Jogar Novamente</Text>
      </TouchableOpacity>
    </View>
  );
};

    const styles = StyleSheet.create({
      container: {
        // Fundo azul-claro
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0F4F8',
      },
      title: {
        // Título em roxo-escuro
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#4B427F',
      },
      scoreText: {
        // Placar em cinza-escuro
        fontSize: 24,
        marginBottom: 40,
        color: '#4A4A4A',
      },
      button: {
        // Botão de ação principal em azul-escuro com borda arredondada
        backgroundColor: '#3B5998',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 24,
      },
      buttonText: {
        // Texto do botão em branco
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
      },
    });