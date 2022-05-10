import React from 'react';
import ServiceCard from './ServiceCard';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import treatment from '../../assets/images/treatment.png';

const Services = () => {
  return (
    <div className="pb-24">
      <h3 className="font-bold text-secondary uppercase text-center">
        Our Services
      </h3>
      <h2 className="text-3xl text-center mt-2 mb-16">Services We Provide</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 lg:px-20 mb-10">
        <ServiceCard
          img={fluoride}
          text="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        />
        <ServiceCard
          img={cavity}
          text="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        />
        <ServiceCard
          img={whitening}
          text="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        />
      </div>

      <div class="hero min-h-screen bg-base-100 lg:px-44">
        <div class="hero-content flex-col lg:flex-row gap-28">
          <img
            src={treatment}
            class="max-w-xs md:max-sm rounded-lg"
            alt="treatment"
          />
          <div>
            <h1 class="text-3xl lg:text-5xl font-bold">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p class="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white font-bold">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
