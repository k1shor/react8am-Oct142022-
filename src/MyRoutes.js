import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import First from './First'
import Second from './Second'

const MyRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/first' element={<First/>}/>
            <Route path='/second' element={<Second/>}/>

            <Route path='/' element={<Home/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default MyRoutes

