import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Homepage from '../pages/Homepage';
import ProductsList from '../pages/ProductsList';
import ProductDetail from '../pages/ProductDetail';
import SignUpForm from '../pages/SignUp';
import SignInForm from '../pages/SignIn';
import ShoppingCart from '../pages/ShoppingCart';

function AppRouter() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />}/>
      <Route path='/products' element={<ProductsList />}/>
      <Route path='/products/id' element={<ProductDetail />}/>
      <Route path='/signup' element={<SignUpForm />}/>
      <Route path='/login' element={<SignInForm />}/>
      <Route path='/cart' element={<ShoppingCart />}/>
    </Routes>
  )
}

export default AppRouter