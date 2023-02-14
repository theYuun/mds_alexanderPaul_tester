import React from 'react';

import { Hero, BuildingArt, InfoSection01, InfoSection02, Services, Products, Trustpilot, Process, ReadyToStart } from '../../containers/index';

import getProduct from '../../constants/Products';

import './HomePage.css';

const HomePage = () => {
  return (
    <div>
      <Hero
        image={getProduct('Hero', 0, true).image}
        category={getProduct('Hero', 0, true).category}
        url={getProduct('Hero', 0, true).url} />
      <BuildingArt />
      <InfoSection01 />
      <Products
        products={[1,5]} />
      <InfoSection02 />
      <Services images={[2, 5, 1]} />
      <Process />
    </div>
  )
}

export default HomePage
