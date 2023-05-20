import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Picker  } from 'react-native';
import { Appbar  } from 'react-native-paper';
import { SearchBar, Icon, Badge } from 'react-native-elements';
import { navigate, Link } from '@reach/router';

export default function Navebar({ filter, setFilter, filterType, setFilterType, currentUser,  setCurrentUser }) {

   const logout = () => {
      navigate('/');
      localStorage.removeItem('loggedUser');
      setCurrentUser('');
   }
   return (
      <Appbar style={styles.container}>
         <TouchableOpacity onPress={() => navigate('/products')}>
            <Image
               style={styles.logo}
               source={require('./img/Logo.png')}
            />
         </TouchableOpacity> 
         {
            currentUser ?
            <>
               <Link style={{ textDecoration: 'none', color: 'white' }} to="/products">Home</Link>
               <Link style={{ textDecoration: 'none', color: 'white' }} to="/user_products">My Products</Link>
               <Link style={{ textDecoration: 'none', color: 'white' }} to="/products/new">Add a New Product</Link>
               <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Picker
                     style={{ height: 50, width: 150, backgroundColor:'#DCDCE1', borderRadius: 10, borderWidth: 0 }}
                     selectedValue={filterType}
                     onValueChange={(itemValue) => setFilterType(itemValue)}
                  >
                     <Picker.Item label="Name" value="name" />
                     <Picker.Item label="Category" value="category" />
                     <Picker.Item label="Seller" value="seller" />
                  </Picker>
                  <SearchBar
                     placeholder="Search"
                     lightTheme={true}
                     containerStyle={{backgroundColor: 'transparent'}}
                     platform="ios"
                     onChangeText={(value) => setFilter(value)}
                     value={filter}
                  />

               </View>
               <View style={styles.rightContainer}>
                     <Text style={styles.text}>Hello {currentUser.name} |</Text>
                     <Icon name='logout' color='white' style={styles.logout} onPress={ logout } />  
                  <View>
                     <Icon name='shopping-cart' color='white' size={50} onPress={() => navigate('/shopping_cart')} />
                     <Badge value={currentUser.cart.length} status="error" containerStyle={{ position: 'absolute', top: -4, right: -4 }} />
                  </View>
                  <View>
                     <Icon name='favorite' color='white' size={50} onPress={() => navigate('/favorites')} />
                     <Badge value={currentUser.likes.length} status="error" containerStyle={{ position: 'absolute', top: -4, right: -4 }} />
                  </View>
               </View>
            </>
            : ''
         }
      </Appbar>
   );
}

const styles = StyleSheet.create({
   container: {
      height: 90,
      flexDirection: 'row',
      justifyContent: 'space-between'
   },
   logo: {
      width: 200,
      height: 80,
   },
   text: {
      fontSize: 20,
      fontWeight: "bold",
      color: 'white'
   },
   rightContainer: {
      flexDirection: 'row',
      marginRight: 10,
      justifyContent: 'space-around',
      width: 300,
      alignItems: 'center'
   },
   logout: {
      marginTop: 8,
      marginLeft: 0
   }
});
