import React, { useEffect, useState } from 'react'

const Data = () => {
    let [count, setCount] = useState(0)
    let [data, setData] = useState(100)
    const increment = () => {
        setCount(++count)
    }
    const decrement = () => {
        setCount(--count)
    }
    const reset = () => {
        setCount(0)
    }
    const incrementData = () => {
        setData(data+10)
    }
    const decrementData = () => {
        setData(data-10)
    }
    const resetData = () => {
        setData(100)
    }

/* useEffect(function, dependencies)
function -> effect to be seen
dependencies -> array of state variables that trigger function/side effect
    [] -> on load
    [var1, var2] -> on load, when var1 or var2 is updated
    null -> on load, everytime any variable gets updated
*/

useEffect(()=>{
    window.alert("Count updated")
}, [data,count])




    return (
        <>
            <div className='text-center'>
                <div style={{ fontSize: '40px' }}>Counter : {count}</div>
                {
                    count < 10 &&
                    <button onClick={increment}>Increase Count</button>
                }
                {
                    count > 0 &&
                    <button onClick={decrement}>Decrease Count</button>
                }
                <button onClick={reset}>Reset Count</button>

                <br/>
                <br/>
                <div>Data: {data}</div>
                <button onClick={incrementData}>Increase data</button>
                <button onClick={decrementData}>Decrease data</button>
                <button onClick={resetData}>Reset data</button>

            </div>
        </>
    )
}

export default Data