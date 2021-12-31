import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'


import Conversor from './src/Conversor/Conversor'

// https://free.currconv.com/api/v7/convert?q=USD_PHP&compact=ultra&apiKey=217f52c14d405541a76e
class App extends Component {

  
    
   render() {
      return (
      <View style={estilos.container} >
         <Conversor moedaA="USD" moedaB="BRL" />
      </View>

      )
   
   }
}

const estilos = StyleSheet.create({
   container: {
      flex: 1, justifyContent: 'center', alignItems: 'center'
   }

})


export default App
