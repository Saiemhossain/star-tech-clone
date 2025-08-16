import monitor from '../../assets/monitor.webp'
import headphone from '../../assets/headphone.webp'
import bkash from '../../assets/bkash.webp'
import home from '../../assets/home.webp'
import { useEffect, useState } from 'react'

const Header = () => {
 
  const images = [monitor, headphone, bkash, home];

  const [index, setIndex] = useState(0);


  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 5000);
    return () => clearTimeout(timer);

  }, [images.length]);
  


  return (
    <div className="image-slider wrapper">
      <img src={images[index]} alt="slide" />
    </div>
  );
}

export default Header