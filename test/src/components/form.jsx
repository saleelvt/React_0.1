

import React from 'react'
import { useRef, useEffect, useState } from 'react'
import MyDetails from './myDetails'

function Form() {

    const [Name, setName] = useState('')
    const [Phone, setPhone] = useState('')
    
    const [formData,setFormData]=useState([])

    let getValue = (event) => {
        let nameValue = event.target.value
        setName(nameValue)
    }

    let getPhone = (event) => {

        let phoneValue=event.target.value
        setPhone(phoneValue)
    }
    
   
    let getData=()=>{

      setFormData([Name,Phone])
       
      
    }

    let inputRef = useRef(null)
    useEffect(() => {

        // inputRef.current.focus()
        inputRef.current.style.color = 'blue'
    })
    return (
        <div>


            <div className='flex justify-center mt-44 '>
                <div className=" w-1/4  bg-gray-500 rounded h-44 px-16 py-4">
                    <div className='m-4'>
                        <input type="text " name='name' onChange={getValue} ref={inputRef} placeholder='Enter your name ' className=' bg-gray-300 rounded' />
                    </div>
                    <div className='m-4'>
                        <input type="text " name='phone' onChange={getPhone} placeholder='Enter your Number ' className=' bg-gray-300 rounded' />
                    </div>
                    <div className=" m-12 ml-24">
                        <button onClick={getData} className='bg-blue-400 rounded hover:bg-red-500 text-bold '>Submit</button>
                    </div>
                </div>
            </div>
            
            <br />
            <br />

        < MyDetails data={formData.join(',')}/>
        </div>
    )
}

export default Form





