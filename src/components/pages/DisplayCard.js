import React from 'react'

const DisplayCard = ({post}) => {
  return (
    <>
        <div className='card m-3 p-3 shadow-lg rounded rounded-3'>
            <h3>{post.id}:{post.title}</h3>
            <hr/>
            <p>{post.body}</p>
        </div>
    </>
  )
}

export default DisplayCard