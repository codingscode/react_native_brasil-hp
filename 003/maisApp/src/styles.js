
import styled from 'styled-components/native'


export const Container = styled.View`
   flex: 1;
   justify-content: center;
   align-items: center;
   background-color: darkblue;

`

export const Titulo = styled.Text`
   color: ${props => props.cor};
   font-size: ${props => props.tamanho}px;
`

export const Nome = styled.Text`
   color: #FFF;
   font-size: 20px;
`

