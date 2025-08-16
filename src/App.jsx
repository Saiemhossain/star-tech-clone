
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'

import Home from './pages/Home/Home'
import Category from './pages/Category'
import Testimoial from './pages/Testimoial'
import Product from './components/Poduct/Product'
import SingleProduct from './components/Poduct/SingleProduct'
import Context from './Context/Context'
import CheckOut from './pages/CheckOut'
import { Toaster } from 'react-hot-toast'
import Contact from './pages/Contact'



function App() {
  

  return (
    <>
      <Context>
        <Navbar />
        <Toaster position='top-center' reverseOrder={false} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/testimonial" element={<Testimoial />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path='/checkOut' element={<CheckOut />} />
          <Route path='/contact' element={<Contact />} />
          
        </Routes>
      </Context>
    </>
  );
}

export default App
