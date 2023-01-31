import React, { Suspense, useState } from 'react'
import { Formik } from 'formik';
import ReactDOM from 'react-dom';

import { Hero, InfoSection01, InfoSection02, Services, Products, Quote, Newsletter, Footer } from './containers';
import { Navbar } from './components';

import images from '../src/assets';
import getProduct from '../src/constants/Products.js';

import './App.css';

const App = () => {
  return (
    <Suspense fallback="loading">
      <Navbar />
      {/*
    */}
      <Hero
        image={getProduct('Hero', 0, true).image}
        category={getProduct('Hero', 0, true).category}
        url={getProduct('Hero', 0, true).url} />
      <InfoSection01 />
      <Products
        products={[0,2]} />
      <InfoSection02 />
      <Services />
      <Quote />
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
