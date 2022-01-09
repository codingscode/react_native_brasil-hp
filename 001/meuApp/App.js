import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView } from 'react-native'

import api from './src/services/api'




function App() {
   
   const [cep, setCep] = useState('')
   

   return (
      <SafeAreaView style={estilos.container} >
         <View style={estilos.a1} >
            <Text style={estilos.texto} >Digite o cep desejado</Text>
            <TextInput style={estilos.entrada} placeholder="Ex: 79003241" value={cep} onChangeText={ (texto) => setCep(texto) } keyboardType="numeric" />
         </View>
         
      </SafeAreaView>

   )

}

const estilos = StyleSheet.create({
   container: {
      flex: 1
   },
   a1: {
      alignItems: 'center'
   },
   texto: {
      marginTop: 25, marginBottom: 15, fontSize: 25, fontWeight: 'bold'
   },
   entrada: {
      backgroundColor: '#FFF', borderWidth: 1, borderColor: '#DDD', borderRadius: 5, width: '90%', padding: 10, fontSize: 18
   }
   
   

})


export default App


