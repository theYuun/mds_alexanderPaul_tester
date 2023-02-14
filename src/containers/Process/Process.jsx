import React from 'react'
import { useTranslation } from 'react-i18next';

import './Process.css';

function toggleSections(open)
{
  document.querySelector('.process__content-section-info-open').classList.remove('process__content-section-info-open');
  open.classList.add('process__content-section-info-open')
}

const Process = () => {
  const { t } = useTranslation();
  return (
    <div className='process__root'>
      <h1 className='process__heading'>{t('process_heading')}</h1>
      <div className='process__content'>
        <div className='process__content-section'>
          <div className='process__content-section-header' onClick={() => {
            toggleSections(document.querySelector('.process__content-estimate'));
          }}>
            <h3 className='process__content-section-heading'>{t('process_estimate_heading').toUpperCase()}</h3>
            <span>+</span>
          </div>
          <div className='process__content-estimate process__content-section-info process__content-section-info-open'>
            {t('process_estimate_info')}
          </div>
        </div>
        <div className='process__content-section'>
          <div className='process__content-section-header' onClick={() => {
            toggleSections(document.querySelector('.process__content-dimensions'));
          }}>
            <h3 className='process__content-section-heading'>{t('process_dimensions_heading').toUpperCase()}</h3>
            <span>+</span>
          </div>
          <div className='process__content-dimensions process__content-section-info'>
            {t('process_dimensions_info')}
          </div>
        </div>
        <div className='process__content-section'>
          <div className='process__content-section-header' onClick={() => {
            toggleSections(document.querySelector('.process__content-quote'));
          }}>
            <h3 className='process__content-section-heading'>{t('process_quote_heading').toUpperCase()}</h3>
            <span>+</span>
          </div>
          <div className='process__content-quote process__content-section-info'>
            {t('process_quote_info')}
          </div>
        </div>
        <div className='process__content-section'>
          <div className='process__content-section-header' onClick={() => {
            toggleSections(document.querySelector('.process__content-designs'));
          }}>
            <h3 className='process__content-section-heading'>{t('process_designs_heading').toUpperCase()}</h3>
            <span>+</span>
          </div>
          <div className='process__content-designs process__content-section-info'>
            {t('process_designs_info')}
          </div>
        </div>
        <div className='process__content-section'>
          <div className='process__content-section-header' onClick={() => {
            toggleSections(document.querySelector('.process__content-renovation'));
          }}>
            <h3 className='process__content-section-heading'>{t('process_renovation_heading').toUpperCase()}</h3>
            <span>+</span>
          </div>
          <div className='process__content-renovation process__content-section-info'>
            {t('process_renovation_info')}
          </div>
        </div>
        <div className='process__content-section'>
          <div className='process__content-section-header' onClick={() => {
            toggleSections(document.querySelector('.process__content-enjoy'));
          }}>
            <h3 className='process__content-section-heading'>{t('process_enjoy_heading').toUpperCase()}</h3>
            <span>+</span>
          </div>
          <div className='process__content-enjoy process__content-section-info'>
            {t('process_enjoy_info')}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Process
