import { NavigationContainer } from '@react-navigation/native';
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { io } from 'socket.io-client';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/HomeScreen';
import RoomScreen from './src/RoomScreen';
import CreateRoom from './src/CreateRoom';
import JoinRoom from './src/JoinRoom';
import { SocketProvider } from './context/SocketContext';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <SocketProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{
          title:"Rocket-Vote",
          headerStyle: {
            backgroundColor: '#3498db', // Set the background color of the header
          },
          headerTintColor: '#fff', // Set the text color of the header
          headerTitleStyle: {
            fontWeight: 'bold', // Set the font weight of the header title
          },
          headerTitleAlign:'center'
          }}/>
        <Stack.Screen name="RocketVote" component={RoomScreen} 
        options={{
          title:"Create/Join",
          headerStyle: {
            backgroundColor: '#3498db', // Set the background color of the header
          },
          headerTintColor: '#fff', // Set the text color of the header
          headerTitleStyle: {
            fontWeight: 'bold', // Set the font weight of the header title
          },
          headerTitleAlign:'center'
          }}/>
          <Stack.Screen name="Create-room" component={CreateRoom} 
        options={{
          title:"Create room",
          headerStyle: {
            backgroundColor: '#3498db', // Set the background color of the header
          },
          headerTintColor: '#fff', // Set the text color of the header
          headerTitleStyle: {
            fontWeight: 'bold', // Set the font weight of the header title
          },
          headerTitleAlign:'center'
          }}/>
          <Stack.Screen name="Join-room" component={JoinRoom} 
        options={{
          title:"Join room",
          headerStyle: {
            backgroundColor: '#3498db', // Set the background color of the header
          },
          headerTintColor: '#fff', // Set the text color of the header
          headerTitleStyle: {
            fontWeight: 'bold', // Set the font weight of the header title
          },
          headerTitleAlign:'center'
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
    </SocketProvider>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
