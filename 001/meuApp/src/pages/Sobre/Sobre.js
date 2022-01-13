import React from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'


function Sobre() {

   const navegacao = useNavigation()


   return (
       <View>
           <Text>Sobre</Text>
           <Button title="Voltar para Inicio!" onPress={() => navegacao.goBack()} />
       </View>
   )

}


export default Sobre
