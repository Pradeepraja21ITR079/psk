import React from 'react'
import Navbar from './Components/Navbar'
import Slideshow from './Components/Slider/SlideShow'
import Products from './Pages/Products'
import Footer from './Footer'


export const Home = () => {
  return (
    <>
    
    <Slideshow/>
    <Products/>
    <Footer/>
    </>
  )
}
