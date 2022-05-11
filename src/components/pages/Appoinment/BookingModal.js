import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ _id, name, date, slots }) => {
  const submitHandler = (e) => {
    e.preventDefault();

    const slot = e.target.slot.value;
    const name = e.target.name.value;
    const phoneNumber = e.target.phoneNumber.value;
    const email = e.target.email.value;

    console.log(_id, slot, name, phoneNumber, email);
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            for="booking-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-semibold text-lg">{name}</h3>
          <form
            onSubmit={submitHandler}
            className="flex flex-col gap-3 items-center pt-8"
          >
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full max-w-xs"
              value={format(date, 'PP')}
              disabled
              readOnly
            />
            <select name="slot" class="select select-bordered w-full max-w-xs">
              {slots.map((slot,index) => (
                <option key={index}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="number"
              name="phoneNumber"
              placeholder="Phone Number"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              class="input input-bordered w-full max-w-xs"
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
