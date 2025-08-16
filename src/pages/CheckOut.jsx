import React from 'react';
import { cartState } from '../Context/Context';

const CheckOut = () => {
  const { cart,setCart } = cartState();

  // Total Cash Price
  const totalCashPrice = cart.reduce((total, item) => {
    if (typeof item.price === 'object') {
      return total + item.price.cash;
    } else {
      return total + item.price;
    }
  }, 0);

  const handleRemove = (id) => {
    setCart(cart.filter((item)=> item.id !==id ))
  }

  // Total Monthly Price
  const totalMonthlyPrice = cart.reduce((total, item) => {
    if (typeof item.price === 'object' && item.price.monthly) {
      return total + item.price.monthly;
    }
    return total;
  }, 0);

  return (
    <>
      <div className="checkout-item">
        {cart.map(item => (
          <div key={item.id} className='checkout-each-item'>
            <img className="checkout-img" src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <h4>{item.des?.model}</h4>
            <h4>{item.des?.Processor}</h4>
            <h4>{item.des?.display}</h4>
            <h4>{item.des?.maxstorage}</h4>
            <p>
              {typeof item.price === 'object'
                ? `Cash: ${item.price.cash} | Monthly: ${item.price.monthly}`
                : `Price: ${item.price}`}
            </p>
            <button className='remove-btn' onClick={() => handleRemove(item.id)}>Remove Cart</button>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className='pricing-area'>
          <h2>Total Cash Price: {totalCashPrice}</h2>
          <h2>Total Monthly Price: {totalMonthlyPrice}</h2>
        </div>
      )}
    </>
  );
};

export default CheckOut;
