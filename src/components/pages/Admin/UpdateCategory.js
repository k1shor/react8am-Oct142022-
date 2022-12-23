import React, {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import { categoryDetails, updateCategory } from '../../../api/categoryApi'
import { isAuthenticated } from '../../../api/userApi'
import Footer from '../../layout/Footer'
import Navbar from '../../layout/Navbar'
import AdminSidebar from './AdminSidebar'

const UpdateCategory = () => {
    const [category_name, setCategory_name] = useState('')
    const {token} = isAuthenticated()
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false) 
    const params = useParams()
    const id = params.id

    useEffect(()=>{
        categoryDetails(id)
        .then(data=>{
            if(data.error){
                console.log(data.error)
            }
            else{
                setCategory_name(data.category_name)
            }
        })
    },[])
    const handleSubmit = e => {
        e.preventDefault()
        updateCategory(id, category_name, token)
        .then(data=>{
            if(data.error){
                setError(data.error)
                setSuccess(false)
            }
            else{
                setSuccess(true)
                setError('')
            }
        })
    }
    const showError = () => {
        if(error){
            return <div className="alert alert-danger">{error}</div>
        }
    }
    const showSuccess = () => {
        if(success){
            return <div className='alert alert-success'>Category updated successfully. <Link to='/admin/category'>Go Back.</Link></div>
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
                        <h3>Update Category</h3>
                        {showError()}
                        {showSuccess()}
                        <form className='w-75 p-5 shadow-lg'>
                            <label htmlFor='category_name'>Category Name:</label>
                            <input type={'text'} id='category_name' className='form-control' onChange={e=> setCategory_name(e.target.value)} value={category_name}/>
                            <button className='btn btn-warning w-100 mt-2' onClick={handleSubmit}>Update Category</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default UpdateCategory