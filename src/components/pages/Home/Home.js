import React from 'react';
import Services from '../../Services/Services';
import Appoiement from './Appoiement';
import Banner from './Banner';
import Info from './Info';

const Home = () => {
  return (
    <>
      <Banner />
      <Info />
      <Services />
      <Appoiement />
    </>
  );
};

export default Home;
