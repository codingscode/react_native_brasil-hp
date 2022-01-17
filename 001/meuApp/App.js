import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


import Inicio from './src/pages/Inicio/Inicio'
import Sobre from './src/pages/Sobre/Sobre'
import Contato from './src/pages/Contato/Contato'


const Aba = createBottomTabNavigator()


function App() {
   
   

   return (
      <NavigationContainer>
         <Aba.Navigator>
            <Aba.Screen name="Inicio" component={Inicio} />
            <Aba.Screen name="Sobre" component={Sobre} />
            <Aba.Screen name="Contato" component={Contato} />
         </Aba.Navigator>
        
      </NavigationContainer>
      
   )

}




export default App


