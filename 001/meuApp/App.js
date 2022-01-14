import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


import Inicio from './src/pages/Inicio/Inicio'
import Sobre from './src/pages/Sobre/Sobre'
import Contato from './src/pages/Contato/Contato'


const Stack = createNativeStackNavigator()


function App() {
   
   

   return (
      <NavigationContainer>
         <Stack.Navigator initialRouteName="Inicio" >
            <Stack.Screen name="Inicio" component={Inicio} 
                          options={
                             {title: 'Inicio', headerStyle: {backgroundColor: '#121212'}, 
                              headerTintColor: '#FFF', headerShown: false}} />
            <Stack.Screen name="Sobre" component={Sobre}  />
            <Stack.Screen name="Contato" component={Contato}  />
         </Stack.Navigator>
      </NavigationContainer>
      
   )

}




export default App


