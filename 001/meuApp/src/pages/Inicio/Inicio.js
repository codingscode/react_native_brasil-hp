import React from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialIcons'



function Inicio() {

   const navegacao = useNavigation()
   
   return (
       <View>
           <Text>Inicio</Text>
           <Button title="Contato" onPress={ () => navegacao.navigate('Contato') } />
           <Icon name="build" color="green" size={35} />
       </View>
   )

}


export default Inicio

