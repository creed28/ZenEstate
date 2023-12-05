import React from 'react';
import {Link} from 'react-router-dom';

const JoinUs = () => {
  return (
    <section className='bg-[#373737] flex flex-col gap-y-[4rem] items-center justify-center mt-10'>
          <p className='text-[white] text-[2.5rem] font-semibold max-w-[680px] pt-[5rem]'>
            The best day to join ZenEstate was yesterday. The second best is today!
          </p>
         <div className='pb-[6rem]'>
          <Link to={'/register'} className='bg-[#656565] text-[1.6rem] py-2 px-7 rounded-3xl 
            text-[#f8f7f7] hover:bg-[#727272]'>
              Get Started
          </Link>
         </div>
        </section>
  )
}

export default JoinUs