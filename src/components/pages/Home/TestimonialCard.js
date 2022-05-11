import React from 'react';

const TestimonialCard = ({ text, img, name, location }) => {
  return (
    <div className="flex flex-col gap-7 shadow-lg py-6 px-6 rounded-lg">
      <div>{text}</div>
      <div className="flex gap-4 items-center">
        <div className="avatar">
          <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={img} alt="" />
          </div>
        </div>
        <div>
          <p className='font-semibold'>{name}</p>
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
