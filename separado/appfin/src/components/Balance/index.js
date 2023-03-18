
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'



function Balance() {
  

   return (
      <View>
         <View style={estilos.item}>
           <Text style={estilos.itemTitle} >Saldo</Text>
           <View>
              <Text style={estilos.currencySymbol} >R$</Text>
              <Text style={estilos.balance} >15.000,00</Text>
           </View>
        </View>

<     View style={estilos.item}>
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
      backgroundColor: '#FFF'
   } 
})

export default Balance
