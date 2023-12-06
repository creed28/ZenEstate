import React, { useContext } from 'react';
import { BiSort } from 'react-icons/bi';
import { Menu } from '@headlessui/react';
import { HouseContext } from '../contexts/HouseContext';

const SortDropdown = () => {
  const {sortingOption, setSortingOption, sortHouses} = useContext(HouseContext);

  const handleSortingChange = (option) => {
    setSortingOption(option);
    sortHouses(option);
  };

  const sortingOptions = [
    { value: 'price-asc', label: 'Price (Low to High)' },
    { value: 'price-desc', label: 'Price (High to Low)' },
    { value: 'date-asc', label: 'Date (Old to New)' },
    { value: 'date-desc', label: 'Date (New to Old)' },
  ];

  return (
    <Menu as='div' className='dropdown relative lg:max-w-[246px]'>
      <Menu.Button className='dropdown-btn w-full text-left h-[32px] '>
        <BiSort className='dropdown-icon-primary text-xl' />
        <div className='text-[15px] font-medium leading-tight'>{sortingOption.label}</div>
      </Menu.Button>

      <Menu.Items as='ul' className='dropdown-menu space-y-4'>
        {sortingOptions.map((option) => (
          <Menu.Item as='li'
            key={option.value}
            onClick={() => handleSortingChange(option)}
            className='cursor-pointer hover:text-[#616161] transition'>
            {option.label}
          </Menu.Item>
         ))}
      </Menu.Items>
    </Menu>
  );
};

export default SortDropdown;