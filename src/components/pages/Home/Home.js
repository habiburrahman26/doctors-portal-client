import React from 'react';
import Services from '../../Services/Services';
import Footer from '../Shared/Footer';
import Appoiement from './Appoiement';
import Banner from './Banner';
import ContactUs from './ContactUs';
import Info from './Info';
import Testimonial from './Testimonial';

const Home = () => {
  return (
    <>
      <Banner />
      <Info />
      <Services />
      <Appoiement />
      <Testimonial />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
