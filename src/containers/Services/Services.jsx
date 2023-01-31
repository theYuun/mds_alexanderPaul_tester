import React from 'react'
import { useTranslation } from 'react-i18next';

import './Services.css';
import index_products from '../../assets/index_products';

const Services = () => {
  const { t } = useTranslation();
  const textSelector = (multiplier) => {
    let val = Math.round(Math.random() * multiplier) + 1;
    return val;
  }
  return (
    <div className='services__root'>
      <div className='services__image-container services__image-container-01'><img src={index_products.products[0]} alt="Services image" className="services__image services__image-01" /></div>
      <div className='services__image-container services__image-container-02'><img src={index_products.products[1]} alt="Services image" className="services__image services__image-02" /></div>
      <div className='services__image-container services__image-container-03'><img src={index_products.products[2]} alt="Services image" className="services__image services__image-03" /></div>
      <div className="services__text-container">
        <h1 className='services__text-prompt'>{t(`info_02_top.${textSelector(2)}`)}</h1>
        <div className='spacer' />
        <a className='services__text-button' href='#'>{t('services_button')}<div className='services__text-button-arrow'>&gt;</div></a>
      </div>
    </div>
  )
}

export default Services
