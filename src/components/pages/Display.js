import React, { useContext } from 'react'
import { GlobalContext } from '../GlobalContext'
import Card from './Card'

const Display = () => {
    // let info = useContext(GlobalContext)
    // console.log(info)
  return (
    <>
    {/* {info} */}
    <div className='row row-cols-4'>
        <Card name="Samsung" price="25,000" description="a very handy phone at affordable price" image="1.jpg"/>  
        <Card name="Samsung" price="25,000" description="a very handy phone at affordable price" image="2.jpg"/>  
        <Card name="Samsung" price="25,000" description="a very handy phone at affordable price" image="3.jpg"/>  
        <Card name="Samsung" price="25,000" description="a very handy phone at affordable price" image="4.jpg"/>  
        <Card name="Samsung" price="25,000" description="a very handy phone at affordable price" imgage="5.jpg"/>  
    </div>
    </>
  )
}

export default Display