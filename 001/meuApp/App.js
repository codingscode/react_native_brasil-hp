import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native'



class App extends Component {
   constructor(props) {
      super(props)
      this.state = {
         textoFrase: 'Siga os bons e aprenda com eles.'
      }

      this.frases = [
            'Siga os bons e aprenda com eles.', 
            'O bom-senso vale mais do que muito conhecimento.', 
            'O riso é a menor distância entre duas pessoas.', 
            'Deixe de lado as preocupações e seja feliz.',
            'Realize o óbvio, pense no improvável e conquiste o impossível.',
            'Acredite em milagres, mas não dependa deles.',
            'A maior barreira para o sucesso é o medo do fracasso.'
      ]

   }
   
   
   
   render() {
      return (
         <View style={estilos.container}  >
            <Image source={require('./src/biscoito.png')} style={estilos.imagem} />
            <Text style={estilos.textoFrase} >{this.state.textoFrase}</Text>
            <TouchableOpacity style={estilos.botao} >
               <View style={estilos.btnArea} >
                  <Text style={estilos.btnTexto} >quebrar biscoitos</Text>
               </View>   
            </TouchableOpacity>            

         </View>
      )
   }
}

/* 

*/

const estilos = StyleSheet.create({
   container: {
      flex: 1, alignItems: 'center', justifyContent: 'center'
   },
   imagem: {
      width: 250, height: 250
   },
   textoFrase: {
      fontSize: 20, color: '#dd7b22', margin: 30, fontStyle: 'italic', textAlign: 'center'
   },
   botao: {
      width: 230, height: 50, borderWidth: 2, borderColor: '#dd7b22', borderRadius: 25
   },
   btnArea: {
      flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'
   },
   btnTexto: {
      fontSize: 18, fontWeight: 'bold', color: 'green'
   }
})




export default App

