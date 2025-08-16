/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
import { useState } from 'react'; // useState ইম্পোর্ট করতে ভুলো না
import { useNavigate, useParams } from 'react-router-dom';
import { cartState } from '../../Context/Context';
import products from '../../data';
import toast from 'react-hot-toast';

const SingleProduct = () => {
  const { id } = useParams();
  const { cart, setCart } = cartState();

  const navigate = useNavigate();
  const product = products.find(item => item.id === parseInt(id));

  const [selectedPrice, setSelectedPrice] = useState(null); 

 function AddToCart() {
   if (selectedPrice === null) {
     alert('Please select a price option before adding to cart.');
     return;
   }

   toast.success('Oder Received Successfully')
   setCart([])

   const productIndex = cart.findIndex(item => item.id === product.id);

   if (productIndex !== -1) {
     const updatedCart = [...cart];
     updatedCart[productIndex] = { ...product, selectedPrice };
     setCart(updatedCart);
     alert('Product price updated in the cart.');
     return;
   } else {
     setCart([...cart, { ...product, selectedPrice }]);
   }
  navigate('/checkOut')
   
  }
  
 

  if (!product) {
    return <div>product can not be available </div>;
  }

  return (
    <div className="single-product-item">
      <div className="single-product-img">
        <img src={product.image} alt="" />
      </div>
      <div className="single-product-content">
        <h2>Product Name: {product.name}</h2>
        <h4>Product Model: {product.des?.model}</h4>
        <h4>Product Max Storage: {product.des?.maxstorage}</h4>
        <h4>Product Display: {product.des?.Display}</h4>
        <h4>Product Resolution: {product.des?.Resolution}</h4>
        <h4>Product Features: {product.des?.Features}</h4>
        <h4>Product Processor: {product.des?.Processor}</h4>

        <div>
          <div className='option'>
            <h4>Select your payment option :</h4>
          </div>
          <div className="price">
            <div className="label-box">
              <label>
                Regular Price:
                <input
                  type="radio"
                  name="price"
                  value={
                    typeof product.price === 'object'
                      ? product.price.cash
                      : product.price
                  }
                  checked={
                    selectedPrice ===
                    (typeof product.price === 'object'
                      ? product.price.cash
                      : product.price)
                  }
                  onChange={() =>
                    setSelectedPrice(
                      typeof product.price === 'object'
                        ? product.price.cash
                        : product.price
                    )
                  }
                />
                <span>
                  {typeof product.price === 'object'
                    ? product.price.cash
                    : product.price}
                </span>
              </label>
            </div>

            {typeof product.price === 'object' &&
              product.price.monthly !== undefined && (
                <div className="label-box">
                  <label>
                    Monthly Price:
                    <input
                      type="radio"
                      name="price"
                      value={product.price.monthly}
                      checked={selectedPrice === product.price.monthly}
                      onChange={() => setSelectedPrice(product.price.monthly)}
                    />
                    <span>{product.price.monthly}</span>
                  </label>
                </div>
              )}
          </div>
        </div>
        <div>
          <button className="btn-cart" onClick={AddToCart}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
