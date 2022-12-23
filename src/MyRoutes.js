import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/pages/About'
import AddCategory from './components/pages/Admin/AddCategory'
import AddProduct from './components/pages/Admin/AddProduct'
import AdminCategory from './components/pages/Admin/AdminCategory'
import AdminDashboard from './components/pages/Admin/AdminDashboard'
import AdminProducts from './components/pages/Admin/AdminProducts'
import ProductDetails from './components/pages/Admin/ProductDetails'
import UpdateCategory from './components/pages/Admin/UpdateCategory'
import UpdateProduct from './components/pages/Admin/UpdateProduct'
import Users from './components/pages/Admin/Users'
import AxiosExample from './components/pages/AxiosExample'
import Cart from './components/pages/Cart'
import ComponentA from './components/pages/ComponentA'
import Contact from './components/pages/Contact'
import Counter from './components/pages/Counter'
import Data from './components/pages/Data'
import Display from './components/pages/Display'
import EmailConfirmation from './components/pages/EmailConfirmation'
import FAQ from './components/pages/FAQ'
import FetchData from './components/pages/FetchData'
import ForgetPassword from './components/pages/ForgetPassword'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import Products from './components/pages/Products'
import Register from './components/pages/Register'
import ResetPassword from './components/pages/ResetPassword'
import UserProfile from './components/pages/User/UserProfile'
import Counter2 from './components/redux-example/Counter2'
import Games from './components/redux-example/Games'
import First from './First'
import Second from './Second'
import AdminRoute from './selectiveRoutes/AdminRoute'
import UserRoute from './selectiveRoutes/UserRoute'

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/first' element={<First />} />
        <Route path='/second' element={<Second />} />

        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/products' element={<Products />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/faq' element={<FAQ />} />

        <Route path='/confirm/:token' element={<EmailConfirmation />} />
        <Route path='/forgetpassword' element={<ForgetPassword />} />
        <Route path='/resetpassword/:token' element={<ResetPassword />} />

        <Route path='/' element={<AdminRoute />}>
          <Route path='/admin/dashboard' element={<AdminDashboard />} />
          <Route path='/admin/category' element={<AdminCategory />} />
          <Route path='/admin/category/add' element={<AddCategory />} />
          <Route path='/admin/category/update/:id' element={<UpdateCategory />} />

          <Route path='/admin/products' element={<AdminProducts />} />
          <Route path='/admin/product/add' element={<AddProduct />} />
          <Route path='/admin/product/:id' element={<ProductDetails />} />
          <Route path='/admin/product/update/:id' element={<UpdateProduct />} />

          <Route path='/admin/users' element={<Users />} />
        </Route>
        <Route path='/' element={<UserRoute />}>
          <Route path='/cart' element={<Cart />} />
          <Route path='/userprofile' element={<UserProfile />} />

        </Route>
        <Route path='/product/:id' element={<ProductDetails />} />




        {/* hooks */}
        <Route path='/counter' element={<Counter />} />
        <Route path='/data' element={<Data />} />

        <Route path="/component" element={<ComponentA />} />
        <Route path='/display' element={<Display />} />

        <Route path='/fetchdata' element={<FetchData />} />
        <Route path='/axios' element={<AxiosExample />} />

        {/* Redux Example */}
        <Route path='/count' element={<Counter2 />} />
        <Route path='/game' element={<Games />} />
      </Routes>
    </BrowserRouter>
  )
}

export default MyRoutes

