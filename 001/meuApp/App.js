import React, { useState, useEffect, useMemo } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage'



function App() {
   const [nome, setNome] = useState('')
   const [entrada, setEntrada] = useState('')


   //component didmount
   useEffect(() => {
      async function acessarStorage() {
         const nomeStorage = await AsyncStorage.getItem('nomes')
         if (nomeStorage !== null) {
            setNome(nomeStorage)
         }
      }

      acessarStorage()

   }, [])


   //component didupdate
   useEffect(()=>{
   
      async function salvarStorage() {
         await AsyncStorage.setItem('nomes', nome)
      }
      
      salvarStorage()
      
   }, [nome])
   
   function alterarNome() {
      setNome(entrada)
      setEntrada('')
   }
   
   const letrasNome = nome.length
   console.log(letrasNome)
   

   return (
      <View style={estilos.container} >
         <TextInput placeholder="Seu nome..." value={entrada} onChangeText={(valor) => setEntrada(valor)} />
         <TouchableOpacity style={estilos.botao} onPress={alterarNome} >
            <Text style={estilos.botaoTexto} >Alterar nome</Text>
         </TouchableOpacity>
         <Text style={estilos.texto} >{ nome }</Text>
         <Text style={estilos.texto} >Tem { letrasNome } letras</Text>
         
      </View>

   )

}

const estilos = StyleSheet.create({
   container: {
      flex: 1, marginTop: 15
   },
   texto: {
      color: '#000', fontSize: 35
   },
   botao: {
      backgroundColor: '#222', alignItems: 'center'
   },
   botaoTexto: {
      color: '#FFF'
   }
   
   

})


export default App


