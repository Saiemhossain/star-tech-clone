/* eslint-disable no-unused-vars */
import logo from '../../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
  Search,
  Gift,
  Flashlight,
  User,
  ShoppingCart,
  Menu,
  X,
} from 'lucide-react';
import { cartState } from '../../Context/Context';
import products from '../../data';

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState('');
  const [inputValue, setInputValue] = useState('');
  const { cart } = cartState();
  const navigate = useNavigate(); 

  const handleToggle = () => {
    setMenu(!menu);
  };

  const filterItem = products.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = () => {
    setSearch(inputValue);
  };

  const handleProductClick = productId => {
    setSearch(''); 
    setInputValue(''); 
    navigate(`/product/${productId}`);
  };

  return (
    <div className="header-area">
      <div className="header-sec wrapper">
        {/* Hamburger / Close icon */}
        <div>
          {menu ? (
            <X
              size={28}
              color="white"
              className="hamburger-icon"
              onClick={handleToggle}
            />
          ) : (
            <Menu
              size={28}
              color="white"
              className="hamburger-icon"
              onClick={handleToggle}
            />
          )}

          <nav>
            <ul className={`mobile-nav ${menu ? 'show' : ''}`}>
              <Link to="/" onClick={() => setMenu(false)}>
                <li>Home</li>
              </Link>
              <Link to="/category" onClick={() => setMenu(false)}>
                <li>Category</li>
              </Link>
              <Link to={'/testimonial'}>
                <li onClick={() => setMenu(false)}>Testimonial</li>
              </Link>
              <Link to="/product">
                <li onClick={() => setMenu(false)}>Product</li>
              </Link>
              <li onClick={() => setMenu(false)}>Contact</li>
            </ul>
          </nav>
        </div>

        {/* Logo */}
        <Link to="/">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </Link>

        {/* Search Box */}
        <div className="input-box">
          <input
            type="text"
            placeholder="Search product.."
            value={inputValue} 
            onChange={e => setInputValue(e.target.value)}
            
          />
          <Search
            size={25}
            color="#000"
            className="search-icon"
            onClick={handleSearch}
          />

          {search && (
            <div
              style={{
                position: 'absolute',
                top: '90px',
                left: '195px',
                width: '42%',
                background: 'white',
                border: '1px solid #ccc',
                borderRadius: '4px',
                maxHeight: '200px',
                overflowY: 'auto',
                zIndex: 1000,
              }}
            >
              {filterItem.length > 0 ? (
                filterItem.map(item => (
                  <div
                    key={item.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '8px',
                      borderBottom: '1px solid #eee',
                      cursor: 'pointer',
                    }}
                    onClick={() => handleProductClick(item.id)} 
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: '40px',
                        height: '40px',
                        objectFit: 'cover',
                      }}
                    />
                    <span>{item.name}</span>
                  </div>
                ))
              ) : (
                <p style={{ padding: '10px', color: '#888' }}>
                  No Product found
                </p>
              )}
            </div>
          )}
        </div>

        {/* Icon Area */}
        <div className="icons-area">
          <div className="gift">
            <Gift size={25} color="red" />
            <div className="offer-content">
              <h3>Offers</h3>
              <p>Latest Offers</p>
            </div>
          </div>
          <div className="gift">
            <Flashlight size={25} color="red" />
            <div className="offer-content">
              <h3>Happy Hour</h3>
              <p>Special Deal</p>
            </div>
          </div>
          <div className="gift">
            <User size={25} color="red" />
            <div className="offer-content">
              <h3>Account</h3>
              <p>LogIn / Register</p>
            </div>
          </div>
        </div>

        {/* PC Builder Button */}
        <div className="btn-pc">
          <button>PC Builder</button>
        </div>

        {/* Cart Icon */}
        <div className="cart-area">
          <ShoppingCart size={25} color="white" />
          <span> {cart.length}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
