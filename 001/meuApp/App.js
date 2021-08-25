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
           <Jobs largura={80} altura={50} nome="stevie" />

        </View>
     )
  }
}


export default App


class Jobs extends Component {
  
  render() {
    const imagem = 'https://sujeitoprogramador.com/steve.png'


     return (
        <View>
          <Image source={{ uri: imagem }} style={{width: this.props.largura, height: this.props.altura}} />
          <Text>{this.props.nome}</Text>

        </View>
     )
  }
}

