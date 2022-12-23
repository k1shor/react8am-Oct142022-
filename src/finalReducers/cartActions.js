import Swal from "sweetalert2";
import { productDetails } from "../api/productApi";
import { ADD_ITEMS_TO_CART, REMOVE_ITEMS_FROM_CART, CLEAR_CART } from "./cartConstants";


export const addItemToCart = (id, quantity) => async (dispatch, getState) => {
    let data = await productDetails(id)
    console.log(data)
    dispatch({
        type: ADD_ITEMS_TO_CART,
        payload: {
            product: data._id,
            product_name: data.product_name,
            product_price: data.product_price,
            product_image: data.product_image,
            count_in_stock: data.count_in_stock,
            quantity: quantity
        }
    })
    localStorage.setItem("cart_items",JSON.stringify(getState().cart.cart_items))
}