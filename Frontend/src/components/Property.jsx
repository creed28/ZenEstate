import React from 'react';
import {BiBed, BiBath, BiArea} from 'react-icons/bi';

const Property = ({house}) => {
  const {
    image, type, city, address, bedrooms, bathrooms, surface, price
  } = house;
  
  return (
    <div className='bg-[#fff] drop-shadow-xl p-5 mb-10 rounded-lg hover:scale-105
       w-full max-w-[352px] max-h-[560px] mx-auto cursor-pointer hover:drop-shadow-2xl transition'>
      <img className='mb-8' src={image} alt="" />
      <div className='mb-4 flex gap-x-2 text-sm'>
        <div className='rounded-full bg-[#616161] text-[white] px-3'>     
          {type}
        </div>
        <div className='bg-[#888888] rounded-full text-[white] px-3'>   
          {city}
        </div>
      </div>
      <div className='text-lg text-[#565656] font-semibold max-w-[260px]'>
        {address}
      </div>
      <div className='flex gap-x-4 my-4'>
        <div className='flex items-center text-[#858585] gap-1'>
          <div className='text-[20px]'>
            <BiBed />
          </div>
          <div>
            {bedrooms}
          </div>
        </div>
        <div className='flex items-center text-[#858585] gap-1'>
          <div className='text-[20px]'>
            <BiBath />
          </div>
          <div>
            {bathrooms}
          </div>
        </div>
        <div className='flex items-center text-[#858585] gap-1'>
          <div className='text-[20px]'>
            <BiArea />
          </div>
          <div>
            {surface}
          </div>
        </div>
      </div>
      <div className='text-lg font-semibold mb-4'>{price} BGN</div>
    </div>
  )
}

export default Property