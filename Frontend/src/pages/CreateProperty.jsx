import React, { useState } from 'react';
import LoginImage from '../assets/img/login-image.avif';
import Logo from '../assets/icons/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../api/axios';

const CreateProperty = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [bathrooms, setBathrooms] = useState(0);
  const [bedrooms, setBedrooms] = useState(0);
  const [area, setArea] = useState(0);
  const [price, setPrice] = useState(0);
  const [year, setYear] = useState(0);
  const [type, setType] = useState('');
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState('');
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImageName(file.name);
  };

  const handleSubmit = async () => {
    try {
      const data = new FormData();
      data.append('name', name);
      data.append('description', description);
      data.append('type', type);
      data.append('city', city);
      data.append('address', address);
      data.append('bathrooms', bathrooms);
      data.append('bedrooms', bedrooms);
      data.append('constructionYear', year);
      data.append('price', price);
      data.append('area', area);
      data.append('imageFile', image);
      data.append('imageName', imageName);

      await axios.post('/Property/CreateProperty', data);
      navigate('/properties');
    } catch (err) {
      console.log(err);
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
            <h3 className='text-3xl font-semibold mb-2'>Login</h3>
            <p className='text-base mb-2'>Welcome Back! Please enter your details.</p>
          </div>

          <form className='w-full flex flex-col'>
            <input className='w-full text-[black] py-2 my-2 bg-[transparent] border-b border-[black]
             outline-none focus:outline-none' 
            placeholder='Email'
            type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <input className='w-full text-[black] py-2 my-2 bg-[transparent] border-b border-[black]
             outline-none focus:outline-none' 
            placeholder='Password'
            type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
             <input className='w-full text-[black] py-2 my-2 bg-[transparent] border-b border-[black]
             outline-none focus:outline-none' 
            placeholder='Email'
            type="text" value={city} onChange={(e) => setCity(e.target.value)} />
             <input className='w-full text-[black] py-2 my-2 bg-[transparent] border-b border-[black]
             outline-none focus:outline-none' 
            placeholder='Email'
            type="email" value={address} onChange={(e) => setAddress(e.target.value)} />
             <input className='w-full text-[black] py-2 my-2 bg-[transparent] border-b border-[black]
             outline-none focus:outline-none' 
            placeholder='Email'
            type="number" value={area} onChange={(e) => setArea(e.target.value)} />
             <input className='w-full text-[black] py-2 my-2 bg-[transparent] border-b border-[black]
             outline-none focus:outline-none' 
            placeholder='Email'
            type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
             <input className='w-full text-[black] py-2 my-2 bg-[transparent] border-b border-[black]
             outline-none focus:outline-none' 
            placeholder='Email'
            type="number" value={year} onChange={(e) => setYear(e.target.value)} />
             <input className='w-full text-[black] py-2 my-2 bg-[transparent] border-b border-[black]
             outline-none focus:outline-none' 
            placeholder='Email'
            type="file" onChange={handleImageChange} />
             <input className='w-full text-[black] py-2 my-2 bg-[transparent] border-b border-[black]
             outline-none focus:outline-none' 
            placeholder='Email'
            type="number" value={bathrooms} onChange={(e) => setBathrooms(e.target.value)} />
             <input className='w-full text-[black] py-2 my-2 bg-[transparent] border-b border-[black]
             outline-none focus:outline-none' 
            placeholder='Email'
            type="number" value={bedrooms} onChange={(e) => setBedrooms(e.target.value)} />
            <div>
              <input checked={type === 'house'} type="radio" name='type' value='house' id='house' 
              onChange={e => setType(e.target.value)} />
              <label htmlFor="house">House</label>
              <input checked={type === 'apartment'} type="radio" name='type' value='apartment' id='apartment' 
              onChange={e => setType(e.target.value)} />
              <label htmlFor="apartment">Apartment</label>
            </div>
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
            <button onClick={() => handleSubmit()} className='w-full bg-text-color text-[white] 
            rounded-md p-4 my-2 font-semibold text-center flex items-center justify-center'>
              Create Property
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default CreateProperty