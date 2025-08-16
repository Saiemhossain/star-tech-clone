import React from 'react'
import { Link } from 'react-router-dom';

const ProductCard = ({product}) => {
  return (
    <div className="single-product">
      <img src={product.image} />
      <h3> {product.name} </h3>
      <Link to={`/product/${product.id}`}>
        <button className="single-btn">View more</button>
      </Link>
    </div>
  );
}

export default ProductCard