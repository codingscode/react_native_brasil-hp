import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native'



class App extends Component {
   
   

   
   render() {
      return (
         <View style={estilos.container}  >
            <Image source={require('./src/cronometro.png')} style={estilos.cronometro} />
            <Text style={estilos.timer} >0.0</Text>            
            
            <View style={estilos.btnArea} >
              <TouchableOpacity style={estilos.btn} >
                  <Text style={estilos.btnTexto} >
                     vai
                  </Text>
               </TouchableOpacity>
              <TouchableOpacity style={estilos.btn} >
                  <Text style={estilos.btnTexto} >
                     limpar
                  </Text>
               </TouchableOpacity>
            </View>
         </View>
      )
   }
}

/* 

*/

const estilos = StyleSheet.create({
   container: {
      flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'lightblue'
   }

})




export default App

