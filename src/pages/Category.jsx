
// eslint-disable-next-line no-unused-vars
 // eslint-disable-next-line no-unused-vars
import { Monitor } from "lucide-react";
import { Laptop } from "lucide-react";
import { Camera } from "lucide-react";
import { Phone } from "lucide-react";
import { Fan, Watch, Headphones, Ear, Tv } from 'lucide-react';

import products from "../data";
import { useState } from "react";

const Category = () => {
  
 
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategory = (Category) => {
    setSelectedCategory(Category)
  }

  const filterProducts = selectedCategory ? products.filter((product) => product.Category === selectedCategory) : [];

  return (
    <>
      <div className="category-about wrapper">
        <h2>Featured Category</h2>
        <p>Get Your Desired Product from Featured Category!</p>
        <div className="category-area">
          <div className="category-sec">
            <div className="category-item">
              <Monitor
                size={28}
                color="black"
                onClick={() => handleCategory('Monitor')}
              />
            </div>
            <div className="category-item">
              <Laptop
                size={28}
                color="black"
                onClick={() => handleCategory('Laptop')}
              />
            </div>
            <div className="category-item">
              <Camera
                size={28}
                color="black"
                onClick={() => handleCategory('Camera')}
              />
            </div>
            <div className="category-item">
              <Phone
                size={28}
                color="black"
                onClick={() => handleCategory('Phone')}
              />
            </div>
          </div>
          <div className="category-sec">
            <div className="category-item">
              <Fan
                size={28}
                color="black"
                onClick={() => handleCategory('Fan')}
              />
            </div>
            <div className="category-item">
              <Watch
                size={28}
                color="black"
                onClick={() => handleCategory('Watch')}
              />
            </div>
            <div className="category-item">
              <Ear
                size={28}
                color="black"
                onClick={() => handleCategory('Earbuds')}
              />
            </div>
            <div className="category-item">
              <Tv
                size={28}
                color="black"
                onClick={() => handleCategory('Tv')}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper categoryProduct ">
        {filterProducts.map(item => (
          <div key={item.id} className="filterCategory wrapper">
            <img src={item.image} />
            <h4>{item.name}</h4>
          </div>
        ))}
      </div>
    </>
  );
}

export default Category