import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'



class App extends Component {
   
 
   render() {
      return (
         <View style={estilos.container}  >
            <TextInput style={estilos.entrada} />
            
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
   }
})




export default App

