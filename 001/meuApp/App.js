import React, { Component } from 'react'
import { View, Text } from 'react-native'



class App extends Component {
   


 
   render() {
      return (
         <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between'}} >
            <View style={{width: 50, height: 50, backgroundColor: 'lightgreen'}} ></View>   
            <View style={{width: 50, height: 50, backgroundColor: 'purple'}} ></View>   
            <View style={{width: 50, height: 50, backgroundColor: 'yellow'}} ></View>   
            <View style={{width: 50, height: 50, backgroundColor: 'lightblue'}} ></View>   
            
         </View>
      )
   }
}




export default App

