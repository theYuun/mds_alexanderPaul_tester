import React from 'react'

import { Product } from '../../components';
import getProduct from '../../constants/Products';

import './Products.css';

const Products = ({products=[]}) => {
  const product = (prodVal) => {
    return getProduct('Products', prodVal, false)
  }
  return (
    <div className='products__root'>
      <Product
        image={product(products[0]).image}
        category={product(products[0]).category}
        url={product(products[0]).url} />
      <Product
        image={product(products[1]).image}
        category={product(products[1]).category}
        url={product(products[1]).url} />
    </div>
  )
}

export default Products
