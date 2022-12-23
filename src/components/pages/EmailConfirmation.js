import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { confirmEmail } from '../../api/userApi'
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'

const EmailConfirmation = () => {
    const [error,setError] = useState('')
    const [success, setSuccess] = useState('')

    const params = useParams()
    const token = params.token
    // const {token} = useParams()

    useEffect(()=>{
        confirmEmail(token)
        .then(data=>{
            if(data.error){
                setError(data.error)
            }
            else{
                setSuccess(data.message)
            }
        })
        .catch(err=>console.log(err))
    },[])

    const showError = () => {
        if(error){
            return <div className='alert alert-danger'>{error}</div>
        }
    }
    const showSuccess = () => {
        if(success){
            return <div className='alert alert-success'>{success}. <Link to='/login'>Login</Link>.</div>
        }
    }

  return (
    <>
     <Navbar/>
     {showError()}
     {showSuccess()}
     <Footer/>   
    </>
  )
}

export default EmailConfirmation