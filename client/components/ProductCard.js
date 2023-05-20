import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Card, Icon, Rating } from 'react-native-elements';
import axios from 'axios';
import { navigate } from '@reach/router';

export default function ProductCard({ product, currentUser, setCurrentUser }) {

   const [like, setLike] = useState(false);
   const [inCart, setInCart] = useState();

   return (
      <View style={styles.card}>
         <Card>
            <TouchableOpacity onPress={() => navigate(`/products/${product.name}`) }>
               <Card.Image source={require('./img/ProductDemo.png')} />
            </TouchableOpacity>
            <Card.Title style={{marginBottom: 0}}>{product.name}</Card.Title>
            <View style={styles.cardFooter}>
               <Text style={{marginBottom: 5}}>{product.category}</Text>
               <Text>By: {product.seller}</Text>
            </View>
            <Card.Divider/>
            <View style={styles.cardFooter}>
               <Text style={{fontWeight: 'bold'}}>{product.price} $</Text>
               <View style={styles.cardFooter}>
                  {
                     like ? 
                     <Icon name='favorite' color='red' onPress={() => setLike(false)} /> : 
                     <Icon name='favorite-border' onPress={() => setLike(true)} color='red' />
                  }
                  {
                     inCart ? 
                     <Icon name='shopping-cart' color='#3498DB' onPress={ () => setInCart(false) } /> :
                     <Icon name='add-shopping-cart' onPress={ () => setInCart(true) } color='#3498DB' />
                  }
               </View>
            </View>
            <View style={styles.cardFooter}>
               <View style={{flexDirection:'row', alignItems: 'center', marginTop: 5}}>
                  <Icon name='star' color='#F1C40F' size={25} />
                  <Text> {product.rating_sum ? product.rating_sum/product.rating_count : 0}/5</Text>
               </View>
               <Text>{product.rating_count} Reviews</Text>
            </View>
         </Card>
      </View>
   );
}

const styles = StyleSheet.create({
   card: {
      textAlign: 'center',
      width: 250,
      flexDirection: 'col'
   },
   button: {
      width: 200
   },
   cardFooter: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
   },
   buttonContainer: {
      flex: 1,
      justifyContent: 'space-around'
   }
});
