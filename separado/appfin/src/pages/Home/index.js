
import { View, Text, StyleSheet } from 'react-native'
import Header from '../../components/Header'


function Home() {
  

   return (
      <View style={estilos} >
        <Header />
        <Text> Home</Text>
      </View>
   )
}

const estilos = StyleSheet.create({
  container: {
     flex: 1, backgroundColor: '#fff'
  }
})


export default Home
