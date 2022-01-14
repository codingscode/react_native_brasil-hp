import React from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'


function Contato({ route }) {

   const navegacao = useNavigation()

   
   return (
       <View>
           <Text>Contato</Text>
           <Button title="Voltar tela!" onPress={() => navegacao.goBack()} />
       </View>
   )

}


export default Contato
