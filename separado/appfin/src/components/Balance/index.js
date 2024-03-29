
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MotiView } from 'moti'


function Balance({ saldo, gastos }) {
  

   return (
      <MotiView style={estilos.container} from={{ rotateX: '-100deg', opacity: 0 }} animate={{ rotateX: '0deg', opacity: 1 }} transition={{ type: 'timing', duration: 900, delay: 300 }} >
        <View style={estilos.item}>
           <Text style={estilos.itemTitle} >Saldo</Text>
           <View style={estilos.content} >
              <Text style={estilos.currencySymbol} >R$</Text>
              <Text style={estilos.balance} >{saldo}</Text>
           </View>
        </View>

        <View style={estilos.item}>
           <Text style={estilos.itemTitle} >Gastos</Text>
        <View style={estilos.content} >
           <Text style={estilos.currencySymbol} >R$</Text>
           <Text style={estilos.expenses} >-{gastos}</Text>
        </View>
        </View>

      </MotiView>
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
   },
   itemTitle: {
     fontSize: 20,
     color: 'purple'
   },
   content: {
      flexDirection: 'row',
      alignItems: 'center'
   },
   currencySymbol: {
      color: 'purple',
      marginRight: 6
   },
   balance: {
      fontSize: 22,
      color: '#2ecc71'
   },
   expenses: {
      fontSize: 22,
      color: '#e74c3c' 
   }
   
   

})

export default Balance
