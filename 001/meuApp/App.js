import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, TextInput } from 'react-native'

import AsyncStorage from '@react-native-community/async-storage'



class App extends Component {
   constructor(props) {
      super(props)
      this.state = {
         input: 'wqeqwe', nome: 'aldin'
      }

      this.gravaNome = this.gravaNome.bind(this)

   }

   gravaNome() {
      this.setState({
         nome: this.state.input
      })
      alert('Salvo com sucesso!')
   }

   
   render() {

      return (
         <View style={estilos.container} >
            <View style={estilos.viewInput} >
               <TextInput style={estilos.input} value={this.state.input} onChangeText={(texto) => this.setState({input: texto})} underLineColorAndroid="transparent" />
               <TouchableOpacity onPress={this.gravaNome} >
                  <Text style={estilos.botao} >+</Text>
               </TouchableOpacity>
            </View>  
            <Text style={estilos.nome} >{this.state.nome}</Text>
         </View>
      )
   }
}

/* 

*/

const estilos = StyleSheet.create({
   container: {
      flex: 1, marginTop: 20, alignItems: 'center'
   },
   viewInput: {
      flexDirection: 'row', alignItems: 'center'
   },
   input: {
      width: 350, height: 40, borderColor: '#000', borderWidth: 1, padding: 10
   },
   botao: {
      backgroundColor: '#222', color: '#FFF', height: 40, padding: 10, marginLeft: 4
   },
   nome: {
      fontSize: 30, textAlign: 'center', marginTop: 15
   }
  
})


export default App
