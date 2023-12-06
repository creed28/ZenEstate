import React, { useContext, useState } from 'react';
import CreatePropertyImage from '../assets/img/create-page-photo.jpg';
import Logo from '../assets/icons/logo.png';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';
import {useAuth} from '../hooks/useAuth';
import { HouseContext } from '../contexts/HouseContext';

const CreateProperty = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [area, setArea] = useState('');
  const [price, setPrice] = useState('');
  const [year, setYear] = useState('');
  const [type, setType] = useState('');
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState('');
  const [errors, setErrors] = useState('');
  const {auth} = useAuth();
  const navigate = useNavigate();
  const{updateQuery, getRandomImage} = useContext(HouseContext);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImageName(file.name);
  };

  const handleSubmit = async () => {
    try {
      
      if (isNaN(area) || area <= 0) {
        setErrors('Area must be a positive number');
        return;
      }
  
      if (isNaN(price) || price <= 0) {
        setErrors('Price must be a positive number');
        return;
      }
  
      if (isNaN(year) || year <= 0) {
        setErrors('Year must be a positive number');
        return;
      }
  
      if (isNaN(bathrooms) || bathrooms <= 0) {
        setErrors('Bathrooms must be a positive number');
        return;
      }
  
      if (isNaN(bedrooms) || bedrooms <= 0) {
        setErrors('Bedrooms must be a positive number');
        return;
      }

      if (!name || !city || !address || !price || !year || !bathrooms || !area || 
        !bedrooms || !type || !image) {
        setErrors('*All fields are required');
        return;
      }

      const data = new FormData();
      data.append('ownerId', auth.userId);
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
      data.append('imageName', getRandomImage());

      //await axios.post('/Property/CreateProperty', data);
      await axios.post('/Contract/CreateContract', data);
      updateQuery();
      navigate('/properties');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <main className='w-full h-screen flex items-start'>
      <section className='w-1/2 h-full flex flex-col'>
        <div className='absolute top-[14%] left-[5%] flex flex-col'>
          <h1 className='text-4xl text-[white] text-center font-bold my-4'>Help Others Find Their Home</h1>
          <p className='text-xl text-[white] font-normal'>List a Property of Your Own And Join Our Community.</p>
        </div>
        <img src={CreatePropertyImage} className='w-full h-full object-cover' alt="" />
      </section>

      <section className='w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20 justify-between items-center'>
        <div className='flex justify-between items-center gap-2'>
          <img src={Logo} alt="" className='w-[35px] h-[35px]'  />
         <h2 className='text-3xl font-semibold'>ZenEstate</h2>
        </div>
        <p className='text-[red] text-sm mt-1'>{errors}</p>
        <div className='w-full flex flex-col justify-center max-w-[550px]'>
          <form className='w-full flex flex-col'>
            <input className='w-full text-[black] py-2 my-2 bg-[transparent] border-b border-[black]
             outline-none focus:outline-none' 
            placeholder='Name'
            type="text" value={name} onChange={(e) => setName(e.target.value)} />
             <input className='w-full text-[black] py-2 my-2 bg-[transparent] border-b border-[black]
             outline-none focus:outline-none' 
            placeholder='City'
            type="text" value={city} onChange={(e) => setCity(e.target.value)} />
             <input className='w-full text-[black] py-2 my-2 bg-[transparent] border-b border-[black]
             outline-none focus:outline-none' 
            placeholder='Address'
            type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
             <input className='w-full text-[black] py-2 my-2 bg-[transparent] border-b border-[black]
             outline-none focus:outline-none' 
            placeholder='Price'
            type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
             <input className='w-full text-[black] py-2 my-2 bg-[transparent] border-b border-[black]
             outline-none focus:outline-none' 
            placeholder='Year'
            type="number" value={year} onChange={(e) => setYear(e.target.value)} />
             <input className='w-full text-[black] py-2 my-2 bg-[transparent] border-b border-[black]
             outline-none focus:outline-none' 
            placeholder='Bathrooms'
            type="number" value={bathrooms} onChange={(e) => setBathrooms(e.target.value)} />
            <input className='w-full text-[black] py-2 my-2 bg-[transparent] border-b border-[black]
             outline-none focus:outline-none' 
            placeholder='Area'
            type="number" value={area} onChange={(e) => setArea(e.target.value)} />
             <input className='w-full text-[black] py-2 my-2 bg-[transparent] border-b border-[black]
             outline-none focus:outline-none' 
            placeholder='Bedrooms'
            type="number" value={bedrooms} onChange={(e) => setBedrooms(e.target.value)} />
            <div className='flex gap-x-4'>
              <div className='flex justify-center items-center gap-x-2'>
                <input checked={type === 'house'} type="radio" name='type' value='house' id='house' 
                onChange={e => setType(e.target.value)} className='pt-3' />
                <label htmlFor="house">House</label>
              </div>
              <div className='flex justify-center items-center gap-x-2'>
                <input checked={type === 'apartment'} type="radio" name='type' value='apartment' id='apartment' 
                onChange={e => setType(e.target.value)} className='pt-3' />
                <label htmlFor="apartment">Apartment</label>
              </div>
            </div>
            <textarea className='w-full text-[black] py-2 my-2 bg-[transparent] border-b border-[black]
             outline-none focus:outline-none resize-none overflow-y-scroll' 
            placeholder='Description'
            type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            <input className='w-full text-[black] py-2 my-2 bg-[transparent]
             outline-none focus:outline-none' type="file" onChange={handleImageChange} />
          </form>

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