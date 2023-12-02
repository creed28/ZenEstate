import React, {
  useState, useEffect, useContext, useRef
} from 'react';
import { RiWallet3Line, RiArrowDownSLine, RiArrowUpSLine} from 'react-icons/ri';
import { Menu } from '@headlessui/react';
import {HouseContext} from '../contexts/HouseContext';

const PriceRangeDropdown = () => {
  const {
    price, setPrice, minPrice, maxPrice, setMinPrice, setMaxPrice
  } = useContext(HouseContext);

  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(false);

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if((minPrice != '' && minPrice > 0) && (maxPrice == 0 || maxPrice === '')){
      setMaxPrice('');
      setPrice("Max price can't be less than Min price!");
      setError(true);
      return;
    }

    if((minPrice == 0 || minPrice === '') && (maxPrice == 0 || maxPrice === '')){
      setPrice('Price range (any)');
      setIsOpen(false);
      setError(false);
      return;
    }

    if(minPrice < 0 || maxPrice < 0){
      setPrice("Price can't be less than 0!");
      setError(true);
      return;
    }

    if(parseInt(minPrice) >= parseInt(maxPrice)){
      setPrice("Max price can't be less or equal to Min price!");
      setError(true);
      return;
    }

    if(minPrice === ''){
      setPrice(`0BGN - ${maxPrice}BGN`);
      setIsOpen(false);
      setError(false);
      return;
    }

    setPrice(`${minPrice}BGN - ${maxPrice}BGN`);
    setError(false);
    setIsOpen(false);
  };

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
      setPrice('Price range (any)');
    };
  }, []);
  
  return (
    <Menu as='div' className='dropdown relative' ref={dropdownRef}>
      <Menu.Button onClick={() => setIsOpen(!isOpen)} className='dropdown-btn w-full text-left'>
        <RiWallet3Line className='dropdown-icon-primary'   />
        <div>
        <div
          className={`text-[15px] font-medium leading-tight ${
          error ? 'text-[red]' : ''
        }`}>
          {price}
        </div>
          <div className='text-[13px]'>Choose prince range</div>
        </div>
        {
          isOpen ? (
              <RiArrowUpSLine className='dropdown-icon-secondary' />
            ) : (
              <RiArrowDownSLine className='dropdown-icon-secondary' />
          )
        }
      </Menu.Button> 

      {isOpen && (
          <form className='dropdown-menu space-y-4 flex flex-col justify-center' 
            onSubmit={handleSubmit}>
              <input
                type="number"
                id="minPrice"
                value={minPrice}
                placeholder='Min. Price'
                onChange={handleMinPriceChange}
                className='bg-primary-grey w-full h-[30px] p-1 rounded-md focus:bg-[#d9d9d9] 
                  placeholder-[#484848] focus:outline-none transition focus:placeholder-[#989898]'
              />
              <input
                type="number"
                id="maxPrice"
                value={maxPrice}
                placeholder='Max. Price'
                onChange={handleMaxPriceChange}
                className='bg-primary-grey w-full h-[30px] p-1 rounded-md focus:bg-[#d9d9d9]
                  placeholder-[#484848] focus:outline-none transition focus:placeholder-[#989898]'
              />
                <div className='flex justify-between'>
              <button type='submit' className='bg-[#525252] text-[white] w-20 h-6 rounded-md
                hover:bg-[#616161] focus:outline-none transition'>
                Set
              </button>
              <button className='border hover:border-[#868686] hover:text-[#868686] w-20 h-6 
                rounded-md focus:outline-none transition'>
                Clear
              </button>
              </div>
          </form>
        )
      }
    </Menu>
  )
}

export default PriceRangeDropdown