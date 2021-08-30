import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native'



class App extends Component {
   constructor(props) {
      super(props)
      this.state = {
         feed: [
            {
              id: '1', 
              nome: 'Lucas Silva', 
              descricao: 'Mais um dia de muitos bugs :)', 
              imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
              imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',  
              likeada: false, 
              likers: 0
            },
            {
              id: '2', 
              nome: 'Matheus', 
              descricao: 'Isso sim é ser raiz!!!!!', 
              imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
              imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png', 
              likeada: false, 
              likers: 0
            },
            {
              id: '3', 
              nome: 'Jose Augusto', 
              descricao: 'Bora trabalhar Haha', 
              imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png', 
              imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',  
              likeada: false, 
              likers: 3
            },
            {
              id: '4', 
              nome: 'Gustavo Henrique', 
              descricao: 'Isso sim que é TI!', 
              imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
              imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto4.png', 
              likeada: false, 
              likers: 1
            },
            {
              id: '5', 
              nome: 'Guilherme', 
              descricao: 'Boa tarde galera do insta...', 
              imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
              imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto5.png',
              likeada: false, 
              likers: 32
            }
          ]
    
      }
   }

   
   render() {

      return (
         <View style={estilos.container} >
            <View style={estilos.cabecalho} >
               <Image source={require('./src/image2/logo.png')} style={estilos.logo} />
               <Image source={require('./src/image2/send.png')} style={estilos.enviar} />

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
   },
   cabecalho: {
      height: 55, backgroundColor: '#FFF', flexDirection: 'row', alignItems: 'center', 
      justifyContent: 'space-between', padding: 5, borderBottomWidth: 0.2, shadowColor: '#000', 
      elevation: 1
   },
   enviar: {
      width: 23, height: 23
   },
   logo: {
   
   }
  
})


export default App
