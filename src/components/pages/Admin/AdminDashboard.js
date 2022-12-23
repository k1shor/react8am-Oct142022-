import React from 'react'
import Footer from '../../layout/Footer'
import Navbar from '../../layout/Navbar'
import AdminSidebar from './AdminSidebar'

const AdminDashboard = () => {
    return (
        <>
            <Navbar />
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-3'>
                        <AdminSidebar />
                    </div>
                    <div className='col-md-9 p-5'>
                        <h3>Welcome to AdminDashboard</h3>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AdminDashboard