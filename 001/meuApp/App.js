import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'



class App extends Component {
   
   constructor(props) {
      super(props)
      this.state = {
         nome: 'aladin'
      }
   }
   
   render() {
      return (
         <View style={estilos.container}  >
            <TextInput style={estilos.entrada} />
            <Text style={estilos.texto} >{this.state.nome}</Text>

         </View>
      )
   }
}

const estilos = StyleSheet.create({
   container: {
      flex: 1
   },
   entrada: {
      height: 45, borderWidth: 1, borderColor: '#222', margin: 10, fontSize: 20, padding: 10
   },
   texto: {
      textAlign: 'center', fontSize: 25
   }
})




export default App

