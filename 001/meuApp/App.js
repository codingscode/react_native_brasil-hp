import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'



class App extends Component {
  render() {
     return (
        <View>
           <Text>mais testes!</Text>
           <Text style={{ color: 'blue', fontSize: 25, margin: 15 }} >
              Sujeito Programador
           </Text>
           <Jobs />

        </View>
     )
  }
}


export default App


class Jobs extends Component {
  
  render() {
    const imagem = 'https://sujeitoprogramador.com/steve.png'


     return (
        <Image source={{ uri: imagem }} style={{width: 300, height: 300}} />
     )
  }
}

