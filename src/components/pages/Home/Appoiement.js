import React from 'react';
import doctor from '../../../assets/images/doctor.png';

const Appoiement = () => {
  return (
    <div class="hero bg-accent bg-appointment mb-24">
      <div class="hero-content flex-col lg:flex-row">
        <img
          src={doctor}
          class="hidden md:flex max-w-xs lg:max-w-2xl rounded-lg mt-[-150px] -mb-4 flex-end"
          alt=""
        />
        <div>
          <h1 className='font-bold uppercase text-secondary'>
            Appointment
          </h1>
          <h3 class="text-3xl lg:text-5xl font-bold text-white">
            Make an appointment Today
          </h3>
          <p class="py-6 text-white">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white font-bold">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Appoiement;
