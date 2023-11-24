import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../assets/icons/logo.png';
import { TiArrowSortedDown } from "react-icons/ti";

const Header = () => {
  return (
    <header className='bg-primary-grey flex items-center justify-between py-3 px-20'>
      <Link to={'/'}>
        <div className="flex justify-between items-center gap-2">
          <img src={Logo} alt="logo" className='w-[30px] h-[30px]' />
          <h1 className='font-primary text-[2rem]'>
            ZenEstate
          </h1>
        </div>
      </Link>
      <nav>
        <ul className='flex items-center gap-8 font-medium text-[15px]'>
          <li><Link to={'/about'}>About us</Link></li>
          <li>
            <Link to={'/our-agents'} className='flex items-center gap-1'>
              Our Agents <TiArrowSortedDown className='mt-1' />
            </Link>
          </li>
          <li><Link to={'/contact'}>Contact</Link></li>
          <li className='bg-[#525252] py-2 px-3 rounded-3xl text-[#f8f7f7]'>
            <Link to={'/register'}>Get Started</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header