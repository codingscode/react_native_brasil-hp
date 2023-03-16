
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import styled from 'styled-components/native'


function App() {
   
   return (
      <Container  >
         <Titulo>Sujeito Programador</Titulo>
      </Container>
   )
}

const Container = styled.View`
   flex: 1;
   justify-content: center;
   align-items: center;
   background-color: #FF0000;

`

const Titulo = styled.Text`
   color: lightgreen;
   font-size: 25px;
`


export default App
