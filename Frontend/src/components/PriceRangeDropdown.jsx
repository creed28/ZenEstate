import React, {
  useState, useEffect, useContext, useRef
} from 'react';
import { RiWallet3Line, RiArrowDownSLine, RiArrowUpSLine} from 'react-icons/ri';
import { Menu } from '@headlessui/react';
import {HouseContext} from '../contexts/HouseContext';

const PriceRangeDropdown = () => {
  const {price, setPrice} = useContext(HouseContext);

  const [isOpen, setIsOpen] = useState(false);

  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (minPrice === '' && maxPrice === '') {
      setPrice('Price range (any)');
      setIsOpen(false);
      return;
    }
  
    if (minPrice >= maxPrice) {
      setPrice('Price range (any)');
      setMinPrice('');
      setMaxPrice('');
      setIsOpen(false);
      return;
    }
  
    if (minPrice === '') {
      setMinPrice(0, () => {
        setPrice(`${minPrice}BGN - ${maxPrice}BGN`);
      });
    } else{
      setPrice(`${minPrice}BGN - ${maxPrice}BGN`);
    }
    
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
    };
  }, []);
  
  return (
    <Menu as='div' className='dropdown relative' ref={dropdownRef}>
      <Menu.Button onClick={() => setIsOpen(!isOpen)} className='dropdown-btn w-full text-left'>
        <RiWallet3Line className='dropdown-icon-primary'   />
        <div>
          <div className='text-[15px] font-medium leading-tight'>{price}</div>
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
              <button type='submit' className='bg-[#525252] text-[white] w-20 h-20 rounded-md
              hover:bg-[#616161] focus:outline-none transition'>
              Set
              </button>
          </form>
        )
      }
    </Menu>
  )
}

export default PriceRangeDropdown