import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from  '@react-navigation/native-stack' //'@react-navigation/stack'
import Icon from 'react-native-vector-icons/MaterialIcons'



import Inicio from './src/pages/Inicio/Inicio'
import Sobre from './src/pages/Sobre/Sobre'
import Contato from './src/pages/Contato/Contato'


const Tab = createBottomTabNavigator()

const Stack = createNativeStackNavigator()


const icones = {
   Inicio: {
      name: 'home'
   },
   Sobre: {
      name: 'store'
   },
   Contato: {
      name: 'phone'
   }
   
}


function Abas() {
   
   

   return (
      
      <Tab.Navigator 
           screenOptions={ ({route}) => ({
              tabBarStyle: { backgroundColor: 'purple' },
              tabBarActiveTintColor: '#FFF',
              tabBarInactiveTintColor: 'yellow',
              tabBarIcon: ({ color, size }) => {
                 const { name } = icones[route.name]
                 return <Icon name={name} color={color} size={size} />
                 
              }
           })}
           
       >
         <Tab.Screen name="Inicio" component={Inicio} />
         <Tab.Screen name="Sobre" component={Sobre} />
      </Tab.Navigator>
      
   )

}

function App() {

   return (
      <NavigationContainer>
         <Stack.Navigator>
            <Stack.Screen name="Inicio" component={Abas} />
            <Stack.Screen name="Contato" component={Contato} />
         </Stack.Navigator>
      </NavigationContainer>
   )
}


export default App


