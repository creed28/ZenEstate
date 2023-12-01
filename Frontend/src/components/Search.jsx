import React, { useContext } from 'react';
import CityDropdown from './CityDropdown';
import PriceRangeDropdown from './PriceRangeDropdown';
import PropertyDropdown from './PropertyDropdown';
import {RiSearch2Line} from 'react-icons/ri';
import { HouseContext } from '../contexts/HouseContext';
import { useNavigate } from "react-router-dom";

const Search = () => {
  const {handleClick} = useContext(HouseContext);
  const navigate = useNavigate();

  const onClick = () => {
    handleClick();
    navigate('/properties');
  }

  return (
    <div className='px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between 
      gap-4 lg:gap-x-3 relative lg:top-4 lg:shadow-1 bg-primary-grey 
      lg:bg-[#dadada] lg:backdrop-blur rounded-lg z-10'>
      <CityDropdown />
      <PropertyDropdown />
      <PriceRangeDropdown />
      <button onClick={() => onClick()} className='bg-text-color hover:bg-[#616161] 
        transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center
        items-center text-[white] text-lg'>
        <RiSearch2Line />
      </button>
    </div>
  )
}

export default Search