import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import { deleteProduct, productDetails } from '../../../api/productApi'
import { isAuthenticated } from '../../../api/userApi'
import { API } from '../../../config'
import { addItemToCart } from '../../../finalReducers/cartActions'
import Footer from '../../layout/Footer'
import Navbar from '../../layout/Navbar'

const ProductDetails = () => {
    let [product, setProduct] = useState({})
    let [error, setError] = useState('')
    let [success, setSuccess] = useState('')
    let { id } = useParams()
    let { token, user } = isAuthenticated()
    let navigate = useNavigate()

    let dispatch = useDispatch()

    useEffect(() => {
        productDetails(id)
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                }
                else {
                    setProduct(data)
                }
            })
    }, [])

    const handleDelete = (id) => e => {
        e.preventDefault()
        setSuccess('')
        setError('')
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteProduct(id, token)
                    .then(data => {
                        if (data.error) {
                            setError(data.error)
                            Swal.fire(
                                'Error!',
                                error,
                                'failed'
                            )
                        }
                        else {
                            setSuccess(data.message)
                            Swal.fire(
                                'Deleted!',
                                success,
                                'success'
                            )
                            navigate('/admin/products')

                        }
                    })
            }
        })
    }

    const addItem = e => {
        e.preventDefault()
        console.log("abc")
        dispatch(addItemToCart(id, 1))
    }

    return (
        <>
            <Navbar />
            <div className='container m-5 p-5 shadow-lg'>
                <h3 className='text-center text-decoration-underline'>Product Information</h3>
                <div className='d-flex'>
                    <div className='w-50 p-5'>
                        <img src={`${API}/${product.product_image}`} alt={`${API}/${product.product_image}`}
                            style={{ width: "100%" }} />
                    </div>
                    <div className='w-50 p-5'>
                        <h4><b><u>{product.product_name}</u></b></h4>
                        <h5>Price: <b>Rs. {product.product_price}</b></h5>
                        <h5>Description: {product.product_description}</h5>
                        <h5>In stock: {product.count_in_stock}</h5>
                        <h5>Rating: {product.rating}</h5>

                        {
                            user && user.role === 1 ?
                                <div className='btn-group'>
                                    <Link to={`/admin/product/update/${product._id}`} className='btn btn-warning'>Update</Link>
                                    <button className='btn btn-danger' onClick={handleDelete(product._id)}>Delete</button>
                                </div>
                                :
                                <button className='btn btn-warning' onClick={addItem}>Add to Cart</button>
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProductDetails