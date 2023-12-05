import React, {useState} from 'react';
import LoginImage from '../assets/img/login-image.avif';
import Logo from '../assets/icons/logo.png';
import { Link, useNavigate  } from 'react-router-dom';
import axios from '../api/axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try{
      const response = await axios.post('User/Register',
      JSON.stringify({name, email, phone, password}),
      {
        headers: {'Content-Type' : 'application/json'},
        withCredentials: true
      }
    );
      navigate("/login");
      console.log(JSON.stringify(response?.data));
    } catch(error){
      if(!error?.response){
        setErrorMsg('No response');
      }else if(error.response?.status === 400){
        setErrorMsg('Missing info');
      }else if(error.response?.status === 401){
        setErrorMsg('Unathorized');
      }else{
        setErrorMsg('Error');
      }
    }
  }

  return (
    <main className='w-full h-screen flex items-start'>
      <section className='w-1/2 h-full flex flex-col'>
        <div className='absolute top-[14%] left-[5%] flex flex-col'>
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
            <h3 className='text-3xl font-semibold mb-2'>Register</h3>
            <p className='text-base mb-2'>Welcome, become a new member by entering your details.</p>
          </div>

          <form className='w-full flex flex-col'>
            <input className='w-full text-[black] py-2 my-2 bg-[transparent] border-b 
              border-[black] outline-none focus:outline-none' 
            placeholder='Name'
            type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <input className='w-full text-[black] py-2 my-2 bg-[transparent] border-b 
              border-[black] outline-none focus:outline-none' 
            placeholder='Email'
            type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input className='w-full text-[black] py-2 my-2 bg-[transparent] border-b 
              border-[black] outline-none focus:outline-none' 
            placeholder='Phone'
            type="phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
            <input className='w-full text-[black] py-2 my-2 bg-[transparent] border-b 
              border-[black] outline-none focus:outline-none' 
            placeholder='Password'
            type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </form>

          <div className='w-full flex items-center justify-between'>
            <div className='w-full flex items-center'>
              <input type="checkbox" className='w-4 h-4 mr-2' />
              <p className='text-sm'>Remember Me</p>
            </div>
          </div>

          <div className='w-full flex flex-col my-4'>
            <button onClick={() => handleSubmit()} className='w-full bg-text-color text-[white] 
            rounded-md p-4 my-2 font-semibold text-center flex items-center justify-center'>
             Register
            </button>
          </div>
        </div>

        <div className='w-full flex items-center justify-center'>
          <p className='text-sm font-normal text-[black]'>Already have an account?&nbsp;  
            <Link to={'/login'} className='font-semibold underline underline-offset-2 cursor-pointer'>
              Login
            </Link>
          </p>
        </div>
      </section>
      <p aria-live='assertive'>{errorMsg}</p>
    </main>
  )
}

export default Register