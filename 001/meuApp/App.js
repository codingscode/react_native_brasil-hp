import React, { useState, useRef } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, Keyboard } from 'react-native'

import api from './src/services/api'




function App() {
   
   const [cep, setCep] = useState('')
   const entradaRef = useRef(null)
   const [cepUsuario, setCepUsuario] = useState(null)
   
   
   
   function limpar() {
      setCep('')
      entradaRef.current.focus()
      setCepUsuario(null)
   }

   async function buscar() {
      if (cep == '') {
         alert('Digite um cep válido')
         setCep('')
         return
      }
      
      
      try {
         const resposta = await api.get(`/${cep}/json`)
         console.log(resposta.data)
         setCepUsuario(resposta.data)
         
         Keyboard.dismiss()  // fecha o teclado
      }
      catch(erro) {
         setCep('')
         console.log(`erro: ${erro}`)
      }

   }
   

   return (
      <SafeAreaView style={estilos.container} >
         <View style={estilos.a1} >
            <Text style={estilos.texto} >Digite o cep desejado</Text>
            <TextInput style={estilos.entrada} placeholder="Ex: 79003241" value={cep} onChangeText={ (texto) => setCep(texto) } keyboardType="numeric" ref={entradaRef} />
         </View>
         <View style={estilos.areaBtn} >
            <TouchableOpacity style={[estilos.botao, {backgroundColor: 'blue'}]} onPress={buscar} >
               <Text style={estilos.botaoTexto} >Buscar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[estilos.botao, {backgroundColor: 'orange'}]} onPress={limpar} >
               <Text style={estilos.botaoTexto} >Limpar</Text>
            </TouchableOpacity>
         </View>
         
         { cepUsuario && (
            <View style={estilos.resultado} >
               <Text style={estilos.itemTexto} >CEP: {cepUsuario.cep}</Text>
               <Text style={estilos.itemTexto} >Logradouro: {cepUsuario.logradouro}</Text>
               <Text style={estilos.itemTexto} >Bairro: {cepUsuario.bairro}</Text>
               <Text style={estilos.itemTexto} >Cidade: {cepUsuario.localidade}</Text>
               <Text style={estilos.itemTexto} >Estado: {cepUsuario.uf}</Text>
            </View>
         )}
         

         
      </SafeAreaView>

   )

}

const estilos = StyleSheet.create({
   container: {
      flex: 1
   },
   a1: {
      alignItems: 'center'
   },
   texto: {
      marginTop: 25, marginBottom: 15, fontSize: 25, fontWeight: 'bold'
   },
   entrada: {
      backgroundColor: '#FFF', borderWidth: 1, borderColor: '#DDD', borderRadius: 5, width: '90%', padding: 10, fontSize: 18
   },
   areaBtn: {
      alignItems: 'center', flexDirection: 'row', marginTop: 15, justifyContent: 'space-around'
   },
   botao: {
      height: 60, justifyContent: 'center', alignItems: 'center', padding: 15, borderRadius: 5
   },
   botaoTexto: {
      fontSize: 22, color: '#FFFF'
   },
   resultado: {
      flex: 1, justifyContent: 'center', alignItems: 'center'
   },
   itemTexto: {
      fontSize: 22
   }
   
   

})


export default App


