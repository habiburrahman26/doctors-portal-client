import React from 'react';
import chair from '../../../assets/images/chair.png';

const Banner = () => {
  return (
    <section className="hero min-h-screen bg-base-100 md:bg-banner-chair">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className="max-w-xs md:max-w-lg rounded-lg" alt="" />
        <div>
          <h1 className="text-3xl md:text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white font-bold">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
