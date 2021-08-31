import React, {Component} from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'


class Lista extends Component {
   constructor(props) {
      super(props)
      this.state = {
         feed: this.props.data
      }
   }
 
   render() {
      return (
         <View style={estilos.areaFeed} >
            <View style={estilos.viewPerfil} >
               <Image source={{uri: this.state.feed.imgperfil}} style={estilos.fotoPerfil} />
               <Text style={estilos.nomeUsuario} >{this.state.feed.nome}</Text>
            </View>
         </View>
      
      )
   }
   
}

const estilos = StyleSheet.create({

})

export default Lista