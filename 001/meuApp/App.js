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
           <Image  source={{ uri: 'https://sujeitoprogramador.com/steve.png' }} style={{width: 300, height: 300}} />

        </View>
     )
  }
}


export default App