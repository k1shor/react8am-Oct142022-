import React from 'react'
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'

const Products = () => {
    return (
        <>
            <Navbar />
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-3 pt-3 ps-5'>
                        <h4 className='text-decoration-underline text-success'>Departments</h4>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Mobiles
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                            <label className="form-check-label" htmlFor="flexCheckDefault1">
                                Laptops
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2" />
                            <label className="form-check-label" htmlFor="flexCheckDefault2">
                                Kitchen
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault3" />
                            <label className="form-check-label" htmlFor="flexCheckDefault3">
                                Beauty
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault4" />
                            <label className="form-check-label" htmlFor="flexCheckDefault4">
                                Fitness
                            </label>
                        </div>

                        <h4 className='text-decoration-underline text-success mt-3'>Prices</h4>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Upto Rs. 1000
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                Rs. 1000 - Rs. 10000
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                            <label className="form-check-label" htmlFor="flexRadioDefault3">
                                Rs. 10000 - Rs. 50000
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
                            <label className="form-check-label" htmlFor="flexRadioDefault4">
                                Rs. 50000 - Rs. 100000
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault5" />
                            <label className="form-check-label" htmlFor="flexRadioDefault5">
                                Above Rs. 100000
                            </label>
                        </div>


                    </div>
                    <div className='col-md-9 pt-5'>
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-2">
                            <div className="col">
                                <div className="card">
                                    <img src="./productsImage/1.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Hoodiess</h5>
                                        <h5 className="card-title">Rs.2000</h5>
                                        <p className="card-text text-truncate">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <img src="./productsImage/2.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Keyboard</h5>
                                        <h5 className="card-title">Rs. 350</h5>
                                        <p className="card-text text-truncate">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <img src="./productsImage/3.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Optical Mouse</h5>
                                        <h5 className="card-title">Rs. 500</h5>
                                        <p className="card-text text-truncate">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <img src="./productsImage/4.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Apple Charger</h5>
                                        <h5 className="card-title">Rs. 3000</h5>
                                        <p className="card-text text-truncate">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Products