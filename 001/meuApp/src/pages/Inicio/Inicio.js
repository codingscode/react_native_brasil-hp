import React from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'



function Inicio() {

   const navegacao = useNavigation()

   function irSobre() {
      navegacao.navigate('Sobre', { nome: 'Aladin', email: 'aladin@gmail.com' })
   }

   return (
       <View>
           <Text>Inicio</Text>
           <Text>Bem vindo a tela inicio</Text>
           <Button title="Ir para Sobre" onPress={irSobre} />
       </View>
   )

}


export default Inicio
