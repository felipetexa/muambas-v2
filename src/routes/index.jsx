import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Homepage from '../pages/Homepage';
import ProductsList from '../pages/ProductsList';
import ProductDetail from '../pages/ProductDetail';

function AppRouter() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />}/>
      <Route path='/products' element={<ProductsList />}/>
      <Route path='/products/id' element={<ProductDetail />}/>
    </Routes>
  )
}

export default AppRouter