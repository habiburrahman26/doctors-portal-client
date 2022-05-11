import React from 'react';

const ContactUs = () => {
  return (
    <section className="bg-appointment py-10 mb-24">
      <h3 className="font-bold uppercase text-secondary text-center">
        Contact Us
      </h3>
      <p className="text-3xl text-center text-white font-normal mt-2">
        Stay connected with us
      </p>
      <form className="flex flex-col items-center justify-center gap-4 mt-8 px-8">
        <input
          type="text"
          placeholder="Email Address"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Subjects"
          className="input input-bordered w-full max-w-xs"
        />
        <textarea
          className="textarea w-full max-w-xs"
          placeholder="Your message"
          rows="4"
        ></textarea>
        <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white font-bold">
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactUs;
