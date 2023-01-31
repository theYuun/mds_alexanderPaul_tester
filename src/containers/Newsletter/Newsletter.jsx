import React from 'react';
import { useTranslation } from 'react-i18next';

import './Newsletter.css';

const Newsletter = () => {
    const { t } = useTranslation();
  return (
    <div className='newsletter_root'>
        <div className="newsletter__top">
        <p className="newsletter__top-text">{t('newsletter_join')}</p>
        <input type="email" className="newsletter__top-email" placeholder={t('newsletter_email')} />
        </div>
    </div>
  )
}

export default Newsletter
