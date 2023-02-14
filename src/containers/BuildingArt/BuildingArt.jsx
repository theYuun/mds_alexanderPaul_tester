import React from 'react';

import { useTranslation } from 'react-i18next';

import './BuildingArt.css';
import { StartDesigningButton } from '../../components/Buttons/'
import images from '../../assets/index';

const BuildingArt = () => {
    const { t } = useTranslation();
  return (
    <div className='buildingArt__root'>
      <div className='buildingArt__portrait'>
        <img className='buildingArt__portrait-image' src={images.about} alt='Portrait of Alex Du Ry' />
      </div>
      <div className='buildingArt__article'>
        <h1 className='buildingArt__article-heading'>{t('building_heading')}</h1>
        <div className='buildingArt__article-content'>
          <p>Welcome to Alexander Paul!</p>
          <p>My name is Alex Du Ry and I started Alexander Paul because my passion is designing and building bathrooms.</p>
          <p>I started my career as a builder and slowly worked my way up with the ambition to be the best in my field. I have worked in different countries and am an official trainer in the world of high quality bathroom finishes, such as Mortex. All my experience and knowledge now comes together in the Alexander Paul brand and company.</p>
          <p>In our way of building we work with as many natural products as possible or with products that give a beautiful natural look and feel. We believe in delivering high quality at a fair price. Our goal is to take building to the next level, viewing each project as a new work of art that we help our clients design and build.</p>
          <p>If you are considering renovating your bathroom, please do not hesitate to contact us for a free consultation.</p>
          <p>Regards,<br />
          Alex</p>
        </div>
        <div className='buildingArt__article-button'>
          <StartDesigningButton />
        </div>
      </div>
    </div>
  )
}

export default BuildingArt
