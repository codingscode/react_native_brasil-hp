
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'



function Balance() {
  

   return (
      <View style={estilos.container} >
        <View style={estilos.item}>
           <Text style={estilos.itemTitle} >Saldo</Text>
           <View>
              <Text style={estilos.currencySymbol} >R$</Text>
              <Text style={estilos.balance} >15.000,00</Text>
           </View>
        </View>

        <View style={estilos.item}>
           <Text style={estilos.itemTitle} >Gastos</Text>
        <View>
           <Text style={estilos.currencySymbol} >R$</Text>
           <Text style={estilos.balance} >390,00</Text>
        </View>
        </View>

      </View>
   )
}

const estilos = StyleSheet.create({
   container: {
      backgroundColor: '#FFF',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingStart: 18,
      paddingEnd: 18,
      marginTop: -24,
      marginStart: 14,
      marginEnd: 14,
      borderRadius: 4,
      paddingTop: 22,
      paddingBottom: 22,
      zIndex: 99

   } 
})

export default Balance
