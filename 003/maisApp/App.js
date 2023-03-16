
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


function App() {
   
   return (
      <View style={estilos.container} >
         <Text>Sujeito Programador</Text>
      </View>
   )
}



const estilos = StyleSheet.create({
   container: {
      flex: 1, justifyContent: 'center', alignItems: 'center'
   }
})


export default App
