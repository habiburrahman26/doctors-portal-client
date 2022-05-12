import React from 'react';

const ServiceCard = ({ img, text }) => {
  return (
    <div className="card bg-base-100 shadow-lg py-4">
      <figure>
        <img
          src={img}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
