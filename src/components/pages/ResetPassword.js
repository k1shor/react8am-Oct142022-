import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { resetPassword } from '../../api/userApi'
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'

const ResetPassword = () => {
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const params = useParams()
    const token = params.token

    const handleSubmit = e => {
        e.preventDefault()
        resetPassword(password, token)
        .then(data=>{
            if(data.error){
                setError(data.error)
                setSuccess('')
            }
            else{
                setSuccess(data.message)
                setError('')
            }
        })
    }
    const showError = () => {
        if(error){
            return <div className='alert alert-danger'>{error}</div>
        }
    }
    const showSuccess = () => {
        if(success){
            return <div className='alert alert-success'>{success}</div>
        }
    }
  return (
    <>
        <Navbar/>
        {showError()}
        {showSuccess()}
            <form className='w-50 p-5 mt-5 m-auto'>
                <label htmlFor='email'>New Password</label>
                <input type={'email'} className='form-control' onChange={e=>setPassword(e.target.value)}/>
                <button className='btn btn-warning mt-3' onClick={handleSubmit}>Reset Password</button>
            </form>
        <Footer/>
    </>
  )
}

export default ResetPassword