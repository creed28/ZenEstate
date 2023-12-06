import React from 'react';
import {housesData} from '../../../API/data';
import {useParams} from 'react-router-dom';
import {BiBed, BiBath, BiArea} from 'react-icons/bi';
import {Link} from 'react-router-dom';

const PropertyDetails = () => {
  const {id} = useParams();
  const house = housesData.find(house => {
    return house.id === parseInt(id);
  })

  return (
    <section>
      <div className="container mx-auto min-h-[800px] mb-14">
        <div className='flex flex-col items-start gap-8 lg:flex-row'>
          <div className='max-w-[768px] mt-4'>
            <div className='mb-4'>
              <img src={house.imageLg} alt="House Image" />
            </div>
            <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
              <div>
                <h2 className='text-2xl font-semibold'>
                  {house.name}
                </h2>
                <h3 className='text-lg mb-4'>
                  {house.address}
                </h3>
              </div>
              <div className='mb-4 lg:mb-0 flex gap-x-2 text-sm'>
                <div className='rounded-full bg-[#616161] text-[white] px-3'>
                  {house.type}
                </div>
                <div className='bg-[#888888] rounded-full text-[white] px-3'>
                  {house.city}
                </div>
              </div>
              <div className='text-3xl font-semibold'>
                {house.price} BGN
              </div>
            </div>
            <div className='flex gap-x-6 mb-6'>
              <div className='flex gap-x-2 items-center'>
                <BiBed className='text-2xl' />
                <div>{house.bedrooms}</div>
              </div>
              <div className='flex gap-x-2 items-center'>
                <BiBath className='text-2xl' />
                <div>{house.bathrooms}</div>
              </div>
              <div className='flex gap-x-2 items-center'>
                <BiArea className='text-2xl' />
                <div>{house.surface}</div>
              </div>
            </div>
            <div>{house.description}</div>
          </div>
          <div className='flex-1 w-full mb-8 border border-text-color rounded-lg px-6 py-8
           mt-4 bg-primary-grey'>
            <div className='flex items-center gap-x-4 mb-8'>
              <div className='w-20 h-20 p-1 border border-text-color rounded-full'>
                <img src={house.agent.image} alt="Agent Image" />
              </div>
              <div>
                <div className='font-bold text-lg'>
                  {house.agent.name}
                </div>
                <p className='text-[14px]'>{house.agent.phone}</p>
                <Link to='' className='text-sm'>View Listings</Link>
              </div>
            </div>
            <form className='flex flex-col gap-y-4'>
              <input className='border border-primary-grey focus:border-text-color outline-none rounded 
              w-full px-4 h-14 text-sm placeholder-[#7d7d7d]' type="text" placeholder='Name' />
              <input className='border border-primary-grey focus:border-text-color outline-none rounded 
              w-full px-4 h-14 text-sm placeholder-[#7d7d7d]' type="text" placeholder='Email'  />
              <input className='border border-primary-grey focus:border-text-color outline-none rounded 
              w-full px-4 h-14 text-sm placeholder-[#7d7d7d]' type="text" placeholder='Phone'  />
              <textarea className='border border-primary-grey focus:border-text-color outline-none 
              resize-none rounded w-full p-4 h-36 text-sm placeholder-[#7d7d7d]' placeholder='Message'
              defaultValue='Hello, I would like to...'></textarea>
              <button className='bg-text-color hover:bg-[#616161] text-[white] rounded p-4 
              text-sm w-full transition'>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PropertyDetails