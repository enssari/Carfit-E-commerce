import React, { useState } from 'react'
import cars from '../assets/cars.mp4';
import close from '../assets/close.svg';

export const Header = () => {
  const [searchClicked, setSearchClicked] = useState(false);
  const [carData, setCarData] = useState([]);



  return (
    <div id="header-container">
        <div id="header-content">
            <div className='md:w-[47.5rem] lg:w-[63rem] md:m-auto
            xl:w-[78rem] 2xl:w-[94rem] md:p-8' 
            id="video-bg">
                <video src={cars} loop autoPlay muted></video>
            </div>
        </div>
    </div>
  )
}
