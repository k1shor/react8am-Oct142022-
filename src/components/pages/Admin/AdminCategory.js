import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { deleteCategory, getAllCategories } from '../../../api/categoryApi'
import { isAuthenticated } from '../../../api/userApi'
import Footer from '../../layout/Footer'
import Navbar from '../../layout/Navbar'
import AdminSidebar from './AdminSidebar'

const AdminCategory = () => {
    const [categories, setCategories] = useState([])
    const { token } = isAuthenticated()
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {
        getAllCategories()
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                }
                else {
                    setCategories(data)
                }
            })
    }, [success])

    const handleDelete = (id) => e => {
        e.preventDefault()
        // setSuccess('')
        // setError('')
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
                deleteCategory(id, token)
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

                        }
                    })
            }
        })
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
                        <h3>Categories</h3>
                        <table className='table w-75 text-center table-bordered table-hover align-middle'>
                            <thead>
                                <tr className='table-dark'>
                                    <th>S.No.</th>
                                    <th>Category Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories.map((cat, i) => {
                                    return <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{cat.category_name}</td>
                                        <td>
                                            <div className='btn-group'>
                                                <Link to={`/admin/category/update/${cat._id}`} className='btn btn-warning'>Update</Link>
                                                <button className='btn btn-danger' onClick={handleDelete(cat._id)}>Delete</button>
                                            </div>
                                        </td>

                                    </tr>
                                })}
                                <tr>
                                    <td colSpan={3}>
                                        <Link to='/admin/category/add' className='btn btn-primary'>Add new Category</Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AdminCategory