import React from 'react'

function counter(props) {
  return (
    <div>
      <button className='bg-gray-300 '><h5>Counter : {props.count} </h5></button>
    </div>
  )
}

export default counter
