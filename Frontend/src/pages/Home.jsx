import React from 'react';
import Image from '../assets/img/main-image.jpg';
import Search from '../components/Search';

const Home = () => {
  return (
   <section className='h-full max-h-[640px] mb-8 xl:mb-24 bg-primary-grey'>
    <div className='flex flex-col lg:flex-row'>
      <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
        <h1 className='uppercase text-4xl lg:text-[58px] font-semibold leading-none mb-6 '>Meet <span className='text-[#616161]'>Your</span> New Home</h1>
        <p className='max-w-[480px] mb-8 pl-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At placeat quasi quos dignissimos sequi tempore, impedit vitae dolore ex molestiae, corrupti quam tenetur reiciendis quod. Recusandae doloribus tempore et similique?</p>
      </div>
      <div className='hidden flex-1 lg:flex justify-end items-end mt-10'>
        <img src={Image} alt="" />
      </div>
    </div>
    <Search />
   </section>
  )
}

export default Home