import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { MotiView, AnimatePresence, MotiText } from 'moti'



function Movements({ data }) {
   
   const [mostrarValor, setMostrarValor] = useState(false)

   return (
      <TouchableOpacity style={estilos.container} onPress={ () => setMostrarValor(!mostrarValor) } >
         <Text style={estilos.data} >{data.data}</Text>
         <View style={estilos.content} >
            <Text style={estilos.label} >
               {data.label}
            </Text>
            {mostrarValor ? (
               <AnimatePresence exitBeforeEnter >
                  <MotiText style={data.tipo === 1 ? estilos.valor : estilos.expenses} from={{ translateX: 100 }} animate={{ translateX: 0 }} transition={{ type: 'timing', duration: 500 }} >
                  {data.tipo === 1 ? `R$ ${data.valor}` : `R$ -${data.valor}`}
                  </MotiText>
               </AnimatePresence>
            ) : (
               <AnimatePresence exitBeforeEnter >
                  <MotiView style={estilos.esqueleto} from={{opacity: 0}} animate={{opacity: 1}} transition={{type: 'timing'}} >
                  </MotiView>
               </AnimatePresence>
            )}


         </View>

      </TouchableOpacity>
   )
}

const estilos = StyleSheet.create({
   container: {
      flex: 1,
      marginBottom: 24,
      borderBottomWidth: 0.5,
      borderBottomColor: '#DADADA'

   },
   content: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 2,
      marginBottom: 8
   },
   data: {
      color: '#DADADA',
      fontWeight: 'bold'
   },
   label: {
      fontWeight: 'bold',
      fontSize: 16
   },
   valor: {
      fontSize: 16,
      color: '#2ecc71',
      fontWeight: 'bold'
   },
   expenses: {
      fontSize: 16,
      color: '#e74c3c',
      fontWeight: 'bold'
   },
   esqueleto: {
      marginTop: 6,
      width: 80,
      height: 10,
      backgroundColor: '#DADADA',
      borderRadius: 8
   }
   

})


export default Movements
