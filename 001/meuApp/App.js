import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


import Inicio from './src/pages/Inicio/Inicio'
import Sobre from './src/pages/Sobre/Sobre'



const Stack = createNativeStackNavigator()


function App() {
   
   

   return (
      <NavigationContainer>
         <Stack.Navigator>
            <Stack.Screen name="Inicio" component={Inicio}  />
            <Stack.Screen name="Sobre" component={Sobre}  />
         </Stack.Navigator>
      </NavigationContainer>
      
   )

}

const estilos = StyleSheet.create({
   container: {
      flex: 1, justifyContent: 'center', alignItems: 'center'
   },
   
  
   

})


export default App


