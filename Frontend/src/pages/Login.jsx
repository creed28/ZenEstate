import React from 'react';
import LoginImage from '../assets/img/login-image.avif';
import Logo from '../assets/icons/logo.png';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <main className='w-full h-screen flex items-start'>
      <section className='w-1/2 h-full flex flex-col'>
        <div className='absolute top-[19%] left-[10%] flex flex-col'>
          <h1 className='text-4xl text-[white] text-center font-bold my-4'>Find Your Dream Home Today</h1>
          <p className='text-xl text-[white] font-normal'>Start for free and browse through the best offers 
          from +90k customers.</p>
        </div>
        <img src={LoginImage} className='w-full h-full object-cover' alt="" />
      </section>

      <section className='w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20 justify-between items-center'>
        <div className='flex justify-between items-center gap-2'>
          <img src={Logo} alt="" className='w-[35px] h-[35px]'  />
         <h2 className='text-3xl font-semibold'>ZenEstate</h2>
        </div>

        <div className='w-full flex flex-col justify-center max-w-[550px]'>
          <div className='flex flex-col w-full mb-2'>
            <h3 className='text-3xl font-semibold mb-2'>Login</h3>
            <p className='text-base mb-2'>Welcome Back! Please enter your details.</p>
          </div>

          <form className='w-full flex flex-col'>
            <input className='w-full text-[black] py-2 my-2 bg-[transparent] border-b border-[black]
             outline-none focus:outline-none' 
            placeholder='Email'
            type="email" />
            <input className='w-full text-[black] py-2 my-2 bg-[transparent] border-b border-[black]
             outline-none focus:outline-none' 
            placeholder='Password'
            type="password" />
          </form>

          <div className='w-full flex items-center justify-between'>
            <div className='w-full flex items-center'>
              <input type="checkbox" className='w-4 h-4 mr-2' />
              <p className='text-sm'>Remember Me</p>
            </div>

            <p className='text-sm cursor-pointer underline underline-offset-2 font-medium whitespace-nowrap'>
              Forgot Password?</p>
          </div>

          <div className='w-full flex flex-col my-4'>
            <button className='w-full bg-text-color text-[white] rounded-md p-4 my-2 font-semibold
             text-center flex items-center justify-center'>
              Log in
            </button>
          </div>
        </div>

        <div className='w-full flex items-center justify-center'>
          <p className='text-sm font-normal text-[black]'>Don't have an account? <Link to={'/register'} 
          className='font-semibold underline underline-offset-2 cursor-pointer'>Sign Up for free</Link></p>
        </div>
      </section>
    </main>
  )
}

export default Login