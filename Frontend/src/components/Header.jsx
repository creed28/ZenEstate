import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../assets/icons/logo.png';
import { useAuth } from '../hooks/useAuth';
import { FaUser } from 'react-icons/fa';

const Header = () => {
  const {auth, setAuth} = useAuth();

  const linksData = [
    { id: 1, to: '/', text: 'Home' },
    { id: 2, to: '/about', text: 'About' },
    { id: 3, to: '/properties', text: 'Properties' },
  ];

  const conditionalData = [
    {id: 1, to: '/create-property', text: 'Create Property', styling: 'hover:text-[#616161]'},
    {id: 2, to: '/contract-list', text: 'Contract List', styling: 'hover:text-[#616161]'},
    {id: 3, to: '', text: <>{<FaUser />}{auth.user}</>, 
      styling: 'text-[1.1rem] text-[black] flex items-center gap-x-1' }
  ]

  return (
    <header className='bg-primary-grey flex items-center justify-between py-3 px-20 border-b 
      border-[#dadada]'>
      <Link to={'/'}>
        <div className="flex justify-between items-center gap-2" 
          title='ZenEstate | Home'>
          <img src={Logo} alt="logo" className='w-[30px] h-[30px]' />
          <h1 className='font-primary text-[1.8rem]'>
            ZenEstate
          </h1>
        </div>
      </Link>
      <nav>
        <ul className='flex items-center gap-8 font-medium text-[15px]'>
          {linksData.map((item) =>
            <li key={item.id}>
              <Link key={item.id} to={item.to} className='hover:text-[#616161]'>
                  {item.text}
              </Link>
            </li>
          )}
          {auth.user && 
            conditionalData.map((item) =>
              <li key={item.id}>
                <Link key={item.id} to={item.to} className={item.styling}>
                    {item.text}
                </Link>
              </li>
            )
          }
          {auth.user ? 
            <button onClick={()=> {setAuth({});}} className='bg-[#525252] py-2 px-3 
              rounded-3xl text-[#f8f7f7] hover:bg-[#616161]'>
              Log Out
            </button> 
            : 
            <Link to={'/register'}>
              <li className='bg-[#525252] py-2 px-3 rounded-3xl 
                 text-[#f8f7f7] hover:bg-[#616161]'>
                Get Started
              </li>
            </Link>
          }
        </ul>
      </nav>
    </header>
  )
}

export default Header