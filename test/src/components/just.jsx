import React from 'react'

function Just(props) {
    console.log('render just info');
  return (
    <div>
      <h1>{props.love}</h1>
    </div>
  )
}


export default React.memo(Just)
