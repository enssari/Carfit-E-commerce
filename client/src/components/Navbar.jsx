import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import menu from '../assets/menu.svg';
import saved from '../assets/saved.svg';

export const Navbar = () => {

  const [menuClicked, setMenuClicked] = useState(false);  

  return (
    <div className='mt-[-3rem] lg:mt-[-5rem] h-[10rem] md:h-[8rem] lg:h-[10rem]
    2xl:h-[11rem]'
     id="container">
        <nav className='flex flex-row space-x-[3rem] p-4 w-[30rem] m-auto
        sm:w-[39rem] sm:space-x-[13rem] md:w-[47rem] md:space-x-[19rem]
        lg:w-[62rem] lg:space-x-[28rem] xl:w-[80rem] xl:space-x-[45rem]
        2xl:w-[94rem] 2xl:space-x-[58rem]'>
            <div className='flex flex-row md:space-x-[1rem]' id="nav-left-side">
                <div className='flex items-center pt-4 lg:pt-5' id="logo">
                    <button>
                        <Link to={'/'}>
                            <img src={logo} alt="logo" className='w-[10rem]
                            lg:w-[13rem] 2xl:w-[15rem] object-cover'/> 
                        </Link>
                    </button>
                </div>

                <div 
                className="flex space-x-5 md:space-x-7 lg:space-x-10 xl:text-[1rem] items-center"
                id="nav-items">
                    <button className='text-[#4b52a6] font-medium hover:text-blue-300
                    duration-100'>
                        Buy
                    </button>
                    <button className='text-[#4b52a6] font-medium
                    duration-100 hover:text-blue-300'>
                        How it works
                    </button>
                </div>
            </div>

            <div className='flex flex-row space-x-5 lg:space-x-9 items-center' id="nav-right-side">
                <div className='flex flex-row space-x-1' id="menu">
                    <div className='flex justify-center' id="menu-button">
                        <button
                        onClick={() => setMenuClicked(!menuClicked)}>
                            <img src={menu} alt="menu"  className='w-[1.5rem] hover:animate-pulse'/>
                        </button>
                    </div>

                    <div id="menu-text">
                        <button 
                        onClick={() => setMenuClicked(!menuClicked)}>
                            <h1 className='text-[.9rem] hover:cursor-pointer text-[#4b52a6] font-medium'>
                                Menu
                            </h1>
                        </button>
                        
                    </div>
                </div>
            </div>
        </nav>

        <div className={`flex justify-end p-8 m-auto mt-[-3.5rem] 
        ${menuClicked ? 'w-[30rem] opacity-100' : 'w-[12rem] opacity-0 pointer-events-none'}
        duration-500`}
         id="mobile-menu">
            <div className={`flex flex-col space-y-4 w-[11rem] font-medium
            relative top-[-3rem] left-[1.2rem] p-3 rounded-lg sm:left-[5.7rem]
            md:left-[9.8rem] lg:left-[15.8rem] xl:left-[24.6rem] 2xl:left-[32.7rem]
            lg:top-[-4rem] 2xl:top-[-5.5rem] bg-white z-[1000]`}
             id="buttons">
                <Link className='border-solid border-[1px] border-blue-700 rounded-md
                p-2 hover:bg-[#1d1d53] duration-150 hover:text-white text-center' to={'/login'}>
                    Sign in
                </Link>

                <Link to={'/sign-up'} className='bg-[#1d1d53] hover:text-black hover:border-[1px]
                rounded-md h-[2.5rem] hover:bg-white duration-150 hover:border-solid text-center 
                text-white hover:border-[#393939] flex justify-center items-center'>
                    Create an account
                </Link>
             </div>
        </div>
    </div>
  )
}
