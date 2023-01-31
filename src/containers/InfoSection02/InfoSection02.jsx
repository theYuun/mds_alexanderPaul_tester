import React from 'react'
import { useTranslation } from 'react-i18next';

import './InfoSection02.css';

const InfoSection02 = () => {
  const { t } = useTranslation();
  const textSelector = (multiplier) => {
    return (Math.round(Math.random() * multiplier) + 1);
  }
  return (
    <div className='infoSection02__root'>
        <div className='infoSection02__top'>
            <h1 className='infoSection02__heading'>{t(`info_02_top.${textSelector(2)}`)}</h1>
        </div>
        <div className="spacer" />
        <div className="infoSection02__bottom">
            <h2 className='infoSection02__sub-heading'>{t(`info_02_bottom.${textSelector(2)}`)}</h2>
            <div className='spacer' />
            <svg className='infoSection02__icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.099998 17.6" >
                <path d="
                    M 2.4,4.8000002 V 2.5000002 C 2.4,2.4000002 2.4,2.4000002 2.5,2.4000002 H 6.5 C 7.299998,2.4000002 7.999998,2.6000002 8.599998,3.1000002 9.399998,3.7000002 9.799998,4.6000002 9.799998,5.6000002 9.799998,6.2000002 9.599998,6.9000002 9.199998,7.4000002 8.799998,7.9000002 8.799998,8.6000002 9.299998,9.1000002 9.499998,9.3000002 9.799998,9.4000002 10.099998,9.4000002 10.399998,9.4000002 10.699998,9.3000002 10.899998,9.1000002 L 10.999998,9.0000002 C 11.799998,8.1000002 12.199998,6.8000002 12.199998,5.6000002 12.199998,4.3000002 11.799998,3.0000002 10.899998,2.0000002 10.199998,1.1000002 8.799998,0 6.4,0 H 0 V 17.6 H 2.4 V 9.0000002 C 2.4,9.0000002 2.4,8.9000002 2.5,8.9000002 H 2.6 L 9.899998,17.5 9.999998,17.6 H 13.099998 L 7.599998,11.1 Z
                "/>
            </svg>
        </div>
    </div>
  )
}

export default InfoSection02
