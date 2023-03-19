import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'




function Movements({ data }) {
  

   return (
      <TouchableOpacity style={estilos.container} >
         <Text style={estilos.data} >{data.data}</Text>
         <View style={estilos.content} >
            <Text style={estilos.label} >
               {data.label}
            </Text>
            <Text style={estilos.valor} >
               {data.valor}
            </Text>

         </View>

      </TouchableOpacity>
   )
}

const estilos = StyleSheet.create({
   container: {
      flex: 1, backgroundColor: '#fafafa'
   },

   

})


export default Movements
