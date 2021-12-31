
import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'



class Conversor extends Component {

   constructor(props) {
      super(props);
      
      this.state = {
      
      }
      
      
      
   }

   render() {
      return (
      <View style={estilos.container} >
        <Text style={estilos.titulo} >USD para BRL</Text>
        <TextInput placeholder="Valor a ser convertido" style={estilos.areaEntrada} onChangeText={()=>{}} />
        <TouchableOpacity style={estilos.botaoArea} >
           <Text style={estilos.botaoTexto} >Converter</Text>
        </TouchableOpacity>
      </View>
      )
   }
}

const estilos = StyleSheet.create({
   container: {
   
   }
   
   
})


export default Conversor

