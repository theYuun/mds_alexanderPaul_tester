import React, { useState } from 'react'

import images from '../../assets/index';

import { AiOutlineInstagram, AiOutlineMail, AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

import './Navbar.css';

const LinksGB = () => (
  <>
  <li><a href='#'>HOME<div /></a></li>
  <li><a href='#'>PROJECTS<div /></a></li>
  <li><a href='#'>FAQ<div /></a></li>
  <li><a href='#'>BLOG<div /></a></li>
  <li><a href='#'>CONTACT<div /></a></li>
  </>
)

const LinksNL = () => (
  <>
  <li><a href='#'>HOME<div /></a></li>
  <li><a href='#'>PROJEKTEN<div /></a></li>
  <li><a href='#'>FAQ<div /></a></li>
  <li><a href='#'>BLOG<div /></a></li>
  <li><a href='#'>CONTACT<div /></a></li>
  </>
)


/*
let widthCounter = document.getElementById('width-counter');
document.addEventListener('mousemove', () => {widthCounter.innerText = window.innerWidth});
<div id='width-counter' />
*/
const Navbar = () => {
  const [ toggleLanguage, setLanguage ] = useState(true);
  const [ toggleMenu, setMenu ] = useState(false);
  return (
    <nav className='navbar__root'>
      <div onClick={() => { setMenu(!toggleMenu) }} className='navbar__links-button'>
        {
          toggleMenu
          ? <AiOutlineClose />
          : <AiOutlineMenu />
        }
      </div>
      {
        toggleMenu &&
        (
          <div className='navbar__links-dropdown'>
            <img className='navbar__logo-white' src={images.logoWhite} alt='Logo'></img>
            <ul>
            {
              toggleLanguage
              ? <LinksGB />
              : <LinksNL />
            }
            </ul>
          </div>
        )
      }
      <img className='navbar__logo' src={images.logo} alt='logo'></img>
      <ul className='navbar__links'>
      {
        toggleLanguage
        ? <LinksGB />
        : <LinksNL />
      }
      </ul>
      <div className='navbar__spacer' />
      <div className='navbar__language'>
        {
          toggleLanguage
          ? <img id='gb' className='navbar__language-gb' src={images.gb} alt='English' onClick={() => setLanguage(false)}></img>
          : <img id='nl' className='navbar__language-nl' src={images.nl} alt='Dutch' onClick={() => setLanguage(true)}></img>
        }
      </div>
      <div className='navbar__quote'>
        <div onClick={() => {}} className='navbar__quote-button'>Quote</div>
      </div>
    </nav>
  )
}

export default Navbar
