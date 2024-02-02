import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import PollComponent from '../components/PollComponent'


const CreateRoom = ({navigation}) => {

     return (
    <View style={styles.view}>
      <Text style={styles.header}>Create room</Text>
      <PollComponent navigation={navigation}/>
    </View>
  )
}

export default CreateRoom

const styles = StyleSheet.create({
    header:{
        fontSize:22,
        fontWeight:"700",
        marginTop:20
    },
    view:{
        justifyContent:'space-evenly',
        alignItems:'center',
        // flex:1/3,
        
    },
})