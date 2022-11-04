import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Counter2 = () => {
    let counterStore = useSelector(store => store)
    let count = counterStore.count

    // let count = useSelector(store=>store.count)

    let dispatch = useDispatch()

    return (
        <>
            Counter:{count}
            <br/>
            <button className='btn btn-warning' onClick={()=>{
                return dispatch({type:"INCREASE_COUNT"})
            }}>Increase Count</button>
        </>
    )
}

export default Counter2