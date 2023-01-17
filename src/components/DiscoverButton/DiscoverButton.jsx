import React from 'react'

import { AiOutlineArrowRight } from 'react-icons/ai';

import './DiscoverButton.css';

const DiscoverButton = ({ category, title, url }) => {
  return (
    <a href={url} className='discover-button__root'>
        <div className='discover-button__description'>
          <h4>{ category }</h4>
          <h1>Discover { title }</h1>
        </div>
        <div className='discover-button__navigate'><AiOutlineArrowRight />
          <div className='discover-button__overlay'><AiOutlineArrowRight /></div>
        </div>
      </a>
  )
}

export default DiscoverButton
