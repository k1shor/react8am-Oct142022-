import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'

const Register = () => {
    return (
        <>
            <Navbar />
            <main className="form-signin w-50 p-5 shadow-lg mt-3 m-auto rounded-5">
                <form>
                    <div className='text-center'>
                        <img className="mb-4" src="./logo192.png" alt="" width="72" height="72" />
                    </div>
                    <h1 className="h3 mb-3 fw-normal">Register</h1>

                    <div className="form-floating">
                        <input type="text" className="form-control" id="fname" placeholder="first name" />
                        <label htmlFor="fname">First Name</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="lname" placeholder="last name" />
                        <label htmlFor="lname">Last Name</label>
                    </div>
                    <div className="form-floating">
                        <input type="number" className="form-control" id="age" placeholder="age" />
                        <label htmlFor="age">Age</label>
                    </div>
                    <div className="form-floating">
                        <input type="date" className="form-control" id="dob" placeholder="date of birth" />
                        <label htmlFor="dob">Date of Birth</label>
                    </div>
                    <div className='form-floating'>
                        <div className='form-control d-flex justify-content-evenly'>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    Male
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Female
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                                <label className="form-check-label" htmlFor="flexRadioDefault3">
                                    Others
                                </label>
                            </div>
                        </div>
                        <label>Gender</label>
                    </div>



                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> I accept the terms and conditions.
                        </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
                    Already have an account ? <Link to='/login'>Login</Link>

                    <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
                </form>
            </main>

            <Footer />
        </>
    )
}

export default Register