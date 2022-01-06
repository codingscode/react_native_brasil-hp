import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'





function App() {
   const [nome, setNome] = useState('Aladin')
   const [entrada, setEntrada] = useState('')


   
   function alterarNome() {
      setNome(entrada)
      setEntrada('')
   }

   return (
      <View style={estilos.container} >
         <TextInput placeholder="Seu nome..." value={entrada} onChangeText={(valor) => setEntrada(valor)} />
         <TouchableOpacity style={estilos.botao} onPress={alterarNome} >
            <Text style={estilos.botaoTexto} >Alterar nome</Text>
         </TouchableOpacity>
         <Text style={estilos.texto} >{ nome }</Text>
         
      </View>

   )

}

const estilos = StyleSheet.create({
   container: {
      flex: 1, marginTop: 15
   },
   texto: {
      color: '#000', fontSize: 35
   },
   botao: {
      backgroundColor: '#222', alignItems: 'center'
   },
   botaoTexto: {
      color: '#FFF'
   }
   
   

})


export default App


