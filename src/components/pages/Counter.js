import React, { useState } from 'react'

const Counter = () => {
    let [count, setCount] = useState(0)

    // let [variable_name, function] = useState(initial value)
    // variable_name - state variable
    // function - function to update state variable
    // initial value    - number - number
    //                  - "" - string
    //                  - [] - array
    //                  - {} - object

    const increment = () => {
        setCount(++count)
    }

    const decrement = () => {
        setCount(--count)
    }

    const reset = () => {
        setCount(0)
    }

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

            </div>
        </>
    )
}

export default Counter