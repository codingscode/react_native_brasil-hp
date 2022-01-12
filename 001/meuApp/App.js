import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import FontAwesome from 'react-native-vector-icons/FontAwesome'



function App() {
   
   

   return (
      <View style={estilos.container} >
         <Text>oie</Text>
         <FontAwesome name="home" size={45} color="#11118c" />
      </View>

   )

}

const estilos = StyleSheet.create({
   container: {
      flex: 1, justifyContent: 'center', alignItems: 'center'
   }
  
   

})


export default App


