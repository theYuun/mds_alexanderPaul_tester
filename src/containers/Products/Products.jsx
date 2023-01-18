import React from 'react'

import { Product } from '../../components';
import productData from '../../constants/productData.json';
import images from '../../assets'

import './Products.css';

const Products = () => {
  return (
    <div className='products__root'>
      <div className='products__top'>
        <Product image={images.product01} category={productData.product01.category} title={productData.product01.title} url={productData.product01.url} />
        <Product image={images.product02} category={productData.product02.category} title={productData.product02.title} url={productData.product02.url} />
      {/*
        <div className='products__top-straggler'>
          <Product image={images.product03} category={productData.product03.category} title={productData.product03.title} url={productData.product03.url} />
        </div>
      </div>
      <div className='products__bottom'>
        <Product image={images.product03} category={productData.product03.category} title={productData.product03.title} url={productData.product03.url} />
      */}
      </div>
    </div>
  )
}

export default Products
