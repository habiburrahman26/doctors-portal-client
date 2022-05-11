import React, { useState } from 'react';
import AppoinementBanner from './AppoinementBanner';
import AvaibleAppoinment from './AvaibleAppoinment';
import Footer from '../Shared/Footer';

const AppoinmentPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div>
      <AppoinementBanner
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <AvaibleAppoinment date={selectedDate} />
      <Footer />
    </div>
  );
};

export default AppoinmentPage;
