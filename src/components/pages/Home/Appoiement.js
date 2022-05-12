import React from 'react';
import doctor from '../../../assets/images/doctor.png';

const Appoiement = () => {
  return (
    <section className="hero bg-accent bg-appointment mb-24">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={doctor}
          className="hidden md:flex max-w-xs lg:max-w-2xl rounded-lg mt-[-150px] -mb-4 flex-end"
          alt=""
        />
        <div className='px-4'>
          <h1 className='font-bold uppercase text-secondary'>
            Appointment
          </h1>
          <h3 className="text-3xl lg:text-5xl font-bold text-white">
            Make an appointment Today
          </h3>
          <p className="py-6 text-white">
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
    </section>
  );
};

export default Appoiement;
