import React, { useState } from 'react';
import AppoinementBanner from './AppoinementBanner';
import AvaibleAppoinment from './AvaibleAppoinment';

const AppoinmentPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div>
      <AppoinementBanner
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <AvaibleAppoinment date={selectedDate} />
    </div>
  );
};

export default AppoinmentPage;
