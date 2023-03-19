
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native'



function Actions() {

    return (
       <ScrollView style={estilos.container} horizontal={true} showsHorizontalScrollIndicator={false} >
          <TouchableOpacity style={estilos.actionButton} >
          <View style={estilos.areaButton} >
             <Image size={26} color="#000" source={require('../../images/addfolder.png')} />
          </View>
          <Text style={estilos.labelButton} >Entradas</Text>

          </TouchableOpacity>
       </ScrollView>
    )
}

const estilos = StyleSheet.create({
   container: {
      
   } 
})

export default Actions
