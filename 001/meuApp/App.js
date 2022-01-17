import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialIcons'



import Inicio from './src/pages/Inicio/Inicio'
import Sobre from './src/pages/Sobre/Sobre'
import Contato from './src/pages/Contato/Contato'


const Tab = createBottomTabNavigator()

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


function App() {
   
   

   return (
      <NavigationContainer>
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
            <Tab.Screen name="Contato" component={Contato} />
         </Tab.Navigator>
        
      </NavigationContainer>
      
   )

}




export default App


