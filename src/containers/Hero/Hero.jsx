import React from 'react'

import { DiscoverButton } from '../../components';

import './Hero.css';

const Hero = ({image, category, title, url}) => {
  return (
    <div className='hero__root'>
      <img className='hero__pic' src={image} alt='Most popular'></img>
      <div className='hero__discover-button'>
        <DiscoverButton category={category} title={title} url={url} />
      </div>
    </div>
  )
}

export default Hero
