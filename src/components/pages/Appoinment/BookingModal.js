import axios from 'axios';
import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const BookingModal = ({ _id, name, date, slots, setTreatment }) => {
  const [user] = useAuthState(auth);

  const submitHandler = (e) => {
    e.preventDefault();

    const slot = e.target.slot.value;
    const phoneNumber = e.target.phoneNumber.value;
    const formattedData = format(date, 'PP');

    const booking = {
      treatmentId: _id,
      treatment: name,
      slot: slot,
      patient: user?.email,
      patientName: user?.displayName,
      phone: phoneNumber,
      date: formattedData,
    };

    axios.post('http://localhost:5000/booking', booking).then(({ data }) => {
      if (data.success) {
        toast.success(`Appoinment is set on${formattedData} slot${slot}`);
      } else {
        const { date, slot } = data?.exists;
        toast.error(`Already have  an appoinment on ${date} slot ${slot}`);
      }
    });
    setTreatment(null);
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-semibold text-lg">{name}</h3>
          <form
            onSubmit={submitHandler}
            className="flex flex-col gap-3 items-center pt-8"
          >
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              value={format(date, 'PP')}
              disabled
              readOnly
            />
            <select
              name="slot"
              className="select select-bordered w-full max-w-xs"
            >
              {slots.map((slot, index) => (
                <option key={index}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="input input-bordered w-full max-w-xs"
              value={user?.displayName}
              disabled
              readOnly
            />
            <input
              type="number"
              name="phoneNumber"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs"
              value={user?.email}
              disabled
              readOnly
            />
            <button className="btn bg-accent text-white mt-2 py-4 w-full max-w-xs">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
