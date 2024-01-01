import React, { useState } from 'react';
import logo from '../assets/logo.png';
import google from '../assets/google.svg';
import face from '../assets/facebookk.svg';
import { Link, useNavigate } from 'react-router-dom';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [user, setUser] = useState(true);
  const navigate = useNavigate();
  const [validEmail, setValidEmail] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);
  const [validPass, setValidPass] = useState(true);

  const handleEmail = () => {
    const emailRegex = /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/;
    const validCheck = emailRegex.test(email);

    setValidEmail(validCheck);

    setIsEmpty(email.trim('') === '');
  }

  const handlePass = () => {
    if (pass.length < 3) {
        setValidPass(false);
    } else {
        setValidPass(true);
    }
  }

  const handleLogin = async () => {
    try {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, pass: pass})
        })

        if (response.ok) {
            console.log('Login successful!');
            navigate('/');
            setUser(true);
        } else {
            console.error('Login failed!', await response.text());
            setUser(false);
        }
    } catch (error) {
        console.error('Error during login:', error)
    }
  }

  return (
    <div className='pb-[2.15rem] lg:pb-[2.5rem]' id='container-wrapper'>
        <div className='w-[30rem] m-auto' id="sign-up-content">
            <div className='flex items-center justify-center pl-6' id='sign-up-logo'>
                <Link to={'/'}>
                    <img src={logo} alt="logo" />
                </Link>
            </div>

            <div className='text-center tracking-wide relative top-[-2.5rem] text-[#2a4289]
            font-medium' id="header">
                <h1>Login to your account</h1>
            </div>

            <div id="form-wrapper">
                <div className='flex flex-row space-x-5 p-[.2rem]' id="social-login-buttons">
                    <div className='' id="google-login">
                        <button className='flex flex-row items-center space-x-2 bg-[#1a305b]
                        w-[14.2rem] h-[2.9rem] rounded-md justify-center hover:bg-[#2b3e75]
                        duration-100 active:bg-gray-500'>
                            <img src={google} alt="google"  className='w-[1.5rem]'/>

                            <div className='text-center text-[#ffffff] font-medium' id="text-google">
                                Login with Google
                            </div>
                        </button>
                    </div>

                    <div className='' id="facebook-login">
                        <button className='flex flex-row items-center space-x-2 bg-[#1a305b]
                        w-[14.2rem] h-[2.9rem] rounded-md justify-center hover:bg-[#2b3e75]
                        duration-100 active:bg-gray-500'>
                            <img src={face} alt="facebook"  className='w-[1.5rem]'/>

                            <div className='text-center text-[#ffffff] font-medium' id="text-google">
                                Login with Facebook
                            </div>
                        </button>
                    </div>
                </div>

                <div className='flex justify-center relative top-[2rem]' id="or-text">
                    <h4>
                        <span className='relative top-[-.25rem] text-[#d5d4d4] pointer-events-none'>
                            _________________________
                        </span>

                        <span className='p-4 font-medium text-[#727272] tracking-wider'>or</span> 

                        <span className='relative top-[-.25rem] text-[#d5d4d4] pointer-events-none'>
                            _________________________
                        </span>
                    </h4>
                </div>

                <div className='flex flex-col justify-center items-center mt-[3rem] 
                w-[24rem] m-auto p-5 rounded-md space-y-10'
                id="sign-up-inputs">
                    <div className='flex flex-col space-y-2' id="email-input">
                        <label className='tracking-wide text-[#475f90] font-medium' htmlFor="email">
                            Email
                        </label>

                        <input
                        onBlur={handleEmail}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`border-solid border-[1px] border-[#cecdcd] w-[15rem] h-[2.5rem]
                        rounded-md pl-2 focus:outline-none hover:border-gray-500 duration-150
                        ${isEmpty || !validEmail ? 'border-red-600 hover:border-red-600' : ''}`}
                        id='email' type="text" placeholder='example@gmail.com'/>

"                   <div
                        className={`${isEmpty || !validEmail ? 'block' : 'hidden'}`}
                        id="email-error">
                            <h4 className='text-red-600 text-sm font-medium absolute'>
                                Enter a valid email
                            </h4>
                        </div>
                    </div>

                    <div className='flex flex-col space-y-2' id="password-input">
                        <label className='tracking-wide text-[#475f90] font-medium' htmlFor="password">
                            Password
                        </label>

                        <input
                        onBlur={handlePass}
                        onChange={(e) => setPass(e.target.value)}
                        className={`border-solid border-[1px] border-[#cecdcd] w-[15rem] h-[2.5rem]
                        rounded-md pl-2 focus:outline-none hover:border-gray-600 duration-150
                        focus:border-gray-500 ${!validPass ? 'border-red-600 hover:border-red-600 focus:border-red-600' :
                        ''}`}
                        id='password' type="password" placeholder='Enter your password'/>

                        <div className={`${!validPass ? 'block' : 'hidden'}`} 
                        id="pass-error">
                            <h4 className='text-red-600 font-medium text-sm absolute'>
                                Please enter a longer password
                            </h4>
                        </div>
                    </div>

                    <div className='pt-2' id="sign-up-button">
                        <button 
                        onClick={handleLogin}
                        className='bg-blue-700 border-solid border-blue-400 border-[1px]
                        w-[6.5rem] h-[2.5rem] rounded-lg text-[white] font-medium hover:bg-blue-500
                        duration-300 active:bg-gray-500' type='submit'>
                            Sign in
                        </button>
                    </div>

                    <div className={`${!user ? 'block' : 'hidden'} absolute top-[42rem]`} id="login-error">
                        <h4 className='text-sm text-red-600 font-medium'>
                            You have entered an incorrect email or password
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
