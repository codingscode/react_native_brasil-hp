import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, Button, Modal } from 'react-native'



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
            <Modal animationType="fade" visible={this.state.modalVisivel} >
               <View style={{backgroundColor: 'lightblue', flex: 1}} >
                  <Text style={{color: 'orange', fontSize: 28}} >Seja Bem-vindo!</Text>
                  <Button title="Sair" onPress={() => this.sair(false)} />
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
