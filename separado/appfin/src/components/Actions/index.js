
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
          <TouchableOpacity style={estilos.actionButton} >
             <View style={estilos.areaButton} >
                <Image size={26} color="#000" source={require('../../images/tag.png')} />
             </View>
             <Text style={estilos.labelButton} >Compras</Text>
          </TouchableOpacity>


       </ScrollView>
    )
}

const estilos = StyleSheet.create({
   container: {
      maxHeight: 84,
      marginBottom: 14,
      marginTop: 18,
      paddingEnd: 14,
      paddingStart: 14
   },
   actionButton: {
      alignItems: 'center',
      marginRight: 32
   },
   areaButton: {
      backgroundColor: '#ecf0f1',
      height: 60,
      width: 60,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center'
   },
   labelButton: {
      marginTop: 4,
      textAlign: 'center',
      fontWeight: 'bold'
   }
 


})

export default Actions
