import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'





function App() {
   const [nome, setNome] = useState('Aladin')

   function alterarNome() {
      setNome('Apolo')
   }

   return (
      <View style={estilos.container} >
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


