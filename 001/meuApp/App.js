import 'react-native-gesture-handler';
import React from 'react'
import { View, Text } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'

import { createDrawerNavigator } from '@react-navigation/drawer'
const Drawer = createDrawerNavigator()
 

import Inicio from './src/pages/Inicio/Inicio'
import Sobre from './src/pages/Sobre/Sobre'
import Contato from './src/pages/Contato/Contato'



function App() {
   
   return (
      <NavigationContainer>
         <Drawer.Navigator>
            <Drawer.Screen name="Inicio" component={Inicio} options={{ headerShown: false }} />
            <Drawer.Screen name="Sobre" component={Sobre} options={{ headerShown: false }} />
            <Drawer.Screen name="Contato" component={Contato} options={{ headerShown: false }} />
         </Drawer.Navigator>
      </NavigationContainer>
   )
}


export default App


