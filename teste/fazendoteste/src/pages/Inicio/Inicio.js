
import React from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'



function Inicio() {
   const navegacao = useNavigation()
   
   return (
       <View>
           <Text>Inicio</Text>
           <Button title="Contato" onPress={ () => navegacao.navigate('Contato') } />

       </View>
   )

}


export default Inicio