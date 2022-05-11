import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppoinementBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <div className="hero min-h-screen bg-base-100 bg-banner-chair">
      <div className="hero-content flex-col lg:gap-24 gap-10 lg:flex-row-reverse">
        <img src={chair} className="max-w-sm lg:max-w-lg rounded-lg" alt="" />
        <div>
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
          />
        </div>
      </div>
    </div>
  );
};

export default AppoinementBanner;
