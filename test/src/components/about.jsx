import React, { useContext } from 'react'
import { useState } from 'react';
import { MyContext } from '../App';


function About() {
  const {name,place,age}=useContext(MyContext)
  const [datas,setDatas]=useState('samskrth')
  const data ='saleel is good boy from about  '
  console.log(name);

  const handleData=()=>{
    setDatas(name)
  }
  return (

<div>
<h1> This is my  About Section {datas} </h1>
<button onClick={handleData}> click</button>
</div>

    )
}

export default About
