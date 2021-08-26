import React, { Component } from 'react'
import { View, Text } from 'react-native'



class App extends Component {
   


 
   render() {
      return (
         <View style={{ backgroundColor: 'orange', flex: 1}} >
            <View style={{flex: 2, backgroundColor: 'lightgreen'}} >
               <Text>texto interno 1</Text>   
               <Text>texto interno 2</Text>   
               <Text>texto interno 3</Text>   
               <Text>texto interno 4</Text>   
               <Text>texto interno 5</Text>   
            </View>   
            <View style={{flex: 1, backgroundColor: 'purple'}} ></View>   
            <View style={{flex: 1, backgroundColor: 'yellow'}} ></View>   
            
         </View>
      )
   }
}




export default App

