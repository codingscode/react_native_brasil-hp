import React from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'


function Sobre({ route }) {

   const navegacao = useNavigation()

   navegacao.setOptions({
      title: `Sobre ${route.params?.nome}`
   })

   return (
       <View>
           <Text>Sobre</Text>
           <Text>{route.params?.nome}</Text>
           <Text>{route.params?.email}</Text>
           <Button title="Voltar para Inicio!" onPress={() => navegacao.goBack()} />
           <Button title="Contato" onPress={() => navegacao.navigate('Contato')} />
       </View>
   )

}


export default Sobre
