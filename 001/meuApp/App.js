import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native'



class App extends Component {
   constructor(props) {
      super(props)
      this.state = {
        numero: 0
      }
   
      this.timer = null

      this.vai = this.vai.bind(this)
      this.limpar = this.limpar.bind(this)
   }

   vai() {
      if (this.timer != null) {
         clearInterval(this.timer)
         this.timer = null
      }
      else {
         this.timer = setInterval(() => {
            this.setState({numero: this.state.numero + 0.1})
         }, 100)
      
      }
   
   }
   
   limpar() {
   
   }
   
   
   render() {
      return (
         <View style={estilos.container}  >
            <Image source={require('./src/cronometro.png')} style={estilos.cronometro} />
            <Text style={estilos.timer} > {this.state.numero.toFixed(1)} </Text>            
            
            <View style={estilos.btnArea} >
              <TouchableOpacity style={estilos.btn} onPress={this.vai} >
                  <Text style={estilos.btnTexto} >
                     vai
                  </Text>
               </TouchableOpacity>
              <TouchableOpacity style={estilos.btn} onPress={this.limpar} >
                  <Text style={estilos.btnTexto} >
                     limpar
                  </Text>
               </TouchableOpacity>
            </View>
         </View>
      )
   }
}

/* 

*/

const estilos = StyleSheet.create({
   container: {
      flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'lightblue'
   },
   timer: {
      marginTop: -160, color: '#FFF', fontSize: 65, fontWeight: 'bold'
   },
   btnArea: {
      flexDirection: 'row', marginTop: 70, height: 40
   },
   btn: {
      flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF', height: 40, margin: 17, borderRadius: 9
   },
   btnTexto: {
      fontSize: 20, fontWeight: 'bold', color: 'lightblue'
   }

})




export default App

