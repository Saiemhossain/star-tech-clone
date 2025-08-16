import { MapPin, Search } from 'lucide-react';

const Testimoial = () => {
  return (
    <div className="testimonial-area wrapper">
      <div className='locate-area'>
        <div>
          <MapPin size={40} color="white" />
        </div>
        <div>
          <h2>20+ Physical Stores</h2>
          <p>Visit Our Store & Get Your Desired IT Product!</p>
        </div>
      </div>
      <div className='store-area'>
        <div>
          <h4>Find Your Service</h4>
        </div>
        <div>
          <Search size={24}/>
        </div>
      </div>
    </div>
  );
}

export default Testimoial