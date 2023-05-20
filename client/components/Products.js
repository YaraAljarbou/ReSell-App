import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import axios from 'axios';

import ProductCard from './ProductCard';

export default function Products({ filter, filterType, currentUser, setCurrentUser }) {

   const [products, setProducts] = useState([]);
   
   useEffect( () => { 
      axios.get('http://localhost:8000/api/products')
         .then(res => setProducts(res.data))
         .catch(err => console.log(err));
   }, [products]);

   const productList = products.filter(product => 
      product.seller !== currentUser.name && product.category.toLowerCase().includes(filter.toLowerCase())).map((product, index) => 
   <ProductCard key={index} product={product}  currentUser={currentUser} setCurrentUser={setCurrentUser} />)

   return (
      <View style={styles.container}>
         { 
            filterType === 'name' ? 
            products.filter(product => 
               product.seller !== currentUser.name && product.name.toLowerCase().includes(filter.toLowerCase()))
               .map((product, index) => 
               <ProductCard key={index} product={product}  currentUser={currentUser} setCurrentUser={setCurrentUser} />) : ''
         }
         {
            filterType === 'category' ? 
            products.filter(product => 
               product.seller !== currentUser.name && product.category.toLowerCase().includes(filter.toLowerCase()))
               .map((product, index) => 
               <ProductCard key={index} product={product}  currentUser={currentUser} setCurrentUser={setCurrentUser} />) : ''
         }
         {
            filterType === 'seller' ? 
            products.filter(product => 
               product.seller !== currentUser.name && product.seller.toLowerCase().includes(filter.toLowerCase()))
               .map((product, index) => 
               <ProductCard key={index} product={product}  currentUser={currentUser} setCurrentUser={setCurrentUser} />) : ''
         }
      </View>
         
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      flexWrap: 'wrap',
      flexDirection: 'row',
      width: '100%',
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
