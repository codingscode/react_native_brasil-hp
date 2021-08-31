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
            <Image style={estilos.fotoPublicacao} source={{uri: this.state.feed.imgPublicacao}} />
         </View>
      
      )
   }
   
}

const estilos = StyleSheet.create({
   areaFeed: {

   },
   nomeUsuario: {
      fontSize: 22, textAlign: 'left', color: '#000000'
   },
   fotoPerfil: {
      width: 50, height: 50, borderRadius: 25
   },
   viewPerfil: {
      flexDirection: 'row', flex: 1, alignItems: 'center', padding: 8
   }


})

export default Lista