import { ADD_ITEMS_TO_CART, REMOVE_ITEMS_FROM_CART, CLEAR_CART } from "./cartConstants";

const initial_data = {
    cart_items: []
}

const cartReducer = (state=initial_data, action) => {
    switch (action.type){
        case ADD_ITEMS_TO_CART:
            let item = action.payload
            const itemExists = state.cart_items.find(i=>i.product === item.product)
            if(itemExists){
                return {...state, cart_items: [...state.cart_items.map(cur=>
                    cur.product === item.product ? item : cur
                    )]}
            }
            else{
                return {...state, cart_items: [...state.cart_items, item]}
            }



        case REMOVE_ITEMS_FROM_CART:

        case CLEAR_CART:

        default:
            return state
    }
}

export default cartReducer