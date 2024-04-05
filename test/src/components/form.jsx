

import React from 'react'
import { useRef,useEffect } from 'react'


function Form() {
    const InputRef=useRef(null)

    useEffect(()=>{

        InputRef.current.focus()
    })
    return (
        <div>
            <div className='flex justify-center mt-44 '>
                <div className=" w-1/4  bg-gray-500 rounded h-44 px-16 py-4">
                    <div className='m-4'>
                        <input type="text " ref={InputRef} className=' bg-gray-300 rounded' />
                    </div>
                    <div className='m-4'>
                        <input type="text " className=' bg-gray-300 rounded' />
                    </div>
                    <div className=" m-12 ml-24">
                        <button className='bg-blue-400 rounded hover:bg-red-500 text-bold '>OK</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form





