import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getFilteredProduct } from '../../api/productApi'
import { API } from '../../config'
import CategoriesCheckbox from '../CategoriesCheckbox'
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'
import PricesRadio from '../PricesRadio'
import ProductCard from './ProductCard'

const Products = () => {
    let [products, setProducts] = useState([])
    let [sortBy, setSortBy] = useState('product_name')
    let [order, setOrder] =useState('DESC')
    // ASC, ascending, 1
    // DESC, descending, -1
    let [limit, setLimit] = useState(2)
    let [skip, setSkip] = useState(0)
    const [myFilters, setMyFilters] = useState({
        filters: {category: [], product_price: []}
    })


    const handlefilters = (filter, filterBy) => {
        let new_filters = {...myFilters}
        new_filters.filters[filterBy] = filter
        setMyFilters(new_filters)
        /* category - "mobile"
        filter - [mobile]
        filterBy - category
        */ 
       console.log(new_filters)
    }

    useEffect(()=>{

        getFilteredProduct(myFilters, sortBy, order, limit, skip)
        .then(data=>{
            if(data.error){
                console.log(data.error)
            }
            else{
                // new_products.push(data)
                setProducts([...products, ...data])
                console.log(data)
            }
        })
    },[myFilters,skip])

    
    return (
        <>
            <Navbar />
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-3 pt-3 ps-5'>
                        <h4 className='text-decoration-underline text-success'>Departments</h4>
                        <CategoriesCheckbox handleCategory = {handlefilters}/>

                        <h4 className='text-decoration-underline text-success mt-3'>Prices</h4>
                        <PricesRadio handlePrice= {handlefilters}/>

                    </div>
                    <div className='col-md-9 pt-5'>
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-2">
                            {
                                products.map(item=>{
                                    return  <ProductCard item={item} key={item._id}/>
                                })
                            }
                           
                            
                        </div>
                        <button className='btn btn-warning' onClick={()=>{
                            
                            return setSkip(skip+limit)
                        }}>Load More</button>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Products