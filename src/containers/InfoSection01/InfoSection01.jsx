import React from 'react'
import { useTranslation } from 'react-i18next';

import './InfoSection01.css';

const InfoSection01 = () => {
  const { t } = useTranslation();
  return (
    <div className='infoSection01__root'>
        <h1 className='infoSection01__heading'>{t('info_01')}</h1>
    </div>
  )
}

export default InfoSection01
