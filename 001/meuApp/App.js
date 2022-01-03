import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'





class App extends Component {

   constructor(props) {
      super(props)
      
      this.state = {
      
      }
      
   }
  
    
   render() {
      return (
      <View style={estilos.container} >
         <View style={{ width: 250, height: 250, backgroundColor: '#4169F1', justifyContent: 'center'}}>
            <Text style={{ color: '#FFFFFF', fontSize: 22, textAlign: 'center' }} >Carregando...</Text>
         </View>
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
