import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../assets/icons/logo.png';
import {
  FaInstagram, FaLinkedin, FaFacebook, FaYoutube
} from 'react-icons/fa';
 
const Footer = () => {
  return (
    <footer className='mt-5'>
      <section className='bg-primary-grey h-1/2 w-full flex md:flex-row flex-col 
        justify-around items-start p-20 pt-10'>
        <div className='p-5'>
          <ul>
            <Link to={'/'}>
              <div className="flex gap-x-1 items-center mb-2" 
                title='ZenEstate | Home'>
                <img src={Logo} alt="logo" className='w-[30px] h-[30px]' />
                <h2 className='font-semibold text-[1.8rem]'>
                  ZenEstate
                </h2>
              </div>
            </Link>
            <div className='flex gap-6 pb-5'>
              <FaYoutube className='text-2xl cursor-pointer hover:text-[red]' />
              <FaFacebook className='text-2xl cursor-pointer hover:text-[blue]' />
              <FaInstagram className='text-2xl cursor-pointer hover:text-[#a24da9]' />
              <FaLinkedin className='text-2xl cursor-pointer hover:text-[blue]' />
            </div>
          </ul>
        </div>
        <div className='p-5'>
          <ul>
            <p className='font-bold text-2xl pb-4'>Properties</p>
            <li className='text-md pb-2 font-semibold hover:text-[#616161] cursor-pointer'>
              Stocks
            </li>
            <li className='text-md pb-2 font-semibold hover:text-[#616161] cursor-pointer'>
              <Link to={'/our-agents'}>Our Agents</Link>
            </li>
            <li className='text-md pb-2 font-semibold hover:text-[#616161] cursor-pointer'>
              Features
            </li>
            <li className='text-md pb-2 font-semibold hover:text-[#616161] cursor-pointer'>
              Fixed Deposits
            </li>
          </ul>
        </div>
        <div className='p-5'>
            <ul>
              <p className='font-bold text-2xl pb-4'>Company</p>
              <li className='text-md pb-2 font-semibold hover:text-[#616161] cursor-pointer'>
                <Link to={'/about'}>About us</Link>
              </li>
              <li className='text-md pb-2 font-semibold hover:text-[#616161] cursor-pointer'>
                FAQs
              </li>
              <li className='text-md pb-2 font-semibold hover:text-[#616161] cursor-pointer'>
                Pricing
              </li>
              <li className='text-md pb-2 font-semibold hover:text-[#616161] cursor-pointer'>
                Careers
              </li>
              <li className='text-md pb-2 font-semibold hover:text-[#616161] cursor-pointer'>
                News & Updates
              </li>
            </ul>
        </div>
        <div className='p-5'>
            <ul>
              <p className='font-bold text-2xl pb-4'>Support</p>
              <li className='text-md pb-2 font-semibold hover:text-[#616161] cursor-pointer'>
                <Link to={'/contact'}>Contact</Link>
              </li>
              <li className='text-md pb-2 font-semibold hover:text-[#616161] cursor-pointer'>
                Support Portals
              </li>
              <li className='text-md pb-2 font-semibold hover:text-[#616161] cursor-pointer'>
                List of Charges
              </li>
              <li className='text-md pb-2 font-semibold hover:text-[#616161] cursor-pointer'>
                Downloads & Resources
              </li>
              <li className='text-md pb-2 font-semibold hover:text-[#616161] cursor-pointer'>
                Social Media
              </li>
            </ul>
          </div>
       </section>
       <section className='bg-[#d7d7d7]  flex flex-col justify-center items-center text-center p-5'>
        <p className='font-semibold'>
          &copy; {new Date().getFullYear()} All rights reserved 
          <span className='text-[1.2rem]'> |</span> Designed and Created by Hristo Zagorliev 
          <span className='text-[1.2rem]'> |</span> 
          <Link to={'/'} className='hover:text-[#616161] font-semibold cursor-pointer'> ZenEstate</Link>
        </p>
       </section>
    </footer>
  )
}

export default Footer