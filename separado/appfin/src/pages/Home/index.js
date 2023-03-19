
import { View, Text, StyleSheet, FlatList } from 'react-native'
import Balance from '../../components/Balance'
import Header from '../../components/Header'
import Movements from '../../components/Movements'


const list = [
   { id: 1, label: 'Boleto conta luz', valor: '300,90', data: '17/09/2022', tipo: 0 },
   { id: 2, label: 'Pix Cliente X', valor: '2.500,00', data: '23/09/2022', tipo: 1 },
   { id: 3, label: 'Salário', valor: '7200,00', data: '28/09/2022', tipo: 1 }
]


function Home() {
  

   return (
      <View style={estilos.container} >
        <Header nome="H P Programador" />
        <Balance saldo="15000" gastos="2300" />

        <Text style={estilos.title} >Últimas movimentações</Text>
        <FlatList style={estilos.list} data={list} keyExtractor={ (item) => String(item.id) } showsVerticalScrollIndicator={false} renderItem={ ({ item }) => <Movements data={item} /> }  />

      </View>
   )
}

const estilos = StyleSheet.create({
   container: {
      flex: 1, backgroundColor: '#fafafa'
   },
   title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginLeft: 14,
      marginRight: 14,
      marginTop: 14      
   },
   list: {
      marginStart: 14,
      marginEnd: 14
   }
   

})


export default Home
