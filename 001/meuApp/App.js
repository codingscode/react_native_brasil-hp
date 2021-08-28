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
   },
   timer: {
      marginTop: -160, color: '#FFF', fontSize: 65, fontWeight: 'bold'
   },
   btnArea: {
      flexDirection: 'row', marginTop: 70, height: 40
   },
   btn: {
      flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF', height: 40, margin: 17, borderRadius: 9
   }

})




export default App

