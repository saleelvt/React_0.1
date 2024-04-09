import React from 'react'

function Child2({parentFunction}) {
  const data='saleel is good boy '
  let handleDataFromParent=()=>{
    parentFunction(data)
 }
  return (
    <div>
     <button onClick={handleDataFromParent}>Saleel is Good boy or Bad boy</button>
    </div>
  )
}

export default Child2
