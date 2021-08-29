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
            <Switch value={this.state.status} 
                    onValueChange={(valorSwitch) => this.setState({status: valorSwitch})}
                    thumbColor="purple" />
            <Text style={{textAlign: 'center', fontSize: 30}} >
               {this.state.status ? 'ligado' : 'desligado'}
            </Text>
         </View>
      )
   }
}

/* 

*/

const estilos = StyleSheet.create({
   container: {
      marginTop: 21
   }
  
})


export default App
