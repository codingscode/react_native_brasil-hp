import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, Button, Modal } from 'react-native'


import Entrar from './src/Entrar/Entrar'


class App extends Component {
   constructor(props) {
      super(props)
      this.state = {
         modalVisivel: false
      }

      this.entrar = this.entrar.bind(this)
      this.sair = this.sair.bind(this)
   }
   
   entrar() {
      this.setState({modalVisivel: true})
   }

   sair(visivel) {
      this.setState({modalVisivel: visivel})
   }

   
   render() {

      return (
         <View style={estilos.container} >
            <Button title="Entrar" onPress={this.entrar} />
            <Modal transparent={true} animationType="slide" visible={this.state.modalVisivel} >
               <View style={{margin: 15, flex: 1, alignItems: 'center', justifyContent: 'center'}} >
                  <Entrar sair={() => this.sair(false)} />

               </View>
            </Modal>

         </View>
      )
   }
}

/* 

*/

const estilos = StyleSheet.create({
   container: {
      flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#DDD'
   }

  
})


export default App
