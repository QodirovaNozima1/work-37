import { useState } from 'react'
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Product from './components/product/Product';
import Advertising from './components/advertising/Advertising';
import Client from './components/client/Client';
import Popular from './components/popular/Popular';
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
      <Header/>
      <Hero/>
      <Product/>
      <Advertising/>
      <Client/>
      <Popular/>
      <Footer/>
    </>
  )
}

export default App
