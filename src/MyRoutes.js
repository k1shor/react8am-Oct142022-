import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/pages/About'
import AxiosExample from './components/pages/AxiosExample'
import Cart from './components/pages/Cart'
import ComponentA from './components/pages/ComponentA'
import Contact from './components/pages/Contact'
import Counter from './components/pages/Counter'
import Data from './components/pages/Data'
import Display from './components/pages/Display'
import FAQ from './components/pages/FAQ'
import FetchData from './components/pages/FetchData'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import Products from './components/pages/Products'
import Register from './components/pages/Register'
import Counter2 from './components/redux-example/Counter2'
import Games from './components/redux-example/Games'
import First from './First'
import Second from './Second'

const MyRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/first' element={<First/>}/>
            <Route path='/second' element={<Second/>}/>

            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/cart' element= {<Cart/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/faq' element={<FAQ/>}/>


            {/* hooks */}
            <Route path='/counter' element={<Counter/>}/>
            <Route path='/data' element={<Data/>}/>

            <Route path="/component" element={<ComponentA/>}/>
            <Route path='/display' element={<Display/>}/>

            <Route path='/fetchdata' element = {<FetchData/>}/>
            <Route path='/axios' element={<AxiosExample/>}/>

            {/* Redux Example */}
            <Route path='/count' element={<Counter2/>}/>
            <Route path='/game' element = {<Games/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default MyRoutes

