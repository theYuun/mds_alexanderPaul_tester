import React from 'react'
import { useTranslation } from 'react-i18next';

import './StartDesigningButton.css';
import { ToggleQuote } from '../../../containers/Quote/Quote';

const StartDesigningButton = () => {
    const { t } = useTranslation();
    return (
        <a className='start-design-button__root' onClick={ToggleQuote}>{t('start_design_button')}<div className='start-design-button__arrow'>&gt;</div></a>
    )
}

export default StartDesigningButton
