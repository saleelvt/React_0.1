


import React from 'react'


function Child({sendDataToParent}) {
   let  data='Saleel is a good boy '

   let sendDataToParentHandler=()=>{

     sendDataToParent(data)
   }
   
  return (
    <div>
      <button onClick={sendDataToParentHandler}>add me</button>
    </div>
  )
}


export default Child
