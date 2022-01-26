
import React from 'react'
import { View, Text } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'



export default function DrawerCustomizado(props) {

   return (
      <DrawerContentScrollView {...props} >
         <DrawerItemList {...props} />
      </DrawerContentScrollView>
   )
}






