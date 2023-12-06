import React, { useContext, useState } from 'react';
import CityDropdown from '../components/CityDropdown';
import PropertyDropdown from '../components/PropertyDropdown';
import PriceRangeDropdown from '../components/PriceRangeDropdown';
import PropertyList from '../components/PropertyList';
import SortDropdown from '../components/SortDropdown';
import { MdFilterAlt } from 'react-icons/md';
import { RiSearch2Line } from 'react-icons/ri';
import { HouseContext } from '../contexts/HouseContext';

const Properties = () => {
  const { handleClick, handleReset, loading, houses } = useContext(HouseContext);
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 6;

  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = houses.slice(indexOfFirstProperty, indexOfLastProperty);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    handleClick();
  };

  const handleFilter = () => {
    setCurrentPage(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    handleClick();
  }

  const handleResetPagination = () => {
    setCurrentPage(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    handleReset();
  }

  return (
    <section className="flex bg-[#fafafa]">
      <div className='bg-[#f7f7f7] w-1/4 px-4 py-6 flex flex-col gap-y-2 
        mb-10 mt-10 ml-3 h-[500px] rounded-lg border'>
        <div className='flex items-center text-[2rem] font-semibold pt-5'>
            <MdFilterAlt />
            <span className='text-[1.8rem]'>Filters</span>
        </div>
        <div className='flex flex-col items-center gap-y-8'>
            <CityDropdown />
            <PropertyDropdown />
            <PriceRangeDropdown />
            <div className='flex w-full justify-center gap-x-4'>
              <button onClick={() => handleFilter()} className='bg-text-color hover:bg-[#616161] 
                  transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center
                  items-center text-[white] text-lg'>
                  <RiSearch2Line />
              </button>
              <button onClick={() => handleResetPagination()} className='border hover:border-[#8d8d8d] 
              hover:text-[#8d8d8d] transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center
                items-center text-lg'>
                Reset
              </button>
            </div>
        </div>
      </div>
      <div className="w-3/4 p-4 ml-auto overflow-y-auto mt-2">
        <div className="p-4 mb-4 flex items-center gap-x-2 ml-6">
          <span className='text-[1.1rem] font-semibold'>Sort by</span>
          <SortDropdown />
        </div>
        <PropertyList properties={currentProperties} loading={loading} />
        <div className="flex justify-center mt-4">
          {!loading && Array.from({ length: Math.ceil(houses.length / propertiesPerPage) },
           (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => paginate(page)}
              className={`mx-2 px-4 py-2 rounded-lg ${currentPage === page ? 'bg-[#616161] text-[white]' : 
              'bg-[white] text-[#616161] border'}`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Properties;