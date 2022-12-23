import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { getAllCategories } from '../../../api/categoryApi'
import { addProduct } from '../../../api/productApi'
import { isAuthenticated } from '../../../api/userApi'
import Footer from '../../layout/Footer'
import Navbar from '../../layout/Navbar'
import AdminSidebar from './AdminSidebar'

const AddProduct = () => {
    const [categories, setCategories] = useState([])
    const myref = useRef()
    const mycatref = useRef()

    const [product, setProduct] = useState({
        product_name: '',
        product_price:  '',
        product_description: '',
        count_in_stock: '',
        category: '',
        product_image: '',
        error: '',
        success: false,
        formdata: ''
    })
    const {product_name, product_description, product_price, count_in_stock, category, product_image, error, success, formdata} = product

    useEffect(()=>{
        getAllCategories()
        .then(data=>setCategories(data))
        setProduct({...product, formdata : new FormData})
    },[])

const handleChange = name => e => {
    let value
    if(name==='product_image'){
        value = e.target.files[0]
    }
    else{
        value = e.target.value
    }
    setProduct({...product, [name]: value})
    formdata.set(name, value)
}
const {token} = isAuthenticated()

const handleSubmit = e => {
    e.preventDefault()
    addProduct(formdata, token)
    .then(data=> {
        if(data.error){
            setProduct({...product, error: data.error, success: false})
        }
        else{
            setProduct({error: '', product_name: '', product_description:'', product_price: '', count_in_stock: '', category: '', product_image: '', success: true})
            myref.current.value= ""
            mycatref.current.value = ""
        }
    })
}

const showError = () => {
    if(error){
        Swal.fire("error","error","error")
        return <div className="alert alert-danger">{error}</div>
    }
}
const showSuccess = () => {
    if(success){
        return <div className='alert alert-success'>Product added successfully. <Link to='/admin/products'>Go Back.</Link></div>
    }
}
    return (
        <>
            <Navbar />
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-3'>
                        <AdminSidebar />
                    </div>
                    <div className='col-md-9 p-5'>

                        <form className='w-75 border px-5 pb-5 pt-4 rounded shadow-lg'>
                        <h3 className='text-decoration-underline text-center'>Add Product</h3>
{showSuccess()}
{showError()}
                            <label htmlFor='product_name'>Product Name</label>
                            <input type={'text'} id='product_name' className='form-control mb-2' 
                            onChange={handleChange('product_name')} value={product_name}/>
                            <label htmlFor='price'>Product Price</label>
                            <input type={'number'} id='price' className='form-control mb-2'
                            onChange={handleChange('product_price')} value={product_price}/>
                            <label htmlFor='description'>Product Description</label>
                            <textarea id='description' className='form-control mb-2' rows={5} onChange={handleChange('product_description')} value = {product_description} />
                            <label htmlFor='count'>Count in Stock</label>
                            <input type={'number'} id='count' className='form-control mb-2' onChange={handleChange('count_in_stock')} value={count_in_stock} />
                            <label htmlFor='category'>Category</label>
                            <select id='category' className='form-control mb-2' onChange={handleChange('category')} ref={mycatref}>
                                <option>Select Category</option>
                                {
                                    categories.map(cat=>{
                                        return <option key= {cat._id} value={cat._id}>{cat.category_name}</option>
                                    })
                                }
                                </select>
                            <label htmlFor='image'>Product Image</label>
                            <input type={'file'} id='image' className='form-control mb-2' onChange={handleChange('product_image')} ref={myref}/>
                            <button className='btn btn-warning w-100' onClick={handleSubmit}>Add New Product</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AddProduct