import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { io } from 'socket.io-client'

const RoomScreen = ({navigation}) => {
  return (
    <View style={styles.joinRoom}>
      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Join-room")}><Text style={styles.text}>Join room</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Create-room")}><Text style={styles.text} >Create room</Text></TouchableOpacity>
    </View>
  )
}

export default RoomScreen

const styles = StyleSheet.create({
  joinRoom:{
    justifyContent:'center',
    alignItems:'center',
    flex:1
  },
  button:{
    marginVertical: 20,
    height:50,
    width:200,
    borderColor:'black',
    borderRadius:16,
    borderWidth:3,
    alignItems:'center',
    justifyContent:'center'
  },
  text:{
    color:'gray',
    fontWeight:'700',
    fontSize:16
  }
})