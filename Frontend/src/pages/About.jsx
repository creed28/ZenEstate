import React from 'react';
import AboutImage from '../assets/img/about-image.jpg';
import Features1 from '../assets/img/features-1.jpeg';
import Features2 from '../assets/img/features-2.avif';
import Features3 from '../assets/img/features-3.avif';
import JoinUs from '../components//JoinUs';
import { CgScreen } from "react-icons/cg";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { RiCommunityLine } from "react-icons/ri";

const About = () => {
  return (
    <main className='flex flex-col gap-y-[3rem] pt-4'>
      <section className='flex items-center justify-center mx-auto'>
        <section className='flex gap-x-[8rem] items-center flex-col xl:flex-row'>
          <div className='hidden lg:flex mt-10 mr-5 highlight-image'>
            <img src={AboutImage} alt="Hero House Image" className='w-[650px] h-[450px]' />
          </div>
          <div className='max-w-[400px] flex flex-col gap-y-6 flex-1'>
            <h3 className='text-2xl lg:text-[35px] font-semibold leading-none'>
              About <span className='text-[#696969] text-[40px]'>ZenEstate</span>
            </h3>
            <p className='text-[#727272] text-[0.9rem]'>
              Welcome to ZenEstate, your trusted partner in real estate solutions. 
              We are committed to providing exceptional services to make your property 
              journey seamless and enjoyable.
            </p>
            <div className='flex gap-x-3 text-[1rem] bg-[#fffbfc] min-h-[35px]'>
              <div><span className='font-semibold text-[1.3rem]'>50k</span> Apartments</div>
              <div><span className='font-semibold text-[1.3rem]'>28k</span> Houses</div>
              <div><span className='font-semibold text-[1.3rem]'>90k</span> Customers</div>
            </div>
            <p className='text-[#727272] text-[0.9rem]'>
              Explore a diverse range of apartments tailored to your lifestyle and preferences. 
              Or find your dream home among our collection of houses designed to meet your unique needs.
              Join the growing community of satisfied customers who have entrusted us with their real estate needs.
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
        <div className='border border-1 border-primary-grey mt-[3rem]'></div>
        <section className='flex flex-col items-center justify-center'>
          <div className='max-w-[800px]'>
            <h3 className='uppercase text-xl lg:text-[20px] font-semibold leading-none pb-3'>Features</h3>
            <p className='text-[2.3rem] font-semibold leading-[50px]'>
              Everything you need in a modern real estate marketplace and more.
            </p>
          </div>
          <div className='flex mt-[4rem] gap-x-[6rem]'>
            <div className='hidden lg:flex mt-10 mr-5 w-7/12'>
              <img src={Features1} alt="" className='w-[700px] h-[450px]' />
            </div>
           <div className='flex justify-center flex-col gap-y-6 w-1/2'>
            <div className='bg-[#e5e5e5] w-14 h-14 rounded-full flex items-center justify-center'>
              <CgScreen size={30} />
            </div>
            <div className='flex flex-col justify-center'>
                <h4 className='text-xl lg:text-[20px] font-semibold leading-none pb-3'>
                  100% digital marketplace
                </h4>
                <p className='max-w-[400px] text-[#868686]'>
                  Experience the future of commerce with our 100% digital marketplace. We revolutionize the 
                  way you buy and sell, offering a seamless and efficient online platform for all your needs
                </p>
              </div>
           </div>
          </div>
          <div className='flex mt-[4rem] gap-x-[6rem]'>
            <div className='flex justify-center flex-col gap-y-6 w-1/2'>
              <div className='bg-[#e5e5e5] w-14 h-14 rounded-full flex items-center justify-center'>
                <HiArrowTrendingUp size={30} />
              </div>
              <div className='flex flex-col justify-center'>
                  <h4 className='text-xl lg:text-[20px] font-semibold leading-none pb-3'>100% risk free</h4>
                  <p className='max-w-[400px] text-[#868686]'>
                    Immerse yourself in the allure of exquisite properties, where each residence is a
                    masterpiece of comfort and style. Our commitment to quality and attention to detail 
                    ensures a seamless and rewarding real estate experience. Explore the possibilities, 
                    and let us guide you to the home you've always envisioned. Your journey to exceptional 
                    living starts here.
                  </p>
                </div>
            </div>
            <div className='hidden lg:flex mt-10 mr-5 w-7/12'>
                <img src={Features2} alt="" className='w-[650px] h-[450px]' />
            </div>
          </div>
          <div className='flex mt-[4rem] gap-x-[6rem]'>
            <div className='hidden lg:flex mt-10 mr-5 w-7/12'>
              <img src={Features3} alt="" className='w-[650px] h-[450px]' />
            </div>
            <div className='flex justify-center flex-col gap-y-6 w-1/2'>
              <div className='bg-[#e5e5e5] w-14 h-14 rounded-full flex items-center justify-center'>
                <RiCommunityLine size={30} />
              </div>
              <div className='flex flex-col justify-center'>
                  <h4 className='text-xl lg:text-[20px] font-semibold leading-none pb-3'>Community support</h4>
                  <p className='max-w-[400px] text-[#868686]'>
                    Embrace community living with unparalleled support! At ZenEstate, we understand that a 
                    home is not just a place; it's a community. Our commitment goes beyond properties; we 
                    foster a sense of belonging. Explore residences where neighbors become friends, and support 
                    is a cornerstone of the lifestyle we offer. 
                  </p>
                </div>
            </div>
          </div>
        </section>
        <JoinUs />
      </main>
  )
}

export default About