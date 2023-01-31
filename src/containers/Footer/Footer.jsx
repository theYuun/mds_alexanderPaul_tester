import React from 'react'

import './Footer.css';
import images from '../../assets/index';
import { Logo } from '../../components/index';
import { BsFacebook } from 'react-icons/bs';
import { AiFillInstagram, AiFillYoutube, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import { FaTiktok, FaIdeal, FaCcPaypal, FaShopify } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { SiKlarna, SiMastercard, SiVisa } from 'react-icons/si';
import { TiPhoneOutline, TiHomeOutline, TiMail, TiSocialInstagram } from 'react-icons/ti';
import { t } from 'i18next';

const Footer = () => {
  return (
    <div className="footer__root" style={{backgroundImage: `url(${images.footerBG})`}}>
      <div className="footer__banner">
        <Logo type={"dark"}  />
      </div>
      <div className="footer__content">
        <div className="footer__content-left">
          <h4>{t('footer_company')}</h4>
          <div className="footer__content-left-list">
            <ul>
              <li>
                <a href="#">{t('footer_home')}</a>
              </li>
              <li>
                <a href="#">{t('footer_projects')}</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">{t('footer_blog')}</a>
              </li>
            </ul>
          </div>
          <div className="footer__content-left-social">
            <IconContext.Provider value = {{className: "footer__content-left-social-icons"}}>
              <a href="#"><BsFacebook /></a>
              <a href="#"><AiFillInstagram /></a>
              <a href="#"><AiFillYoutube /></a>
              <a href="#"><AiFillLinkedin /></a>
              <a href="#"><AiOutlineTwitter /></a>
              <a href="#"><FaTiktok /></a>
            </IconContext.Provider>
          </div>
          <div className='footer__content-left-copyright'>
            &copy; COPYRIGHT 2022 <div /> KVK 55799604 <div /> {t('footer_website')} <a href='#' className='link-mds'>Modern Day Strategy</a>
          </div>
        </div>
        <div className="spacer" />
        <div className="footer__content-right">
          <h4>{t('footer_contact')}</h4>
          <div className='footer__content-right-sections'>
            <div className='footer__content-right-icons'>
              <IconContext.Provider value = {{className: "footer__content-right-icon"}}>
                <TiPhoneOutline />
                <TiHomeOutline />
                <TiMail />
                <TiSocialInstagram />
              </IconContext.Provider>
            </div>
            <div className='footer__content-right-links'>
                <a href='#' className='footer__content-right-link'>+31 (0) 64 918 7745</a>
                <a href='#' className='footer__content-right-link'>Stichts End 36, Ankeveen</a>
                <a href='#' className='footer__content-right-link'>info@alexanderpaul.nl</a>
                <a href='#' className='footer__content-right-link'>@alexanderpaul.nl</a>
            </div>

          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom-left">
          <span className="trustpilot-rating">3.9/5.0</span>
          <img className='trustpilot-image' src={images.trustpilot} alt="" />
          <h1 className="trustpilot-heading">Trustpilot</h1>
          <span className="trustpilot-based">BASED ON {Math.round(Math.random() * 10000).toLocaleString('en')} REVIEWS</span>
        </div>
        <div className="spacer" />
        <div className="footer__bottom-right">
          <IconContext.Provider value = {{ className: "payment-options"}}>
            <SiKlarna />
            <FaIdeal />
            <FaCcPaypal />
            <FaShopify />
            <SiMastercard />
            <SiVisa />
          </IconContext.Provider>
        </div>
      </div>
      {/*
      <img src={images.reference_trustpilot} alt="" className="reference" />
      <img src={images.reference_footer} alt="" className="reference" />
      */}
    </div>
  )
}

export default Footer
