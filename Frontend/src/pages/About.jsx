import React from 'react';
import AboutImage from '../assets/img/about-image.jpg';

const About = () => {
  return (
    <section className='flex items-center justify-center mx-auto' id='about'>
            <section className='flex gap-x-[8rem] items-center flex-col xl:flex-row'>
              <div className='hidden lg:flex mt-10 mr-5 highlight-image'>
                <img src={AboutImage} alt="Hero House Image" className='w-[650px] h-[450px]' />
              </div>
              <div className='mb-20 max-w-[400px] flex flex-col gap-y-6 flex-1'>
                <h3 className='text-2xl lg:text-[35px] font-semibold leading-none'>
                  About <span className='text-[#696969] text-[40px]'>ZenEstate</span>
                </h3>
                <p className='text-[#727272] text-[0.9rem]'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, cumque? Soluta fuga, 
                  eos similique, eligendi consectetur optio labore quis iure officia possimus saepe fugit!
                   Inventore voluptate iste voluptatum nihil alias?
                </p>
                <div className='flex gap-x-3 text-[1rem] bg-[#fffbfc] min-h-[35px]'>
                  <div><span className='font-semibold text-[1.3rem]'>50k</span> Apartments</div>
                  <div><span className='font-semibold text-[1.3rem]'>28k</span> Houses</div>
                  <div><span className='font-semibold text-[1.3rem]'>90k</span> Customers</div>
                </div>
                <p className='text-[#727272] text-[0.9rem]'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias cupiditate doloribus 
                  assumenda sed voluptatum quas sit consequuntur deserunt.
                </p>
                <div>
                <button className='border border-1 text-[1.2rem] py-2 px-4 rounded-[5px]
                  hover:border-[#616161] hover:text-[#616161] flex justify-start'>
                  Explore More
                </button>
                </div>
              </div>
            </section>
          </section>
  )
}

export default About