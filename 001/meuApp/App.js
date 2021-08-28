import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native'



class App extends Component {
   constructor(props) {
      super(props)
      this.state = {
        numero: 0, botao: 'vai', ultimo_tempo: null
      }
   
      this.timer = null
      
      this.vai = this.vai.bind(this)
      this.limpar = this.limpar.bind(this)
   }

   vai() {
      if (this.timer != null) {
         clearInterval(this.timer)
         this.timer = null
         this.setState({botao: 'vai'})
      }
      else {
         this.timer = setInterval(() => {
            this.setState({numero: this.state.numero + 0.1})
         }, 100)
         this.setState({botao: 'parar'})
      }
   
   }
   
   limpar() {
      if (this.timer != null) {
         clearInterval(this.timer)
         this.timer = null
      }
      this.setState({
         numero: 0, botao: 'vai', ultimo_tempo: this.state.numero
      })
   }
   
   
   render() {
      return (
         <View style={estilos.container}  >
            <Image source={require('./src/cronometro.png')} style={estilos.cronometro} />
            <Text style={estilos.timer} > {this.state.numero.toFixed(1)} </Text>            
            
            <View style={estilos.btnArea} >
              <TouchableOpacity style={estilos.btn} onPress={this.vai} >
                  <Text style={estilos.btnTexto} >
                     {this.state.botao}
                  </Text>
               </TouchableOpacity>
              <TouchableOpacity style={estilos.btn} onPress={this.limpar} >
                  <Text style={estilos.btnTexto} >
                     limpar
                  </Text>
               </TouchableOpacity>
            </View>
            <View style={estilos.areaUltima} >
               <Text style={estilos.textoCorrida} >
               {this.state.ultimo_tempo > 0 ? `Último tempo: ${this.state.ultimo_tempo.toFixed(1)}s`: ''}
               </Text>
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
   },
   areaUltima: {
      marginTop: 40
   },
   textoCorrida: {
      fontSize: 25, fontStyle: 'italic', color: '#FFF'
   }

})




export default App

