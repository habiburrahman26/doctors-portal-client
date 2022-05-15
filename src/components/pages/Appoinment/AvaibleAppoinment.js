import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Services from './Services';

const AvaibleAppoinment = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

  const formattedData = format(date, 'PP');

  useEffect(() => {
    fetch(`http://localhost:5000/avaible?date=${formattedData}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [formattedData]);

  return (
    <div className="py-24">
      {date && (
        <h2 className="text-center text-secondary">
          Available Appointments on {format(date, 'PP')}
        </h2>
      )}
      <div className="pt-10 grid grid-cols-1 lg:grid-cols-3 gap-12 px-3 lg:px-12">
        {services.map((services) => (
          <Services
            key={services._id}
            {...services}
            setTreatment={setTreatment}
          />
        ))}
      </div>

      {treatment && (
        <BookingModal {...treatment} date={date} setTreatment={setTreatment} />
      )}
    </div>
  );
};

export default AvaibleAppoinment;
