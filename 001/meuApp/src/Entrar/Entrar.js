import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'



class Entrar extends Component {
   
   
   render() {

      return (
         <View style={{backgroundColor: 'lightblue', height: 350, width: '100%'}} >
            <Text style={{color: 'orange', fontSize: 28}} >Seja Bem-vindo!</Text>
            <Button title="Sair" onPress={this.props.sair} />
         </View>
      )
   }
}



export default Entrar
