import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <div className='banner'>
      <div className="content">
        <h1 className='title'> Movie Name </h1>
        <div className="banner_buttons">
            <button className='button'>Play</button>
            <button className='button'>My List</button>
        </div>
        <h1 className='description'> saleel is a good boy he was a bad boy but now he is a superb boy </h1>
      </div>
      <div className="fade_bottom">

      </div>
    </div>
  )
}

export default Banner
