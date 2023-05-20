import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { DataTable  } from 'react-native-paper';
import { Card, Icon } from 'react-native-elements';

export default function Favoritesn({ currentUser, setCurrentUser }) {
   
   return (
      <View style={styles.container}>
         <Card>
            <Card.Title>Favorites</Card.Title>
            <Card.Divider />
               <DataTable>
                  <DataTable.Header>
                     <DataTable.Title>Image</DataTable.Title>
                     <DataTable.Title>Product Name</DataTable.Title>
                     <DataTable.Title>Price</DataTable.Title>
                     <DataTable.Title>Seller</DataTable.Title>
                     <DataTable.Title>Action</DataTable.Title>
                  </DataTable.Header>
                  {
                     currentUser && currentUser.likes.length >0 && currentUser.likes.map((product, index) =>
                     <DataTable.Row key={index}>
                        <DataTable.Cell><Image source={require('./img/ProductDemo.png')} style={{height: 50, width:50}} /></DataTable.Cell>
                        <DataTable.Cell>{product.name}</DataTable.Cell>
                        <DataTable.Cell>{product.price} $</DataTable.Cell>
                        <DataTable.Cell>{product.seller}</DataTable.Cell>
                        <DataTable.Cell><Icon name='delete' color="red" /></DataTable.Cell>
                     </DataTable.Row>
                     ) 
                  }
               </DataTable>
         </Card>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      width: 700,
      marginLeft: '30%'
   },
   card: {
      width: 400,
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
