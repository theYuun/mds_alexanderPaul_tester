import React from 'react'

import { Header, Hero, InfoSection01, Products, Quote, Footer } from './containers';
import { Navbar } from './components';

import images from '../src/assets';
import productData from '../src/constants/productData.json'

import './App.css';

const App = () => (
  <div>
      <Navbar />
      <Header />
      <Hero image={images.product23} category={productData.product01.category} title={productData.product01.title} url={productData.product01.url} />
      <InfoSection01 />
      <Products />
      {/*
      <Quote />
    */}
      <Footer />
  </div>
);

export default App;
