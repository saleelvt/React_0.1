import React from 'react'
import { useState, useEffect, useRef } from 'react'

function Effect({fromparentHandle}) {


    let inputFocus = useRef(null)

    let sendDataToParent=(data)=>{
        fromparentHandle(data)
    }


    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
        sendDataToParent(count+1)

    }


    const decrement = () => {
        if (count>0) {
            setCount(count - 1)
            sendDataToParent(count-1)
        }
    }
    
    const data = count 


    useEffect(() => {


        inputFocus.current.style.color = 'blue'

    }, )


 



    return (
        
        <div>
            
            <button ref={inputFocus} onClick={increment} className=''>+</button>
            <button onClick={ decrement} className=''>-</button>

        </div>
    )
}

export default Effect
