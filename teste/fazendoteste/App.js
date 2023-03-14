import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


import Inicio from './src/pages/Inicio/Inicio'
import Sobre from './src/pages/Sobre/Sobre'



const Stack = createNativeStackNavigator()



function App() {
   

   return (
      <NavigationContainer>
         <Stack.Navigator initialRouteName='Inicio' >
         <Stack.Screen name="Inicio" component={Inicio} 
                          options={
                             {title: 'Inicio', headerStyle: {backgroundColor: 'lightgreen'}, 
                              headerTintColor: '#FFF'}} />
            <Stack.Screen name="Sobre" component={Sobre}  />
         </Stack.Navigator>
      </NavigationContainer>

   )

}


export default App


/*
import React from 'react'

import { StyleSheet, Text, View } from 'react-native'



function App() {
   

  return (
     <View>
        <Text >
        eu fazendo legal
        </Text>
     </View>

  )

}


const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
})


export default App




*/