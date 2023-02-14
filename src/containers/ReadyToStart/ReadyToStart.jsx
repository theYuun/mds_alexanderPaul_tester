import React from 'react';

import i18n from '../../i18n';

import { DiscoverButton } from '../../components';
import images from '../../assets/index_products'
import './ReadyToStart.css';

const ReadyToStart = ( product ) => {
  return (
    <div className='rts__root'>
        <img className='rts__image' src={images.hero[product]} alt='' />
        <h1 className='rts__heading'></h1>
        <DiscoverButton />
    </div>
  )
}

export default ReadyToStart
