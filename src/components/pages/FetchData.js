import React, { useEffect, useState } from 'react'
import DisplayCard from './DisplayCard'

const FetchData = () => {
    let [posts, setPosts] = useState([])
    // let/const [variablename, function] = useState(initial value)
    // initial : number, "" - string , [] - array, {} - object

    // useEffect(function, dependencies)
    // function - what to do
    // dependencies - array of states which will trigger the function
    // dependencies :   [] - on load, null - always, [var1, var2] - when var1 or var2 changes

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response)
                return response.json()
            }
            )
            .then(data => {
                console.log(data)
                setPosts(data)
            }
            )
            .catch(error => console.log(error))
    }, [])
    return (
        <>
        {
            posts.map(item=>{
                return <DisplayCard post={item}/>
            })
        }
        </>
    )
}

export default FetchData