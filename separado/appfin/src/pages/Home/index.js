
import { View, Text, StyleSheet } from 'react-native'
import Balance from '../../components/Balance'
import Header from '../../components/Header'


function Home() {
  

   return (
      <View style={estilos} >
        <Header nome="H P Programador" />
        <Balance />
      </View>
   )
}

const estilos = StyleSheet.create({
  container: {
     flex: 1, backgroundColor: '#fafafa'
  }
})


export default Home
