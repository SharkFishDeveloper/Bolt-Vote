import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { questions } from '../util/HomeScreen-Content';
import Faq from '../components/Faq';
import { useSocket } from '../context/SocketContext';



// const socket = io('http://192.168.1.5:3000');
const HomeScreen = ({navigation}) => {
  console.log("rendered")
  return (
    <View style={styles.view}>
      <Text style={styles.Welcome}>Welcome to <Text style={styles.blue}>RocketVote</Text></Text>
      <Faq/>
      <TouchableOpacity style={styles.room} onPress={()=>{navigation.navigate("RocketVote")}}><Text style={styles.joinRoom} >Next</Text></TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({

  view:{
    padding:10,
    flex:1,
    justifyContent: 'space-evenly',
    alignContent:'center'
  },
  Welcome:{
    color:'green',
    fontWeight:'700',
    fontSize:26,
    textAlign:'center',
  },
  faqNEw:{
    justifyContent:'space-evenly',
    padding:20,
    alignItems:'flex-start',
    flex:1
  },
  faq:{
    alignSelf:'center',
    fontWeight:'700',
    color:'#6a6c6e',
    fontSize:20,
    borderBottomColor:'black',
    borderBottomWidth:3
  },
  blue:{
    color:'#1f67db',
    textDecorationLine:'underline',
  },
  card:{
    height:500,
    borderColor:'black',
    borderWidth:3,
    borderRadius:16,
    justifyContent:'space-between',
    padding:6
  },
  iconCard:{
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    borderTopWidth:3,
    borderTopColor:'black',
    padding:5
  },
  room:{
    height:40,
    width:150,
    alignSelf:'center',
     paddingHorizontal:'auto',
    padding:5,
    borderRadius:12,
    borderColor:'gray',
    borderWidth:3,
    alignItems:'center'
  },
  joinRoom:{
    fontWeight:"800",
    color:"black",
    fontSize:16
  },

  question:{
    fontSize:18,
    fontWeight:"600"
  },
  answer:{
    fontSize:16,
    fontWeight:"400"
  }
})  


      {/* <Text>HomeScreen</Text> */}
      {/* <TouchableOpacity onPress={()=>{
        navigation.navigate("RocketVote")
      }}><Text>Go to room</Text></TouchableOpacity> */}