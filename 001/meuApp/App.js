import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, TextInput } from 'react-native'




class App extends Component {
   constructor(props) {
      super(props)
      this.state = {
         input: 'wqeqwe', nome: 'aldin'
      }

   }

   
   render() {

      return (
         <View style={estilos.container} >
            <View style={estilos.viewInput} >
               <TextInput style={estilos.input} value={this.state.input} onChangeText={(texto) => this.setState({input: texto})} underLineColorAndroid="transparent" />
               <TouchableOpacity>
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
      fontSize: 30, textAlign: 'center'
   }
  
})


export default App
