import { StyleSheet, Text, View, Button } from 'react-native'

export default function Exemplo1(){
    let contadorNormal = 0

    function incrementarContadorNormal(){
        contadorNormal = contadorNormal + 1
        console.warn('Valor do contador normal:', contadorNormal)
    }

    return(
        <View style={styles.container}>
            <Text>Exemplo sem useState</Text>
            <Text>Contador normal: {contadorNormal}</Text>
            <Button
            title='Aumentar valor do contador'
            onPress={incrementarContadorNormal}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // Fundo azul-claro
        flex: 1,
        backgroundColor: '#F0F4F8',
        justifyContent: 'center',
        padding: 20
    },
    title: {
        // Título em roxo-escuro
        fontSize: 24,
        fontWeight: 'bold',
        color: '#4B427F',
    },
    text: {
        // Texto normal em cinza-escuro
        fontSize: 18,
        color: '#4A4A4A',
        marginTop: 10,
    },
    button: {
        // Botão de ação em azul-escuro
        backgroundColor: '#3B5998',
        padding: 15,
        borderRadius: 12,
        marginTop: 20,
    },
    buttonText: {
        // Texto do botão em branco
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});