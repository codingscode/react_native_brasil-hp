import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Picker } from '@react-native-picker/picker'



class App extends Component {
   constructor(props) {
      super(props)
      this.state = {
         pizza: 0  
      }
   }
   
   
   
      
   
   render() {
      return (
         <View style={estilos.container} >
            <Text style={estilos.logo} >Menu Pizza</Text>
            <Picker selectedValue={this.state.pizza} onValueChange={(itemValue, itemIndex) => this.setState({pizza: itemValue}) } >
               <Picker.Item key={1} value={1} label="Calabresa" />
               <Picker.Item key={2} value={2} label="Mussarela" />
               <Picker.Item key={3} value={3} label="Frango" />
            </Picker>
                        
            <Text style={estilos.pizzas} >você escolheu: pizza calabresa</Text>
            <Text style={estilos.pizzas} >R$: 59,90</Text>
         </View>
      )
   }
}

/* 

*/

const estilos = StyleSheet.create({
   container: {
      flex: 1, marginTop: 20
   },
   logo: {
      textAlign: 'center', fontSize: 28, fontWeight: 'bold'
   },
   pizzas: {
      marginTop: 15, fontSize: 28, textAlign: 'center'
   }
})


export default App
