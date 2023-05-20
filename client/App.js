import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Router } from '@reach/router'
// my components
import ProductForm from './components/ProductForm';
import ShoppingCart from './components/ShoppingCart';
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import UserProducts from './components/UserProducts';
import Favorites from './components/Favorites';

// change default theme for react native paper  
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
    underlineColor:'transparent'
  },
};

export default function App() {

  const loggedUser = () => JSON.parse(window.localStorage.getItem("loggedUser")) || '';
  const [currentUser, setCurrentUser] = useState(loggedUser)

  useEffect(() => {
    localStorage.setItem("loggedUser", JSON.stringify(currentUser));
  }, [currentUser])

  const [filter, setFilter] = useState('');
  const [filterType, setFilterType] = useState('name');

  return (
    <PaperProvider theme={theme}>
      <Navbar 
        filter={filter} setFilter={setFilter} 
        filterType={filterType} setFilterType={setFilterType}
        currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <View>
        <Router>
          <LoginForm path='/' currentUser={currentUser} setCurrentUser={setCurrentUser} />
          <Products filter={filter} filterType={filterType} path='/products' currentUser={currentUser} setCurrentUser={setCurrentUser} />
          <ProductForm path='/products/new' currentUser={currentUser} setCurrentUser={setCurrentUser} />
          <ShoppingCart path='/shopping_cart' currentUser={currentUser} setCurrentUser={setCurrentUser} />
          <Favorites path='/favorites' currentUser={currentUser} setCurrentUser={setCurrentUser} />
          <ProductDetail path='/products/:name' currentUser={currentUser} setCurrentUser={setCurrentUser} />
          <UserProducts path='/user_products' currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </Router>
      </View>
      
        
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 600,
    marginLeft: '30%'
  },
});
