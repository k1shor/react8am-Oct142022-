import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { deleteCategory } from '../../../api/categoryApi'
import { isAuthenticated } from '../../../api/userApi'
import { getAllUsers } from '../../../api/usersApi'
import Footer from '../../layout/Footer'
import Navbar from '../../layout/Navbar'
import AdminSidebar from './AdminSidebar'

const Users = () => {
    const [users, setUsers] = useState([])
    const { token } = isAuthenticated()
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {
        getAllUsers()
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                }
                else {
                    setUsers(data)
                }
            })
    }, [success])

    const makeAdmin = (id) => e => {
        e.preventDefault()
        setSuccess('')
        setError('')
    }
    const verifyUser = (id) => e => {
        e.preventDefault()
        setSuccess('')
        setError('')
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
                        <table className='table text-center table-bordered table-hover align-middle'>
                            <thead>
                                <tr className='table-dark'>
                                    <th>S.No.</th>
                                    <th>Username</th>
                                    <th>Email</th>
                                    <th>Role</th> 
                                    <th>Verified</th>                                   <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, i) => {
                                    return <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>{user.role?"Admin":"Normal User"}</td>
                                        <td>{user.isVerified?"Yes":"No"}</td>
                                        <td>
                                            <div className='btn-group'>
                                                <button className='btn btn-warning' onClick={makeAdmin(user._id)}>Make Admin</button>
                                                <button className='btn btn-danger' onClick={verifyUser(user._id)}>Verify User</button>
                                            </div>
                                        </td>

                                    </tr>
                                })}
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Users