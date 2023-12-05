import React from 'react';
import Image from '../assets/img/main-image.jpg';
import AboutImage from '../assets/img/about-image.jpg';
import SectionImage from '../assets/img/section-image.avif'
import Search from '../components/Search';
import {Link} from 'react-router-dom';
import {useAuth} from '../hooks/useAuth';

const Home = () => {
  const {auth} = useAuth();

  return (
    <main>
      <section className='max-h-[545px] mb-8 xl:mb-20 bg-primary-grey'>
          <div className='flex flex-col lg:flex-row'>
            <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center 
            lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
              <h2 className='uppercase text-4xl lg:text-[58px] font-semibold leading-none mb-3'>
                Meet <span className='text-[#616161]'>Your </span> 
                New Home<span className='text-[#616161]'>.</ span>
              </h2>
              <p className='max-w-[480px] mb-5 pl-2'>
                Finding the perfect place to call home can be both an exciting and challenging journey. 
                Our mission is to simplify this process for you by offering a curated selection of  homes 
                that match your unique preferences and lifestyle. Whether you're searching for a cozy apartment,
                or a spacious house, we have a diverse range of options to explore.
              </p>
              {auth.user ? 
                <h3 className='pl-4 text-3xl lg:text-[45px] font-semibold leading-none'>
                  Hello, <span className='text-[#616161]'>{auth.user}</span>
                </h3>
                : 
                <Link to={'/register'} className='bg-[#525252] text-[1.2rem] py-2 px-5 rounded-3xl 
                text-[#f8f7f7] hover:bg-[#616161] ml-2'>Get Started</Link>
              }
            </div>
           <div className='hidden flex-1 lg:flex justify-end items-end mt-10 mr-5'>
              <img src={Image} alt="Hero House Image" className='w-[650px]' />
            </div>
          </div>
        <Search />
      </section>
      <div className='flex flex-col gap-y-[5rem]'>
          <section className='flex items-center gap-x-[8rem] mx-auto'>
            <div className='max-w-[655px]'>
              <h3 className='text-3xl lg:text-[60px] font-semibold leading-[4.6rem]'>
                When <span className='highlight'>real estate</span> meets <span className='highlight'>minimalism</span>
              </h3>
              <p className='underline underline-offset-4 text-[#464646] cursor-pointer pt-4 flex items-center text-[1.1rem] font-semibold'>
                  Learn More <span className='text-[1.5rem] pb-[5px]'>↓</span>
              </p>
            </div>
            <div className='hidden lg:flex mt-10 mr-5'>
                <img src={SectionImage} alt="Hero House Image" className='w-[650px] h-[450px]' />
            </div>
          </section>
          <div className='border border-1 border-primary-grey mt-[3rem]'></div>
          <section className='flex items-center justify-center mx-auto'>
            <section className='flex gap-x-[8rem] items-center flex-col xl:flex-row'>
              <div className='hidden lg:flex mt-10 mr-5 highlight-image'>
                <img src={AboutImage} alt="Hero House Image" className='w-[650px] h-[450px]' />
              </div>
              <div className='mb-20 max-w-[400px] flex flex-col gap-y-6 flex-1'>
                <h3 className='text-2xl lg:text-[35px] font-semibold leading-none'>
                  About <span className='text-[#696969] text-[40px]'>ZenEstate</span>
                </h3>
                <p className='text-[#727272] text-[0.9rem]'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, cumque? Soluta fuga, eos similique, eligendi consectetur optio labore quis iure officia possimus saepe fugit! Inventore voluptate iste voluptatum nihil alias?
                </p>
                <div className='flex gap-x-3 text-[1rem] bg-[#fffbfc] min-h-[35px]'>
                  <div><span className='font-semibold text-[1.3rem]'>50k</span> Apartments</div>
                  <div><span className='font-semibold text-[1.3rem]'>28k</span> Houses</div>
                  <div><span className='font-semibold text-[1.3rem]'>90k</span> Customers</div>
                </div>
                <p className='text-[#727272] text-[0.9rem]'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias cupiditate doloribus assumenda sed voluptatum quas sit consequuntur deserunt.
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
      </div>
     </main>
  )
}

export default Home