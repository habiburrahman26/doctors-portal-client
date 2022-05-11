import React from 'react';
import TestimonialCard from './TestimonialCard';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';

const Testimonial = () => {
  return (
    <div className=" px-2 lg:px-12 pb-24">
      <h3 className="font-bold uppercase text-secondary">Testimonial</h3>
      <p className="text-3xl">What Our Patients Says</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-2 lg:px-32 pt-16">
        <TestimonialCard
          img={people1}
          text="It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
          name="Winson Herry"
          location="California"
        />
        <TestimonialCard
          img={people2}
          text="It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
          name="Winson Herry"
          location="California"
        />
        <TestimonialCard
          img={people3}
          text="It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
          name="Winson Herry"
          location="California"
        />
      </div>
    </div>
  );
};

export default Testimonial;
