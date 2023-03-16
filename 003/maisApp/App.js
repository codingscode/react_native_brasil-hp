
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Container, Titulo, Nome } from './src/styles'


function App() {
   
   return (
      <Container  >
         <Titulo cor={"yellow"} tamanho="30" >Sujeito Programador</Titulo>
         <Nome>Olá Heronnes</Nome>
      </Container>
   )
}


export default App
