import React, { useState, Suspense } from 'react'
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';

import images from '../../assets/index';

import { AiOutlineInstagram, AiOutlineMail, AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { HiMenuAlt4 } from 'react-icons/hi';

import './Navbar.css';

/*
const Links = () => (
  <>
  <li><a href='#'>{t('LINK_BATHROOMS')}<div className='underline' /></a></li>
  <li><a href='#'>{t('LINK_TOTAL_RENO')}<div className='underline' /></a></li>
  </>
)
const LinksNL = () => (
  <>
  <li><a href='#'>BADKAMERS<div className='underline' /></a></li>
  <li><a href='#'>TOTALE RENOVATIE<div className='underline' /></a></li>
</>
)
*/

const Navbar = () => {
  /*
  const [ toggleLanguage, setLanguage ] = useState(true);
  */
 const [ toggleMenu, setMenu ] = useState(false);
 
 const { t } = useTranslation();

  return (
    <nav className='navbar__root'>
      <div onClick={() => { setMenu(!toggleMenu) }} className='navbar__links-button'>
        <HiMenuAlt4 />
      </div>
      {
        toggleMenu &&
        (
          <div className='navbar__dropdown'>
            <div className='navbar__dropdown-top'>
              <div onClick={() => { setMenu(!toggleMenu) }} className='navbar__dropdown-links-button'>
                <AiOutlineClose />
              </div>
              <div className='navbar__dropdown-logo-container'>
                <svg className='navbar__logo' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 188 18" >
                  <path d="
                      M 49.999998,15.2 V 0.2 H 47.699998 V 17.7 H 58.399998 V 15.4 H 50.199998 C 50.099998,15.5 49.999998,15.3 49.999998,15.2 Z
                      M 74.199998,0 C 71.799998,0 69.499998,1 67.799998,2.7000002 66.099998,4.4000002 65.199998,6.7000002 65.199998,9.0000002 65.199998,11.4 66.099998,13.6 67.799998,15.3 69.399998,17 71.799998,18 74.199998,18 76.599998,18 78.899998,17.1 80.599998,15.3 82.299998,13.6 83.199998,11.3 83.199998,9.0000002 83.199998,6.6000002 82.299998,4.4000002 80.599998,2.7000002 78.899998,0.9 76.599998,0 74.199998,0 Z
                      M 78.899998,13.7 C 77.599998,15 75.899998,15.7 74.199998,15.7 72.499998,15.7 70.799998,15 69.499998,13.7 68.199998,12.4 67.499998,10.8 67.499998,9.0000002 67.499998,7.2000002 68.199998,5.6000002 69.499998,4.3000002 70.699998,3.0000002 72.399998,2.3000002 74.199998,2.3000002 75.899998,2.3000002 77.699998,3.0000002 78.899998,4.3000002 80.099998,5.6000002 80.799998,7.2000002 80.799998,9.0000002 80.899998,10.8 80.199998,12.4 78.899998,13.7 Z
                      M 28.799998,15.2 V 10.4 C 28.799998,10.3 28.899998,10.2 28.999998,10.2 H 36.899998 V 7.9000002 H 28.999998 C 28.899998,7.9000002 28.799998,7.8000002 28.799998,7.7000002 V 2.9000002 C 28.799998,2.8000002 28.899998,2.7000002 28.999998,2.7000002 H 37.099998 V 0.4 H 26.499998 V 17.9 H 37.199998 V 15.6 H 28.999998 C 28.899998,15.5 28.799998,15.3 28.799998,15.2 Z
                      M 8.2,13.2 C 8.2,13.3 8.1,13.3 8,13.3 7.9,13.3 7.8,13.3 7.8,13.2 L 2.6,0.2 H 0 L 7.1,17.7 H 8.8 L 15.9,0.2 V 0.1 H 13.4 Z
                      M 161.9,2.5000002 H 167.1 C 167.2,2.5000002 167.3,2.6000002 167.3,2.7000002 V 17.7 H 169.6 V 2.7000002 C 169.6,2.6000002 169.7,2.5000002 169.8,2.5000002 H 175 V 0.2 H 161.8 V 2.5000002 Z
                      M 95.600002,5.0000002 V 2.7000002 C 95.600002,2.6000002 95.600002,2.6000002 95.700002,2.6000002 H 99.700002 C 100.5,2.6000002 101.2,2.8000002 101.8,3.3000002 102.6,3.9000002 103,4.8000002 103,5.8000002 103,6.4000002 102.8,7.1000002 102.4,7.6000002 102,8.1000002 102,8.8000002 102.5,9.3000002 102.7,9.5000002 103,9.6000002 103.3,9.6000002 103.6,9.6000002 103.9,9.5000002 104.1,9.3000002 L 104.2,9.2000002 C 105,8.3000002 105.4,7.0000002 105.4,5.8000002 105.4,4.5000002 105,3.2000002 104.1,2.2000002 103.4,1.3000002 102,0.2 99.600002,0.2 H 93.200002 V 17.8 H 95.600002 V 9.2000002 C 95.600002,9.2000002 95.600002,9.1000002 95.700002,9.1000002 H 95.800002 L 103.1,17.7 103.2,17.8 H 106.3 L 100.8,11.3 Z
                      M 185.6,17.8 H 188 V 0.2 H 185.6 Z
                      M 138.1,2.5000002 H 143.3 C 143.4,2.5000002 143.5,2.6000002 143.5,2.7000002 V 17.7 H 145.8 V 2.7000002 C 145.8,2.6000002 145.9,2.5000002 146,2.5000002 H 151.2 V 0.2 H 138 V 2.5000002 Z
                      M 119.2,15.4 C 119.2,15.4 119.1,15.3 119.1,15.2 V 10.4 C 119.1,10.3 119.2,10.2 119.3,10.2 H 127.2 V 7.9000002 H 119.3 C 119.2,7.9000002 119.1,7.8000002 119.1,7.7000002 V 2.9000002 C 119.1,2.8000002 119.2,2.7000002 119.3,2.7000002 H 127.3 V 0.4 H 116.7 V 17.9 H 127.4 V 15.6 H 119.3 C 119.3,15.5 119.3,15.4 119.2,15.4 Z
                  "/>
                </svg>
              </div>
            </div>
            <ul className='navbar__dropdown-links-list'>
              <li><a href='#'>{t('navbar_bathrooms')}<div className='underline' /></a></li>
              <li><a href='#'>{t('navbar_total_reno')}<div className='underline' /></a></li>
            {/*
              <Links />
              toggleLanguage
              ? <LinksGB />
              : <LinksNL />
            */}
            </ul>
          </div>
        )
      }
      <div className='navbar__logo-container'>
        <svg className='navbar__logo' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 188 18" >
          <path d="
              M 49.999998,15.2 V 0.2 H 47.699998 V 17.7 H 58.399998 V 15.4 H 50.199998 C 50.099998,15.5 49.999998,15.3 49.999998,15.2 Z
              M 74.199998,0 C 71.799998,0 69.499998,1 67.799998,2.7000002 66.099998,4.4000002 65.199998,6.7000002 65.199998,9.0000002 65.199998,11.4 66.099998,13.6 67.799998,15.3 69.399998,17 71.799998,18 74.199998,18 76.599998,18 78.899998,17.1 80.599998,15.3 82.299998,13.6 83.199998,11.3 83.199998,9.0000002 83.199998,6.6000002 82.299998,4.4000002 80.599998,2.7000002 78.899998,0.9 76.599998,0 74.199998,0 Z
              M 78.899998,13.7 C 77.599998,15 75.899998,15.7 74.199998,15.7 72.499998,15.7 70.799998,15 69.499998,13.7 68.199998,12.4 67.499998,10.8 67.499998,9.0000002 67.499998,7.2000002 68.199998,5.6000002 69.499998,4.3000002 70.699998,3.0000002 72.399998,2.3000002 74.199998,2.3000002 75.899998,2.3000002 77.699998,3.0000002 78.899998,4.3000002 80.099998,5.6000002 80.799998,7.2000002 80.799998,9.0000002 80.899998,10.8 80.199998,12.4 78.899998,13.7 Z
              M 28.799998,15.2 V 10.4 C 28.799998,10.3 28.899998,10.2 28.999998,10.2 H 36.899998 V 7.9000002 H 28.999998 C 28.899998,7.9000002 28.799998,7.8000002 28.799998,7.7000002 V 2.9000002 C 28.799998,2.8000002 28.899998,2.7000002 28.999998,2.7000002 H 37.099998 V 0.4 H 26.499998 V 17.9 H 37.199998 V 15.6 H 28.999998 C 28.899998,15.5 28.799998,15.3 28.799998,15.2 Z
              M 8.2,13.2 C 8.2,13.3 8.1,13.3 8,13.3 7.9,13.3 7.8,13.3 7.8,13.2 L 2.6,0.2 H 0 L 7.1,17.7 H 8.8 L 15.9,0.2 V 0.1 H 13.4 Z
              M 161.9,2.5000002 H 167.1 C 167.2,2.5000002 167.3,2.6000002 167.3,2.7000002 V 17.7 H 169.6 V 2.7000002 C 169.6,2.6000002 169.7,2.5000002 169.8,2.5000002 H 175 V 0.2 H 161.8 V 2.5000002 Z
              M 95.600002,5.0000002 V 2.7000002 C 95.600002,2.6000002 95.600002,2.6000002 95.700002,2.6000002 H 99.700002 C 100.5,2.6000002 101.2,2.8000002 101.8,3.3000002 102.6,3.9000002 103,4.8000002 103,5.8000002 103,6.4000002 102.8,7.1000002 102.4,7.6000002 102,8.1000002 102,8.8000002 102.5,9.3000002 102.7,9.5000002 103,9.6000002 103.3,9.6000002 103.6,9.6000002 103.9,9.5000002 104.1,9.3000002 L 104.2,9.2000002 C 105,8.3000002 105.4,7.0000002 105.4,5.8000002 105.4,4.5000002 105,3.2000002 104.1,2.2000002 103.4,1.3000002 102,0.2 99.600002,0.2 H 93.200002 V 17.8 H 95.600002 V 9.2000002 C 95.600002,9.2000002 95.600002,9.1000002 95.700002,9.1000002 H 95.800002 L 103.1,17.7 103.2,17.8 H 106.3 L 100.8,11.3 Z
              M 185.6,17.8 H 188 V 0.2 H 185.6 Z
              M 138.1,2.5000002 H 143.3 C 143.4,2.5000002 143.5,2.6000002 143.5,2.7000002 V 17.7 H 145.8 V 2.7000002 C 145.8,2.6000002 145.9,2.5000002 146,2.5000002 H 151.2 V 0.2 H 138 V 2.5000002 Z
              M 119.2,15.4 C 119.2,15.4 119.1,15.3 119.1,15.2 V 10.4 C 119.1,10.3 119.2,10.2 119.3,10.2 H 127.2 V 7.9000002 H 119.3 C 119.2,7.9000002 119.1,7.8000002 119.1,7.7000002 V 2.9000002 C 119.1,2.8000002 119.2,2.7000002 119.3,2.7000002 H 127.3 V 0.4 H 116.7 V 17.9 H 127.4 V 15.6 H 119.3 C 119.3,15.5 119.3,15.4 119.2,15.4 Z
          "/>
        </svg>
      </div>
      <ul className='navbar__links'>
        <li><a href='#'>{t('navbar_bathrooms')}<div className='underline' /></a></li>
        <li><a href='#'>{t('navbar_total_reno')}<div className='underline' /></a></li>
      {/*
        <Links />
        toggleLanguage
        ? <LinksGB />
        : <LinksNL />
      */}
      </ul>
      <div className='spacer navbar__spacer' />
      <div className='navbar__language navbar__content-centering'>
        <div className='navbar__language-chosen navbar__content-centering'>{i18n.language === 'en' ? 'EN' : 'NL'}<img className='navbar__language-chosen-flag' id={i18n.language === 'en' ? 'en' : 'nl'} src={i18n.language === 'en' ? images.en : images.nl} alt={i18n.language === 'en' ? 'English' : 'Dutch'} /></div>
        {/*
          toggleLanguage
          ? <Language language='en'/>
          : <Language language='nl'/>
        */}
        <div className='navbar__language-selector-tab navbar__content-centering'>
          <div onClick={() => {i18n.changeLanguage('en')}} >EN<img className='navbar__language-img' src={images.en} alt='English'/><div className="underline" /></div>
          <hr />
          <div onClick={() => {i18n.changeLanguage('nl')}} >NL<img className='navbar__language-img' src={images.nl} alt='Dutch'/><div className="underline" /></div>
          {/*
          <div onClick={() => setLanguage(true)} >EN<img className='navbar__language-img' src={images.en} alt='English'/><div className="underline" /></div>
          <hr />
          <div onClick={() => setLanguage(false)} >NL<img className='navbar__language-img' src={images.nl} alt='Dutch'/><div className="underline" /></div>
          */}
        </div>
      </div>
      <div className="navbar__quote navbar__content-centering">
        <a href='#' onClick={() => {
          document.getElementById('quote__root').classList.toggle('quote__show');
          document.getElementById('quote__root').classList.toggle('quote__hide');
          }} className='navbar__quote-button'>{t('navbar_quote')}<div className='underline' /></a>
      </div>
      {/*
      <img src={images.reference_navbar_mobile} className='reference'></img>
      <img src={images.reference_navbar_smaller} className='reference'></img>
      <img src={images.reference_navbar_dd} className='reference_dd'></img>
      <img src={images.reference_navbar_dd_smaller} className='reference_dd'></img>
      */}
    </nav>
  )
}

export default Navbar
