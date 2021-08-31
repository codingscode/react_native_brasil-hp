import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, TextInput } from 'react-native'




class App extends Component {
   constructor(props) {
      super(props)
      this.state = {
         input: '', nome: ''
      }

   }

   
   render() {

      return (
         <View style={estilos.container} >
            <View>
               <TextInput style={estilos.input} value={this.state.input} onChangeText={(texto) => this.setState({input: texto})} underLineColorAndroid="transparent" />
               <TouchableOpacity>
                  <Text style={estilos.botao} >+</Text>
               </TouchableOpacity>
            </View>  

         </View>
      )
   }
}

/* 

*/

const estilos = StyleSheet.create({
   container: {
      flex: 1
   }
  
})


export default App
