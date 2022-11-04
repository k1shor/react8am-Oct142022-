import React from 'react'

// const ComponentB = (props) => {
const ComponentB = ({name, phone}) => {
  return (
    <>
        {/* Hello {props.name}.  */}
        {/* <h6>{props.phone}</h6> */}
        Hello {name}. 
        <h6>{phone}</h6>
    </>
  )
}

export default ComponentB