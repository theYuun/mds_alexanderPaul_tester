import React from 'react';

import DiscoverButton from '../DiscoverButton/DiscoverButton';

import './Product.css';

const Product = ({ image, category, title, url }) => {
  return (
    <div className='product__root'>
      <div>
        <img className='product__image' src={image}></img>
        <span className='product__text'>Discover our {category} collection</span>
        <div className='product__discover-button'>
          <DiscoverButton category={category} title={title} url={url} />
        </div>
      </div>
    </div>
  )
}

export default Product
