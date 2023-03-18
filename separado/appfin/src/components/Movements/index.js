import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'




function Movements({ data }) {
  

   return (
      <View style={estilos.container} >
         <Text>{data.label}</Text>
        
      </View>
   )
}

const estilos = StyleSheet.create({
   container: {
      flex: 1, backgroundColor: '#fafafa'
   },
   

})


export default Movements
