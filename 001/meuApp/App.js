import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'





function App() {
   const [nome, setNome] = useState('Aladin')

   return (
      <View style={estilos.container} >
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
   }
   
   

})


export default App


