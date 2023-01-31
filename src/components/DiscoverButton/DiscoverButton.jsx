import React from 'react'
import { useTranslation } from 'react-i18next';

import { AiOutlineArrowRight } from 'react-icons/ai';

import './DiscoverButton.css';

const DiscoverButton = ({ category, url }) => {
  const { t } = useTranslation();
  return (
    <a href={url} className='discover-button__root'>
        <div className='discover-button__description'>
          <h4>{t(category)}</h4>
          <h1>{t('discover_more')}</h1>
        </div>
        <div className='discover-button__navigate'><AiOutlineArrowRight />
          <div className='discover-button__overlay'><AiOutlineArrowRight /></div>
        </div>
      </a>
  )
}

export default DiscoverButton
