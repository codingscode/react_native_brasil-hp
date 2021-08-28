import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native'



class App extends Component {
   constructor(props) {
      super(props)
      this.state = {
         feed: [
            {nome: 'aladin', idade: 3, email: 'aladin@gmail'},
            {nome: 'mel', idade: 2, email: 'mel@yahoo.com'},
            {nome: 'apolo', idade: 10, email: 'apolo@hotmail'},
            {nome: 'nina', idade: 1, email: 'aladin@outlook.com'},
         ]
      }
   }
   
      
   
   render() {
      return (
         <View style={estilos.container}  >
            <FlatList data={this.state.feed} renderItem={({item}) => <Pessoa data={item} />} />
            
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

class Pessoa extends Component {
   render() {
      return(
         <View>
            <Text>{this.props.data.nome}</Text>
         </View>
      )
   }
}




export default App

