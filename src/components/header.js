import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import {Feather} from '@expo/vector-icons'
import {MotiView, MotiText} from 'moti'

const statusBar = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64

export default function header({name}) {
  return (
    <View style={styles.container}>

      <MotiView style={styles.content}
       from={{
              translateY: -250,
              opacity: 0,
             }}
             animate={{
              translateY: 0,
              opacity: 1,
             }}
             transition={{
              type: 'spring',
              duration: 900,
              delay: 500
             }}
             >
            <MotiText style={styles.userName}
            from={{
              translateX: -300
            }}
            animate={{
              translateX: 0
            }}
            transition={{
              type: 'timing',
              duration: 900,
              delay: 900
            }}
            >{name}</MotiText>

            <TouchableOpacity style={styles.buttonUser}>
                <Feather name='user' size={27} color="#fff" />
            </TouchableOpacity>
      </MotiView>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#8000ff',
        paddingTop: statusBar,
        paddingStart: 16,
        flexDirection: 'row',
        paddingEnd: 16,
        paddingBottom: 44,
    },
    content:{
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
userName: {
   fontSize: 18,
   color: "#fff",
   fontWeight: 'bold'
},
buttonUser: {
    width: 44,
    height: 44,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 22
}
})