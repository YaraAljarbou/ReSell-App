import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';
import { Card, Input } from 'react-native-elements';
import axios from 'axios';
import { navigate } from '@reach/router';


export default function LoginForm({ currentUser, setCurrentUser }) {
   
   const [name, setName] = useState('');
   const [password, setPassword] = useState('');

   const login = () => {
      axios.get(`http://localhost:8000/api/users/${name}`)
         .then(res => {
            setCurrentUser(res.data);
            navigate('/products');
         })
         .catch(err => console.log(err));
   }

   return (
      <View style={styles.container}>
         <Card>
            <Card.Title>Log In</Card.Title>
            <Card.Divider/>
            <Input 
               label="Name" 
               leftIcon={{ type: 'font-awesome', name: 'user' }} 
               onChangeText={value => setName(value)}
            />
            <Input 
               label="Password" 
               leftIcon={{ type: 'font-awesome', name: 'key' }} 
               secureTextEntry={true} 
               onChangeText={value => setPassword(value)}
            />
            <Card.Divider/>
            <View style={styles.buttonContainer}>
               <Button style={styles.button} icon="login" mode="contained" onPress={login}>Log In</Button>
            </View>
         </Card>
      </View>
         
   );
}

const styles = StyleSheet.create({
   container: {
      width: 600,
      marginLeft: '30%'
   },
   textInput: {
      marginTop: 10,
   },
   button: {
      width: 200,
      color: 'white'
   },
   buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
   }
});
