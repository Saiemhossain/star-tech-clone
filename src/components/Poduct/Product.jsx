import products from "../../data";
import ProductCard from "./ProductCard";
import SingleProduct from "./SingleProduct";

const Product = () => {
  return (
    <div className="wrapper product-area">
      <h3>Featured Products</h3>
      <p>Check & Get Your Desired Product!</p>
      <div className="product-sec">
        {
          products.map((product) => (
            <div key={product.id} >
              <ProductCard product={product} />
           </div>
          ))
        }
      </div>
    </div>
  );
}

export default Product