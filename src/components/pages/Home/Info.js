import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';

const Info = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 lg:px-20 pb-24 pt-10">
      <div class="card card-compact md:card-side py-8 px-6 bg-secondary shadow-xl bg-gradient-to-r from-secondary to-primary text-white">
        <figure>
          <img src={clock} className="w-16 h-16" alt="" />
        </figure>
        <div class="card-body">
          <h2 class="card-title ">Opening Hours</h2>
          <p>Lorem Ipsum is simply dummy text of the pri</p>
        </div>
      </div>
      <div class="card card-compact md:card-side py-8 px-6 bg-accent shadow-xl text-white">
        <figure>
          <img src={marker} alt="" />
        </figure>
        <div class="card-body">
          <h2 class="card-title ">Visit our location</h2>
          <p>Lorem Ipsum is simply dummy text of the pri</p>
        </div>
      </div>

      <div class="card card-compact md:card-side py-8 px-6 bg-secondary shadow-xl bg-gradient-to-r from-secondary to-primary text-white">
        <figure>
          <img src={phone} className="w-16 h-16" alt="" />
        </figure>
        <div class="card-body">
          <h2 class="card-title ">Contact us now</h2>
          <p>+929434343</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
