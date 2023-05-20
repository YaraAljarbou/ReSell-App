import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { Card } from 'react-native-elements';
import { navigate } from '@reach/router';
import axios from 'axios';

export default function ProductForm({ currentUser, setCurrentUser }) {

   const [product, setProduct] = useState({
      name: '',
      category: '',
      price: '',
      desc: '',
      rating_sum: 0,
      rating_count: 0,
      seller: currentUser.name
   });

   const CreateProduct = () => { 
      axios.post('http://localhost:8000/api/products/new', { ...product })
         .then(res => {
            console.log(res.data);
            setProduct({
               name: '',
               category: '',
               price: '',
               desc: '',
               rating_sum: 0,
               rating_count: 0,
               seller: currentUser.name
            });
            navigate('/user_products');
         })
         .catch(err => console.log(err));
   };

   return (
      <View style={styles.container}>
         <Card>
            <Card.Title>Add a Product to Sell</Card.Title>
            <Card.Divider/>
            <TextInput style={styles.textInput} label="Name" defaultValue={product.name} onChangeText={ (value) => setProduct({...product, name: value }) } />
            <TextInput style={styles.textInput} label="Category" defaultValue={product.category} onChangeText={ (value) => setProduct({...product, category: value }) } />
            <TextInput style={styles.textInput} label="Price" defaultValue={product.price} onChangeText={ (value) => setProduct({...product, price: value }) } />
            <TextInput
               style={styles.textInput} 
               label="Description"
               multiline = {true}
               numberOfLines = {4}
               defaultValue={product.desc}
               onChangeText={ (value) => setProduct({...product, desc: value }) } 
            />
            <Card.Divider/>
            <View style={styles.buttonContainer}>
               <Button style={styles.button} icon="plus-outline" mode="contained" onPress={ CreateProduct }>Add Product</Button>
               <Button style={styles.button} color="red" icon="close-outline" mode="contained" onPress={() => navigate('/products')}>Cancel</Button>
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
      width: 200
   },
   buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
   }
});
