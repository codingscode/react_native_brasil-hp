import React, { Component } from 'react'
import { View, Text, Image, Button } from 'react-native'





class App extends Component {
   constructor(props) {
      super(props)
      this.state = {
         nome: 'Simon'
      }

      this.entrar = this.entrar.bind(this)
   }
 
   entrar(valor) {
      this.setState({
        nome: valor
      })
   }
 
   render() {
      return (
         <View style={{ marginTop: 20 }} >
            <Button title="entrar" onPress={() => this.entrar('Jack')} />
            <Text style={{ fontSize: 23, color: 'red', textAlign: 'center' }} >{this.state.nome}</Text>
 
         </View>
      )
   }
}


export default App

