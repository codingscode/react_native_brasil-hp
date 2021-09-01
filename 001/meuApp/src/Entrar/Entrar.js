import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'



class Entrar extends Component {
   
   
   render() {

      return (
         <View style={{backgroundColor: 'lightblue', height: 350, width: '100%', borderRadius: 15 }} >
            <Text style={{paddingTop: 15, color: 'orange', fontSize: 28, textAlign: 'center'}} >Seja Bem-vindo!</Text>
            <Button title="Sair" onPress={this.props.sair} />
         </View>
      )
   }
}


export default Entrar
