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
        flex: 1,
        backgroundColor: '#f2f2',
        justifyContent: 'center',
        padding: 20
    }
})