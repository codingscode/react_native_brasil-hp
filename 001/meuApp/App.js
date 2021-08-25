import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'



class App extends Component {
   constructor(props) {
      super(props)
      this.state = {
         nome: 'Simon'
      }
   }
 
 
   render() {
      return (
         <View>
            <Text>{this.state.nome}</Text>
 
         </View>
      )
   }
}


export default App

