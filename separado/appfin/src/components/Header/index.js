
import React from 'react'
import { View, StyleSheet, Text, StatusBar } from 'react-native'

function Header() {
   return (
      <View style={estilos.container} >
         <Text>Header do app</Text>
      </View>
   )
}

const estilos = StyleSheet.create({
   container: {
      backgroundColor: '#8000ff'
   }
})


export default Header
