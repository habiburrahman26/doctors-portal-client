const Services = (props) => {
  const { name, slots, setTreatment } = props;

  return (
    <div className="shadow-md py-8 rounded-lg text-center">
      <h3 className="text-xl text-secondary font-semibold mb-1">{name}</h3>
      <p>
        {slots.length > 0 ? (
          <span>{slots[0]}</span>
        ) : (
          <span style={{ color: 'red' }}>No slots avaible</span>
        )}
      </p>
      <p className="mb-4">{slots.length + 1} space avaible</p>
      <label
        htmlFor="booking-modal"
        className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white font-bold modal-button"
        disabled={slots.length === 0}
        onClick={() => {
          setTreatment(props);
        }}
      >
        Book Appoinment
      </label>
    </div>
  );
};

export default Services;
