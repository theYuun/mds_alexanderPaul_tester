import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom';

import { HomePage, ProductsPage } from './pages/index';

import { Quote, Newsletter, Footer } from './containers';
import { Navbar } from './components';

import images from '../src/assets';
import getProduct from '../src/constants/Products.js';

import './App.css';

const App = () => {
  return (
    <Suspense fallback="loading">
      <Navbar />
      <Quote />
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='products' element={ <ProductsPage /> } />
      </Routes>
      {/*
      <Hero
        image={getProduct('Hero', 0, true).image}
        category={getProduct('Hero', 0, true).category}
        url={getProduct('Hero', 0, true).url} />
      <InfoSection01 />
      <Products
        products={[1,5]} />
      <InfoSection02 />
      <Services images={[2, 5, 1]} />
    */}
      <Newsletter />
      <Footer />
      {/*
      <img className='reference' src={images.ref} />
      <img className='reference' src={images.ref_big} />
    <img className='reference' src={images.ref_m} />
    */}
    </Suspense>
  )
};

export default App;
