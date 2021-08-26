import React, { Component } from 'react'
import { View, Text } from 'react-native'



class App extends Component {
   


 
   render() {
      return (
         <View style={{ backgroundColor: 'orange', flex: 1}} >
            <View style={{flex: 2, backgroundColor: 'lightgreen'}} ></View>   
            <View style={{flex: 1, backgroundColor: 'purple'}} ></View>   
            <View style={{flex: 1, backgroundColor: 'yellow'}} ></View>   
            
         </View>
      )
   }
}




export default App

