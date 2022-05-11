import React from 'react';

const TestimonialCard = ({ text, reviewrName, img, name, location }) => {
  return (
    <div className="flex flex-col gap-7 shadow-lg py-6 px-6 rounded-lg">
      <div>{text}</div>
      <div className="flex gap-4 items-center">
        <img src={img} alt="" className='w-12'/>
        <div >
          <p>{name}</p>
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
