import React from 'react';
import Image from '../assets/img/main-image.jpg';
import Search from '../components/Search';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
   <section className='h-full max-h-[640px] mb-8 xl:mb-24 bg-primary-grey'>
    <div className='flex flex-col lg:flex-row'>
      <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center 
        lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
        <h1 className='uppercase text-4xl lg:text-[58px] font-semibold leading-none mb-3'>
          Meet <span className='text-[#616161]'>Your </span> 
          New Home<span className='text-[#616161]'>.</span>
        </h1>
        <p className='max-w-[480px] mb-5 pl-2'>
          Finding the perfect place to call home can be both an exciting and challenging journey. 
          Our mission is to simplify this process for you by offering a curated selection of homes 
          that match your unique preferences and lifestyle. Whether you're searching for a cozy apartment,
          or a spacious house, we have a diverse range of options to explore.
        </p>
        <Link to={'/register'} className='bg-[#525252] text-[1.2rem] py-2 px-5 rounded-3xl 
            text-[#f8f7f7] hover:bg-[#616161] ml-2'>Get Started</Link>
      </div>
      <div className='hidden flex-1 lg:flex justify-end items-end mt-10 mr-5'>
        <img src={Image} alt="Hero House Image" className='w-[650px]' />
      </div>
    </div>
    <Search />
   </section>
  )
}

export default Home