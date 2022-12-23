import { API } from "../config"

export const getAllProducts  = () => {
    return fetch(`${API}/getallproducts`)
    .then(res=>res.json())
    .catch(err=> console.log(err))
}

export const deleteProduct = (id, token) => {
    return fetch(`${API}/deleteproduct/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
    .then(res=>res.json())
    .catch(err=> console.log(err))
}

export const addProduct = (product, token) => {
    return fetch(`${API}/addproduct`,{
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`
        },
        body: product
    })
    .then(res=>res.json())
    .catch(err=> console.log(err))
}

export const productDetails = (id) => {
    return fetch(`${API}/productdetails/${id}`)
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

// update product
export const updateProduct = (id, product, token) => {
    return fetch(`${API}/updateproduct/${id}`,{
        method: "PUT",
        headers: {
            Authorization: `Bearer ${token}`
        },
        body: product
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

// get filtered product
export const getFilteredProduct = (filters, sortBy, order, limit, skip) => {
    return fetch(`${API}/filteredproduct?sortBy=${sortBy}&order=${order}&limit=${limit}&skip=${skip}`,{
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(filters)
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}