import 'react-native-gesture-handler'
import React from 'react'
import { View, Text } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'

import { createDrawerNavigator } from '@react-navigation/drawer'

import Inicio from './src/pages/Inicio/Inicio'
import Sobre from './src/pages/Sobre/Sobre'
import Contato from './src/pages/Contato/Contato'
import DrawerCustomizado from './src/components/DrawerCustomizado'



const Drawer = createDrawerNavigator()


function App() {
   
   return (
      <NavigationContainer>
         <Drawer.Navigator drawerContent={DrawerCustomizado} >
            <Drawer.Screen name="Inicio" component={Inicio} />
            <Drawer.Screen name="Sobre" component={Sobre} />
            <Drawer.Screen name="Contato" component={Contato} />
         </Drawer.Navigator>
      </NavigationContainer>
   )
}


export default App
