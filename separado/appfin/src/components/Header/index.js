
import React from 'react'
import { View, StyleSheet, Image, Text, StatusBar, TouchableOpacity } from 'react-native'
import { MotiView, MotiText } from 'moti'



const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64


function Header({ nome }) {
    return (
      <View style={estilos.container} >
         <MotiView style={estilos.content} from={{translateY: -150, opacity: 0}} animate={{translateY: 0, opacity: 1}} >
            <Text style={estilos.username} >{nome}</Text>

            <TouchableOpacity activeOpacity={0.9} style={estilos.buttonUser} >
               <Image source={require('../../images/user.png')} style={estilos.imagem} />
            </TouchableOpacity>
         </MotiView>
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
