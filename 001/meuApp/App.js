import React, { Component } from 'react'
import { View, Text, StyleSheet, Switch } from 'react-native'



class App extends Component {
   constructor(props) {
      super(props)
      this.state = {
         status: false

      }
   }



   
   render() {

      return (
         <View style={estilos.container} >
            <Switch value={this.state.status} onValueChange={(valorSwitch) => this.setState({status: valorSwitch})} />
            <Text>{this.state.status.toString()}</Text>
         </View>
      )
   }
}

/* 

*/

const estilos = StyleSheet.create({
   container: {
      marginTop: 15
   }
  
})


export default App
