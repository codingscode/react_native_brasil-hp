
import React from 'react'
import { View, StyleSheet, Image, Text, StatusBar, TouchableOpacity } from 'react-native'




const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64

/*
import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = <Icon name="rocket" size={30} color="#900" />;
*/

function Header() {
    return (
      <View style={estilos.container} >
         <View style={estilos.content} >
            <Text>Sujeito Programador</Text>

            <TouchableOpacity activeOpacity={0.9} >
               <Image source={require('../../images/user.png')} style={estilos.imagem} />
            </TouchableOpacity>
         </View>
      </View>
   )
}

const estilos = StyleSheet.create({
    container: {
        backgroundColor: '#8000ff',
        paddingTop: statusBarHeight,
    },
    imagem: {
        width: 50,
        height: 50,
        
        
    },
})


export default Header
