import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'



class App extends Component {
   
   constructor(props) {
      super(props)
      this.state = {
         nome: '', entrada: ''
      }

      this.entrar = this.entrar.bind(this)

   }
   
   entrar() {
      if (this.state.entrada === '') {
         alert('deve digitar algo')
         return
      }
      this.setState({nome: this.state.entrada})   
   }

   
   
   render() {
      return (
         <View style={estilos.container}  >
            <TextInput style={estilos.entrada} placeholder="digite algo" underLineColorAndroid="transparent" onChangeText={(texto) => this.setState({entrada: texto})} />
            <Button title="Entrar" onPress={this.entrar} />
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

