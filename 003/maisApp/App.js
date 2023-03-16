
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Container, Titulo, Nome, BotaoSujeito, BotaoText } from './src/styles'


function App() {
   
   return (
      <Container  >
         <Titulo cor={"yellow"} tamanho="30" >Sujeito Programador</Titulo>
         <Nome>Olá Heronnes</Nome>
         <BotaoSujeito onPress={ () => alert('Clicou!') } >
            <BotaoText>Entrar</BotaoText>
         </BotaoSujeito>
      </Container>
   )
}


export default App
