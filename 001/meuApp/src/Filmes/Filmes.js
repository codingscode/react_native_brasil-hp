
import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'


class Filmes extends Component {


    render() {
        const { nome, foto } = this.props.dados

        return (
            <View>
               <View style={estilos.card} >
                  <Text style={estilos.titulo} >{nome}</Text>
                  <Image source={{ uri: foto }} style={estilos.capa} />
                  <View style={estilos.Areabotao} >
                      <TouchableOpacity style={estilos.botao} onPress={() => alert(nome)} >
                          <Text style={estilos.botaoTexto} >LEIA MAIS</Text>
                      </TouchableOpacity>
                  </View>
               </View>
            </View>
        )

    }


}


const estilos = StyleSheet.create({
   card: {
      shadowColor: '#000', backgroundColor: '#FFF', shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.8, margin: 15, shadowRadius: 5, borderRadius: 5, elevation: 3
   },
   titulo: {
      fontSize: 18, padding: 15
   },
   capa: {
      height: 250, zIndex: 2
   },
   Areabotao: {
      alignItems: 'flex-end', marginTop: -40, zIndex: 9
   },
   botao: {
      width: 100, backgroundColor: '#09A6FF', opacity: 1, padding: 8, borderTopLeftRadius: 5, borderBottomLeftRadius: 5
   },
   botaoTexto: {
      textAlign: 'center', color: '#FFF'
   }
   
   
})


export default Filmes
