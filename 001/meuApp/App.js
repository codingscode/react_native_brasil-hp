import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'



function App() {
   
   

   return (
      <View style={estilos.container} >
         <Text>oie</Text>
         <FontAwesome name="home" size={45} color="#11118c" />
         <FontAwesome name="user" size={45} color="green" />
         <Feather name="gift" size={65} color="purple" />
         <TouchableOpacity style={estilos.botaoYT} >
            <FontAwesome name="youtube" size={35} color="#FFF" />
            <Text style={estilos.botaoTexto} >Acessar canal</Text>
         </TouchableOpacity>
         
      </View>

   )

}

const estilos = StyleSheet.create({
   container: {
      flex: 1, justifyContent: 'center', alignItems: 'center'
   },
   botaoYT: {
      flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 5, backgroundColor: '#FF0000', borderRadius: 5
   },
   botaoTexto: {
      paddingLeft: 10, color: '#FFF'
   }
  
   

})


export default App


