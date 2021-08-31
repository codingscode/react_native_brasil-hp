import React, {Component} from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'


class Lista extends Component {
   constructor(props) {
      super(props)
      this.state = {
         feed: this.props.data
      }

      this.mostraLikes = this.mostraLikes.bind(this)
   }

   mostraLikes(likers) {
      let feed = this.state.feed
      
      if (feed.likers <= 0) {
         return
      }
      
      return (
         <Text style={estilos.likes} >
            {feed.likers} {feed.likers > 1 ? 'curtidas' : 'curtida'}
         </Text>
      )
   
   }
 
   render() {
      return (
         <View style={estilos.areaFeed} >
            <View style={estilos.viewPerfil} >
               <Image source={{uri: this.state.feed.imgperfil}} style={estilos.fotoPerfil} />
               <Text style={estilos.nomeUsuario} >{this.state.feed.nome}</Text>
            </View>
            <Image resizeMode="cover" style={estilos.fotoPublicacao} 
                   source={{uri: this.state.feed.imgPublicacao}} />
            <View style={estilos.areaBtn} >
               <TouchableOpacity >
                  <Image source={require('../image2/like.png')} style={estilos.iconelike}  />
               </TouchableOpacity>
               <TouchableOpacity style={estilos.btnSend} >
                  <Image source={require('../image2/send.png')} style={estilos.iconelike}  />
               </TouchableOpacity>
            </View>

            {this.mostraLikes(this.state.feed.likers)}

            <View style={estilos.viewRodape} >
               <Text style={estilos.nomeRodape} >
                  {this.state.feed.nome}
               </Text>
               <Text style={estilos.descRodape} >
                  {this.state.feed.descricao}
               </Text>
            </View>
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
   },
   fotoPublicacao: {
      flex: 1, height: 400, alignItems: 'center'
   },
   areaBtn: {
      flexDirection: 'row', padding: 5
   },
   iconelike: {
      width: 33, height: 33
   },
   btnSend: {
      paddingLeft: 7
   },
   viewRodape: {
      flexDirection: 'row', alignItems: 'center'
   },
   descRodape: {
      paddingLeft: 5, fontSize: 15, color: '#000'
   },
   nomeRodape: {
      fontSize: 18, fontWeight: 'bold', color: '#000', paddingLeft: 5
   },
   likes: {
      fontWeight: 'bold', marginLeft: 5
   }


})

export default Lista