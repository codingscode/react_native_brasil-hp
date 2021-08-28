import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native'



class App extends Component {
   constructor(props) {
      super(props)
      this.state = {
         feed: [
            {id: 1, nome: 'aladin', idade: 3, email: 'aladin@gmail'},
            {id: 2, nome: 'mel', idade: 2, email: 'mel@yahoo.com'},
            {id: 3, nome: 'apolo', idade: 10, email: 'apolo@hotmail'},
            {id: 4, nome: 'nina', idade: 1, email: 'aladin@outlook.com'},
         ]
      }
   }
   
      
   
   render() {
      return (
         <View style={estilos.container}  >
            <FlatList keyExtractor={(item) => item.id} data={this.state.feed} renderItem={({item}) => <Pessoa data={item} />} />
            
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
            <Text>Nome: {this.props.data.nome}</Text>
            <Text>Idade: {this.props.data.idade}</Text>
            <Text>Email: {this.props.data.email}</Text>
         </View>
      )
   }
}




export default App

