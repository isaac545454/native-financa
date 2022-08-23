import { 
  View, 
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
 } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'

export default function Actions() {
  return (
   
      <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
            
            <TouchableOpacity style={styles.actonButton}>
              <View style={styles.areButton}>
                    <AntDesign name='addfolder' size={26} color='#000' />
              </View>
              <Text style={styles.labelButton}>entradas</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actonButton}>
              <View style={styles.areButton}>
                    <AntDesign name='tagso' size={26} color='#000' />
              </View>
              <Text style={styles.labelButton}>compras</Text>
            </TouchableOpacity>

             <TouchableOpacity style={styles.actonButton}>
              <View style={styles.areButton}>
                    <AntDesign name='creditcard' size={26} color='#000' />
              </View>
              <Text style={styles.labelButton}>carteira</Text>
            </TouchableOpacity>

             <TouchableOpacity style={styles.actonButton}>
              <View style={styles.areButton}>
                    <AntDesign name='barcode' size={26} color='#000' />
              </View>
              <Text style={styles.labelButton}>boletos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actonButton}>
              <View style={styles.areButton}>
                    <AntDesign name='setting' size={26} color='#000' />
              </View>
              <Text style={styles.labelButton}>Contas</Text>
            </TouchableOpacity>


      </ScrollView>
  
  )
}

const styles = StyleSheet.create({
  container: {
    maxHeight: 84,
    marginBottom: 14,
    marginTop: 18,
    paddingEnd: 14,
    paddingStart: 14,
  },
  actonButton: {
    alignItems: 'center',
    marginRight: 32
  },
  areButton: {
    backgroundColor: '#ecf0f1',
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelButton: {
    marginTop: 4,
    textAlign: 'center',
    fontWeight: 'bold',
  }

})