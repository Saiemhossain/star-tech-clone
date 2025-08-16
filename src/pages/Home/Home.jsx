import React from 'react'
import Header from '../../components/Header/Header'
import Category from '../Category'
import Testimoial from '../Testimoial'
import Product from '../../components/Poduct/Product'
import Contact from '../Contact'

const Home = () => {
  return (
    <div>
      <Header />
      <Category />
      <Testimoial />
      <Product />
      <Contact/>
    </div>
  )
}

export default Home