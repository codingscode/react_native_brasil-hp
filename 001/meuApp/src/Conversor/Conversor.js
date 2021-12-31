
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
        <TextInput placeholder="Valor a ser convertido" style={estilos.areaEntrada} 
                   onChangeText={()=>{}} keyboardType='numeric' />
        <TouchableOpacity style={estilos.botaoArea} >
           <Text style={estilos.botaoTexto} >Converter</Text>
        </TouchableOpacity>
        <Text style={estilos.valorConvertido} >
           10.90
        </Text>
      </View>
      )
   }
}

const estilos = StyleSheet.create({
   container: {
      flex: 1, justifyContent: 'center', alignItems: 'center'
   },
   titulo: {
      fontSize: 30, fontWeight: 'bold', color: '#000'
   },
   areaEntrada: {
      width: 280, height: 45, backgroundColor: '#CCC', textAlign: 'center', marginTop: 15, fontSize: 20, color: '#000', borderRadius: 5
   },
   botaoArea: {
      width: 150, height: 45, backgroundColor: 'blue', borderRadius: 5, justifyContent: 'center', alignItems: 'center', marginTop: 15
   },
   botaoTexto: {
      fontSize: 17, fontWeight: 'bold', color: '#FFF'
   },
   valorConvertido: {
      fontSize: 30, fontWeight: 'bold', color: '#000', marginTop: 15
   }
   

   
})


export default Conversor

