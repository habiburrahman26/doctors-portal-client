import React from 'react';

const Services = (props) => {
  console.log(props);
  return (
    <div className="shadow-md p-4 rounded-md text-center">
      <h3 className="text-2xl text-secondary font-semibold mb-1">
        {props.name}
      </h3>
      <p>{props.slots[0]}</p>
      <p>10 space avaible</p>
    </div>
  );
};

export default Services;
