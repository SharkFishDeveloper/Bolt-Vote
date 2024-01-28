import { Alert, Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useSocket } from '../context/SocketContext';
import { RadioButton } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';


const PollComponent = () => {
    const socket = useSocket();
    const [data, setData] = useState("");
    const [text,setText] = useState("");
    const [question,setQuestion] = useState("");
    const [optionsCount,setOptionsCount] = useState(1);
    const [options, setOptions] = useState<string[]| undefined>([]);

    const clearEverything = ()=>{
        setData("");
        setQuestion("");
        setOptions([]);
    }


    const addOption = () => {
        if(options?.length >=6){
            return Alert.alert("Polling error","Cannot add more than 6 options")
        }
      else{
        setOptions(prevOptions => [...prevOptions, '']);
      } 
    };
  
    const removeOption = index => {
      setOptions(prevOptions => prevOptions.filter((_, i) => i !== index));
    };
  
    const updateOption = (index:number, text:number) => {
      setOptions(prevOptions => {
        const newOptions = [...prevOptions];
        newOptions[index] = text;
        return newOptions;
      });
    };

    const submitHandler = ()=>{

    }


    return (
        <ScrollView style={styles.scrollView}>
            <TextInput style={styles.input} placeholder='Enter Room no .' onChangeText={(text) => setData(text)} />
            
            <View style={styles.pollCard}>
                <TextInput style={styles.quesInput} placeholder='Enter question ...' onChangeText={(text)=>setQuestion(text)}/>
                {options.map((option, index) => (

                                
                    <View key={index} style={styles.radio}>
                    <RadioButton value={option} onPress={()=>console.log("Vlaue of radio",option)}/>
                    <TextInput
                        style={styles.option}
                        placeholder={`Option ${index + 1}`}
                        value={option}
                        onChangeText={text => updateOption(index, text)}
                    />
                    <TouchableOpacity onPress={() => removeOption(index)}>
                        <Text style={styles.minusSign}>-</Text>
                    </TouchableOpacity>
                    </View>


                ))}
      <TouchableOpacity onPress={addOption} style={{alignSelf:'flex-end',marginVertical:3}}>
        <AntDesign name="pluscircleo" size={30} color="green"  />
      </TouchableOpacity>
                {/* <Text>{JSON.stringify(options)}</Text> */}
              
            </View>
            <TouchableOpacity onPress={clearEverything} style={styles.clearEverything}>
               <Text style={styles.clearEverythingTExt}>Clear everything</Text>
               </TouchableOpacity>
               
            <TouchableOpacity onPress={submitHandler} style={styles.postButton}>
               <Text style={styles.post}>Post</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}
{/* <TouchableOpacity onPress={handleData}><Text style={styles.text}>Create this room</Text></TouchableOpacity> */}

export default PollComponent

const styles = StyleSheet.create({
    scrollView:{

    },
    input: {
        borderColor: "gray",
        borderRadius: 12,
        borderWidth: 3,
        height: 50,
        width: 300,
        padding: 15,
        marginVertical: 20,
        alignSelf: 'center'
    },
    text: {
        alignSelf: 'center'
    },
    quesInput: {
        borderWidth: 3,
        borderRadius: 8,
        borderColor: 'gray',
        fontSize: 16,
        height: 50,
        padding: 10,
        marginBottom:10
    },
    pollCard: {
        // borderWidth: 3,
        // borderColor: 'green',
        // borderRadius: 12,
        minHeight: 400,
        width: 350,
        padding: 10
    },
    radioDiv:{
        backgroundColor:'white',
        color:'black',
        // margin:10
    },
    radio:{
        flexDirection:'row',
        marginVertical:5,
        alignItems:'center',
        justifyContent:'space-around',
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 9,
        height:40,
        //,
         padding:2,
    },
    option:{
        // borderWidth: 2,
        // borderColor: 'black',
        // borderRadius: 9,
        width:250
    },
    minusSign:{
        fontSize:22,fontWeight:"800",alignSelf:'center',justifyContent:'center',alignItems:'center',color:'red',
        marginRight:10
    },
    plusSign:{
        fontSize:35,fontWeight:"800",alignSelf:'flex-end',marginRight:10
    },
    clearEverything:{
        alignSelf:'flex-end',
        height:45,
        borderBottomWidth:3,
        borderBottomColor:'black',
        marginVertical:10,
        width:120,
        justifyContent:'center',
        alignItems:'center'
    },
    clearEverythingTExt:{
        fontWeight:'800',
        fontSize:16,
        marginVertical:'auto'
    },
    postButton:{
        backgroundColor:'#2babf0',
        height:45,
        width:150,
        alignSelf:'center',
        borderRadius:12,
        // position:'absolute',
        // bottom:-10
        marginTop:100,
        justifyContent:'center',
        alignItems:'center'
    }
})