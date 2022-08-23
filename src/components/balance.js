import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {MotiView} from 'moti'


export default function balance(props) {
  return (
    <MotiView
     from={{
      rotateX: '-120deg',
      opacity: 0
     }}
     animate={{
      rotateX: 0,
      opacity: 1
     }}
     transition={{
      type: 'timing',
      delay: 300,
      duration: 900
     }}
     style={styles.container}
    > 

      <View style={styles.item}>
        <Text style={styles.itemTitle}>Saldo</Text>
        <View style={styles.content}>
            <Text style={styles.currentSymbol}>R$</Text>
            <Text style={styles.balance}>{props.saldo}</Text>
        </View>
      </View>

      <View style={styles.item}>
        <Text style={styles.itemTitle}>Gastos</Text>
        <View style={styles.content}>
            <Text style={styles.currentSymbol}>R$</Text>
            <Text style={styles.Gastos}>{props.gastos}</Text>
        </View>
      </View>

      

    </MotiView>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 18,
        paddingEnd: 18,
        marginTop: -24,
        marginStart: 14,
        marginEnd: 14,
        paddingTop: 22,
        paddingBottom: 22,
        borderRadius: 4,
        zIndex: 99,
    },
    item: {

    },
    itemTitle: {
        fontSize: 20,
        color: '#dadada'
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    currentSymbol: {
      color: '#dadada',
      marginRight: 6,
    },
    balance: {
      fontSize: 22,
      color: '#2ecc71'
    },
    Gastos: {
      color: '#e74c3c',
      fontSize: 22
    }
})