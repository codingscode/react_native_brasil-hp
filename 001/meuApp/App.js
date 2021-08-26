import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'



class App extends Component {
   
   constructor(props) {
      super(props)
      this.state = {
         nome: ''
      }

      this.pegaNome = this.pegaNome.bind(this)
      
   }

   pegaNome(texto) {
      if (texto.length > 0) {
         this.setState({nome: `bem vindo: ${texto}`})
      }
      else {
         this.setState({nome: ''})
      }
   }
   
   render() {
      return (
         <View style={estilos.container}  >
            <TextInput style={estilos.entrada} placeholder="digite algo" underLineColorAndroid="transparent" onChangeText={this.pegaNome} />
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

