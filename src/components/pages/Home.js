import React from 'react'
import CardGroup from '../CardGroup'
import Carousel from '../Carousel'
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'

const Home = () => {
  return (
    <>
     <Navbar/>   
     <Carousel/>
     <CardGroup/>
     
     <Footer/>
    </>
  )
}

export default Home