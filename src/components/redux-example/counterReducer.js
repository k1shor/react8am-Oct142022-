const initialData = {
    count: 1000
}

// const counterReducer = (state = {count: 100}, action) => {
const counterReducer = (state = initialData, action) => {
    switch(action.type){
        case "INCREASE_COUNT":
            return {count: ++state.count}

        default:
            return state
    }
}

export default counterReducer