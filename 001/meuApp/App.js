import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Picker } from '@react-native-picker/picker'



class App extends Component {
   constructor(props) {
      super(props)
      this.state = {
         pizza: 0,
         pizzas: [
            {key: 1, nome: 'Calabresa', valor: 30},
            {key: 2, nome: 'Mussarela', valor: 40},
            {key: 3, nome: 'Frango', valor: 47},
            {key: 4, nome: 'Carne', valor: 42},
         ]  
      }
   }
   
   
   render() {

      let pizzasItem = this.state.pizzas.map((cada, i) => {
         return <Picker.Item key={i} value={i} label={cada.nome} />
      })


      return (
         <View style={estilos.container} >
            <Text style={estilos.logo} >Menu Pizza</Text>
            <Picker selectedValue={this.state.pizza} onValueChange={(cada, indice) => this.setState({pizza: cada}) } >
               {pizzasItem}
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
