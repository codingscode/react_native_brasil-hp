import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

import api from './src/services/api'
import Filmes from './src/Filmes/Filmes'


class App extends Component {

   constructor(props) {
      super(props)
      
      this.state = {
         filmes: [],
         carregando: true
         
      }
      
   
   }

   async componentDidMount() {
      const response = await api.get('r-api/?api=filmes')
      this.setState({
         filmes: response.data, carregando: false
      })
   }

   
   render() {
   
      if (this.state.carregando) {
         return (
            <View>
               <Text>Carregando...</Text>
            </View>
         )
      }
      else {
         return (
            <View style={estilos.container} >
               <FlatList data={this.state.filmes} keyExtractor={item => item.id.toString()} renderItem={({item}) => <Filmes dados={item} /> } />
            </View>
         )
      
      }

   }
}

const estilos = StyleSheet.create({
   container: {
      flex: 1
   }

})


export default App
