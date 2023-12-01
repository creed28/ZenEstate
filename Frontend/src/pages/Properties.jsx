import React, {useContext} from 'react';
import CityDropdown from '../components/CityDropdown';
import PropertyDropdown from '../components/PropertyDropdown';
import PriceRangeDropdown from '../components/PriceRangeDropdown';
import PropertyList from '../components/PropertyList';
import SortDropdown from '../components/SortDropdown';
import {MdFilterAlt} from 'react-icons/md';
import {RiSearch2Line} from 'react-icons/ri';
import { HouseContext } from '../contexts/HouseContext';

const Properties = () => {
    const {handleClick} = useContext(HouseContext);
  return (
    <section className="flex">
      <div className="bg-[#fcfcfc] w-1/4 p-4 flex flex-col gap-y-2 fixed mt-10 ml-3
        h-[420px] rounded-lg border">
        <div className='flex items-center text-[2rem] font-semibold'>
            <MdFilterAlt />
            <span className='text-[1.8rem]'>Filters</span>
        </div>
        <div className='flex flex-col items-center gap-y-6'>
            <CityDropdown />
            <PropertyDropdown />
            <PriceRangeDropdown />
            <button onClick={() => handleClick()} className='bg-text-color hover:bg-[#616161] 
                transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center
                items-center text-[white] text-lg'>
                <RiSearch2Line />
            </button>
        </div>
      </div>
      <div className="w-3/4 p-4 ml-auto overflow-y-auto mt-2">
        <div className="p-4 mb-4 flex items-center gap-x-2 ml-6">
          Sort by
          <SortDropdown />
        </div>
        <PropertyList />
      </div>
    </section>
  );
};

export default Properties;