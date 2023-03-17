
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
            <Text style={estilos.username} >Sujeito Programador</Text>

            <TouchableOpacity activeOpacity={0.9} style={estilos.buttonUser} >
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
        flexDirection: 'row',
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 44
    },
    imagem: {
        width: 50,
        height: 50,
                
    },
    content: {
        flex: 1, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between'
    },
    username: {
        fontSize: 18, color: 'white', fontWeight: 'bold'
    },
    buttonUser: {
        width: 44, height: 44, backgroundColor: 'rgba(255, 255, 255, 0.5)', justifyContent: 'center', alignItems: 'center', borderRadius: 22
    }

})


export default Header
