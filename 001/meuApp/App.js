import React, { Component } from 'react'
import { View, Text } from 'react-native'



class App extends Component {
   


 
   render() {
      return (
         <View style={{ backgroundColor: 'orange', flex: 1}} >
            <View style={{flex: 1, width: 50, height: 50, backgroundColor: 'green'}} ></View>   
            <View style={{flex: 1, width: 50, height: 50, backgroundColor: 'purple'}} ></View>   
            
         </View>
      )
   }
}




export default App

