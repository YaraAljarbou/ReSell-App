import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import axios from 'axios';
import { Card, Icon, Rating } from 'react-native-elements';
import { navigate } from '@reach/router';
import { DataTable  } from 'react-native-paper';

export default function UserProducts({ currentUser, setCurrentUser }) {

   const [products, setProducts] = useState([]);
   
   useEffect( () => { 
      axios.get('http://localhost:8000/api/products')
         .then(res => setProducts(res.data))
         .catch(err => console.log(err));
   }, [products]);

   const productList = products.filter(product => product.seller === currentUser.name).map((product, index) => 
      <DataTable.Row key={index}>
         <DataTable.Cell><Image source={require('./img/ProductDemo.png')} style={{height: 50, width:50}} /></DataTable.Cell>
         <DataTable.Cell>{product.name}</DataTable.Cell>
         <DataTable.Cell>{product.price} $</DataTable.Cell>
         <DataTable.Cell><Icon name='delete' color="red" /></DataTable.Cell>
      </DataTable.Row>
   );

   return (
      <View style={styles.container}>
         <Card>
            <Card.Title>My Products</Card.Title>
            <Card.Divider />
               <DataTable>
                  <DataTable.Header>
                     <DataTable.Title>Image</DataTable.Title>
                     <DataTable.Title>Product Name</DataTable.Title>
                     <DataTable.Title>Price</DataTable.Title>
                     <DataTable.Title>Action</DataTable.Title>
                  </DataTable.Header>
                  {productList}
               </DataTable>
         </Card>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      width: 600,
      marginLeft: '30%'
   },
   button: {
      width: 200
   },
   cardFooter: {
      flexDirection: 'row',
      justifyContent: 'space-between'
   },
   buttonContainer: {
      flex: 1,
      justifyContent: 'space-around'
   }
});
