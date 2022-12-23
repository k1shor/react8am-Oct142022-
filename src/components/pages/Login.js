import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { authenticate, isAuthenticated, signin } from '../../api/userApi'
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'

const Login = () => {
    const navigate = useNavigate()

    const user_info = isAuthenticated()
    // const user_role = user_info.user.role

    const [user, setUser] = useState({
        email: '',
        password: '',
        error: '',
        success: false
    })
    const { email, password, error, success } = user
    const handleSubmit = e => {
        e.preventDefault()
        signin(user)
            .then(data => {
                if (data.error) {
                    setUser({ ...user, error: data.error })
                }
                else {
                    setUser({ success: true })
                    authenticate(data)
                }
            })
    }

    const showError = () => {
        if (error) {
            return <div className='alert alert-danger'>{error}</div>
        }
    }

    const redirect = () => {
        if (success) {
            if (user_info && user_info.user.role === 1) {
                navigate('/admin/dashboard')
            }
            else {
                navigate('/')
            }
        }
    }

    return (
        <>
            <Navbar />
            {showError()}
            {redirect()}
            <main className="form-signin w-50 p-5 shadow-lg mt-3 m-auto rounded-5">
                <form>
                    <div className='text-center'>
                        <img className="mb-4" src="./logo192.png" alt="" width="72" height="72" />
                    </div>
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={e => setUser({ ...user, email: e.target.value })} />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={e => setUser({ ...user, password: e.target.value })} />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={handleSubmit}>Sign in</button>
                    <div className='d-flex justify-content-between'>
                        <div>
                            Do not have an account ? <Link to='/register'>Register</Link>
                        </div>
                        <div>
                            <Link to='/forgetpassword'>Forget Password</Link>
                        </div>
                    </div>


                    <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
                </form>
            </main>

            <Footer />
        </>
    )
}

export default Login