import React from 'react';
import logo from '../assets/logo.png';
import youtube from '../assets/youtube.svg';
import face from '../assets/facebook.svg';
import linkedin from '../assets/linkedin.svg';
import insta from '../assets/insta.svg';

export const Footer = () => {
  return (
    <div className='mt-[5.4rem] xl:mt-[5.4rem] bg-[#4688b1] 
    ' id='footer-container'>
        <div className='flex flex-row space-x-[5rem] md:space-x-[12rem] p-3 m-auto w-[30rem] md:w-[37rem]
        lg:w-[55rem] lg:space-x-[20rem] xl:space-x-[30rem] xl:w-[70rem]' id="footer-content">
            <div className='lg:flex lg:items-center' id="right-side-footer">
                <div className='lg:flex lg:flex-row lg:space-x-4 xl:space-x-[5rem]' id="carfit">
                    <div id="header-carfit">
                        <h4 className='text-[1.5rem] text-[#263771] font-bold tracking-widest
                        lg:text-[2.2rem]'>
                            Carfit
                        </h4>
                        <hr className='relative top-[.5rem] left-[.15rem] lg:hidden'/>
                    </div>

                    <div className='flex flex-col space-y-5 pt-4 p-1 lg:flex-row lg:space-y-0
                    lg:space-x-5' id="buttons-carfit">
                        <button className='text-start text-white  font-medium hover:text-[#4d4c4c]'>
                            Buy
                        </button>

                        <button className='text-start text-white font-medium hover:text-[#4d4c4c]'>
                            How it works
                        </button>
                    </div>
                </div>
            </div>

            <div id="left-side-footer">
                <div className='flex flex-row space-x-5' id="social-links">
                    <button><img src={youtube} alt="youtube" className='w-[2.2rem] hover:animate-bounce
                    '/></button>
                    <button><img src={insta} alt="insta" className='w-[3rem] hover:animate-bounce
                    '/></button>
                    <button><img src={face} alt="facebook" className='w-[2.9rem] hover:animate-bounce
                    '/></button>
                    <button><img src={linkedin} alt="linkedin" className='w-[3rem] hover:animate-bounce
                    '/></button>
                </div>

                <div className='text-[#d2d2d2] pt-[2rem]' id="copyrights">
                    <p className='tracking-wide'>Carfit 2023 • All rights reserved</p>
                </div>
            </div>
        </div>
    </div>
  )
}
