import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import Slider from '@react-native-community/slider';


class App extends Component {
   constructor(props) {
      super(props)
      this.state = {
         valor: 50
      }
   }
   
   
   render() {

      return (
         <View style={estilos.container} >
            <Slider minimumValue={0} maximumValue={100} 
                    onValueChange={ (valorSelecionado) => this.setState({valor: valorSelecionado}) }
                    value={this.state.valor} />
            <Text style={{textAlign: 'center', fontSize: 30}} >{this.state.valor.toFixed(0)}</Text>
         </View>
      )
   }
}

/* 

*/

const estilos = StyleSheet.create({
   container: {
      flex: 1, marginTop: 15
   }
  
})


export default App
