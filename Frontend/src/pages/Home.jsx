import React from 'react';
import Image from '../assets/img/main-image.jpg';
import SectionImage from '../assets/img/section-image.avif'
import Search from '../components/Search';
import {Link} from 'react-router-dom';
import {useAuth} from '../hooks/useAuth';

const Home = () => {
  const {auth} = useAuth();

  return (
    <main>
      <section className='max-h-[545px] mb-8 xl:mb-18 bg-primary-grey'>
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
      <div className='flex flex-col gap-y-[3rem]'>
          <section className='flex items-center gap-x-[8rem] mx-auto'>
            <div className='max-w-[655px] pl-2'>
              <h3 className='text-3xl lg:text-[60px] font-semibold leading-[4.6rem]'>
                When <span className='highlight'>real estate</span> meets <span className='highlight'>minimalism</span>
              </h3>
              <Link to={'/about'} className='underline underline-offset-4 text-[#464646] cursor-pointer pt-4 
                flex items-center text-[1.1rem] font-semibold'>
                 Learn More
              </Link>
            </div>
            <div className='hidden lg:flex mt-10 mr-5'>
                <img src={SectionImage} alt="Hero House Image" className='w-[650px] h-[450px]' />
            </div>
          </section>
          <div className='border border-1 border-primary-grey mt-[3rem]'></div>
          <section>

          </section>
      </div>
     </main>
  )
}

export default Home