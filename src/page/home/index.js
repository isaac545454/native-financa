import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Header from '../../components/header'
import Balance from '../../components/balance'
import List from '../../components/List'
import Actions from '../../components/Actions'

const list = [
  {
    id: 1,
    label: 'mercado',
    value: '999,66',
    data: '20/08/2022',
    type: 0
  },
    {
    id: 2,
    label: 'CPU i7',
    value: '2.302.99',
    data: '10/08/2022',
    type: 0
  },
    {
    id: 3,
    label: 'pix',
    value: '200.00',
    data: '18/08/2022',
    type: 1
  },
    {
    id: 4,
    label: 'salario',
    value: '2.500.00',
    data: '20/08/2022',
    type: 1
  }
]

const Home = () => {
  return( 
  <View style={styles.container}>
    <Header name='Isaac Gomes' />
    <Balance saldo="77.987.00" gastos="-2.350" />
    <Actions />
    <Text style={styles.title}>Ultimas movimentações</Text>
    <FlatList 
      style={styles.list}
      data={list}
      keyExtractor={(item)=> String(item.id)}
      showsVerticalScrollIndicator={false}
      renderItem={({item})=> <List data={item} />}
    />
  </View>)
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:  '#fafafa'
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      margin: 14,
     
    },
    list: {
    marginStart: 14,
    marginEnd: 14,
    }
  
  })

export default Home;