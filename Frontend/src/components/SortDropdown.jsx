import React, { useState, useEffect, useContext, useRef } from 'react';
import { BiSort } from 'react-icons/bi';
import { Menu } from '@headlessui/react';
import { HouseContext } from '../contexts/HouseContext';

const SortDropdown = () => {
  const [sortingOption, setSortingOption] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSortingChange = (option) => {
    setSortingOption(option);
    setIsOpen(false);
  };

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

  const sortingOptions = [
    { value: 'price-asc', label: 'Price (Low to High)' },
    { value: 'price-desc', label: 'Price (High to Low)' },
    { value: 'date-asc', label: 'Date (Old to New)' },
    { value: 'date-desc', label: 'Date (New to Old)' },
  ];

  return (
    <Menu as='div' className='dropdown relative' ref={dropdownRef}>
      <Menu.Button onClick={() => setIsOpen(!isOpen)} className='dropdown-btn w-full text-left'>
        <BiSort className='dropdown-icon-primary' />
        <div className='text-[15px] font-medium leading-tight'>{sortingOption.label}</div>
      </Menu.Button>

      {isOpen && (
        <div className='dropdown-menu space-y-4'>
          {sortingOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => handleSortingChange(option)}
              className='w-full text-left text-[15px] hover:text-primary-blue focus:outline-none transition'>
              {option.label}
            </button>
          ))}
        </div>
      )}
    </Menu>
  );
};

export default SortDropdown;