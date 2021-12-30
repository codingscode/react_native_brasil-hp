import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'


class Pessoa extends Component {
    render() {
       return(
          <View style={estilos.areaPessoa} >
             <Text style={estilos.areaTexto} >Nome: {this.props.data.nome}</Text>
             <Text style={estilos.areaTexto} >Idade: {this.props.data.idade}</Text>
             <Text style={estilos.areaTexto} >Email: {this.props.data.email}</Text>
          </View>
       )
    }
}


const estilos = StyleSheet.create({
    areaPessoa: {
       backgroundColor: 'lightblue', height: 200, marginBottom: 15
    },
    textoArea: {
       color: '#FFF', fontSize: 20
    }
  
 
})


export default Pessoa
