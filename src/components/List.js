import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import {MotiView, MotiText, AnimatePresence } from 'moti'

export default function List({data}) {
    const [showValue, setShowValue] = useState(false)
  return (
    <TouchableOpacity style={styles.container}  onPress={()=> setShowValue(!showValue)}>
      <Text style={styles.data}>{data.data}</Text>
      <View style={styles.content}>
          <Text style={styles.label}>{data.label}</Text>
          {showValue? (

            <AnimatePresence exitBeforeEnter>
              <MotiText 
              from={{
                translateX: 100
              }}
              animate={{
                translateX: 0
              }}
              transition={{
                type: 'timing',
                duration: 600
              }}
              style={data.type === 1? styles.value : styles.gastos}>
             {data.type === 1? `R$ ${data.value}` : `R$ -${data.value}`}
             </MotiText>
             </AnimatePresence>

             ) 
             : (
               <AnimatePresence exitBeforeEnter>
             <View style={styles.skeleton} />
              </AnimatePresence>
             )
             }
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 24,
        borderBottomColor: '#dadada',
        borderBottomWidth: 0.5,
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2,
        marginBottom: 8
    },
    data: {
        color: '#dadada',
        fontWeight: 'bold',
    },
    label: {
        fontWeight: 'bold',
        fontSize: 16
    },
    value: {
        fontSize: 16,
        color: '#23cc71',
        fontWeight: 'bold',
    },
    gastos: {
         fontSize: 16,
        color: '#e74c3c',
        fontWeight: 'bold',
    }, 
    skeleton: {
        marginTop: 6,
        width: 80,
        height: 10,
        backgroundColor: '#dadada',
        borderRadius: 8
    } 
})