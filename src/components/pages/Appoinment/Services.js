import React from 'react';
import Button from '../Shared/Button';

const Services = (props) => {
  console.log(props);
  return (
    <div className="shadow-md py-8 rounded-lg text-center">
      <h3 className="text-xl text-secondary font-semibold mb-1">
        {props.name}
      </h3>
      <p>{props.slots[0]}</p>
      <p className='mb-4'>10 space avaible</p>
      <Button text="book appoinment" />
    </div>
  );
};

export default Services;
