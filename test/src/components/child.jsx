
import React from 'react'

function Child({sendDataToParent}) {
   let  data='Saleel is a good boy '

   let handleDataFromParent=()=>{
     sendDataToParent(data)
   }
   
  return (
    <div>

      <button onClick={handleDataFromParent} >add me</button>

    </div>
  )
}


export default Child
