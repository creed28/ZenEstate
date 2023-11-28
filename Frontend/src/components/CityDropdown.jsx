import React, {useState, useEffect, useContext} 
from 'react';
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine} from 'react-icons/ri';
import { Menu } from '@headlessui/react';
import {HouseContext} from '../contexts/HouseContext';

const CityDropdown = () => {
  const {city, setCity, cities} = useContext(HouseContext);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button onClick={() => setIsOpen(!isOpen)} className='dropdown-btn w-full text-left'>
        <RiMapPinLine className='dropdown-icon-primary'   />
        <div>
          <div className='text-[15px] font-medium leading-tight'>{city}</div>
          <div className='text-[13px]'>Select city</div>
        </div>
        {
          isOpen ? (
            <RiArrowUpSLine className='dropdown-icon-secondary' />
          ) : (
            <RiArrowDownSLine className='dropdown-icon-secondary' />
          )
        }
      </Menu.Button> 

      <Menu.Items className='dropdown-menu' as='ul'>
        {cities.map((city, index) => {
          return(
            <Menu.Item 
              onClick={() => setCity(city)}
              className='cursor-pointer hover:text-[#616161] transition' as='li' key={index}>
              {city}
            </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  )
}

export default CityDropdown