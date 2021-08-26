import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native'



class App extends Component {
   
  
   
  
   
   
   render() {
      return (
         <View style={estilos.container}  >
            <Image source={require('./src/biscoito.png')} style={estilos.imagem} />
            <Text style={estilos.textoFrase} >" Alguma frase aqui "</Text>
            <TouchableOpacity style={estilos.botao} >
               <View style={estilos.btnArea} >
                  <Text style={estilos.btnTexto} >quebrar biscoitos</Text>
               </View>   
            </TouchableOpacity>            

         </View>
      )
   }
}

/* 

*/

const estilos = StyleSheet.create({
   container: {
      flex: 1, alignItems: 'center', justifyContent: 'center'
   },
   imagem: {
      width: 250, height: 250
   },
   textoFrase: {
      fontSize: 20, color: '#dd7b22', margin: 30, fontStyle: 'italic', textAlign: 'center'
   },
   botao: {
      width: 230, height: 50, borderWidth: 2, borderColor: '#dd7b22', borderRadius: 25
   },
   btnArea: {

   },
   btnTexto: {

   }
})




export default App

