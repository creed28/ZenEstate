import React from 'react';
import {useParams} from 'react-router-dom';
import {BiBed, BiBath, BiArea} from 'react-icons/bi';
import {Link} from 'react-router-dom';
import axios from '../api/axios';
import { useQuery } from '@tanstack/react-query';

const PropertyDetails = () => {
  const {id} = useParams();
  const {data: contract} = useQuery({ 
    queryKey: ["contract", id],
    queryFn: () => getContract(id),
  });

  const getContract = async (id) => {
    try {
      const res = await axios.get(`/Contract/${id}`, id);
      console.log(res.data)
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const propertyId = contract?.propertyId;
  const ownerId = contract?.ownerId;

  const {data: property} = useQuery({ 
    queryKey: ["property", propertyId],
    queryFn: () => getProperty(propertyId),
    enabled:!!propertyId
  });

  const getProperty = async (id) => {
    try {
      const res = await axios.get(`/Property/${id}`, id);
      // const imageUrl = URL.createObjectURL(new Blob([res.data.imageData]));
      // setNewImage(imageUrl); 
      console.log(res.data);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const {data: user} = useQuery({ 
    queryKey: ["user", ownerId],
    queryFn: () => getUser(ownerId),
    enabled:!!ownerId
  });

  const getUser = async (id) => {
    try {
      const res = await axios.get(`/User/${id}`, id);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section>
      <div className="container mx-auto min-h-[800px] mb-14">
        <div className='flex flex-col items-start gap-8 lg:flex-row'>
          <div className='max-w-[768px] mt-4'>
            <div className='mb-4'>
              <img src={property?.imageName} alt="House Image" />
            </div>
            <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
              <div>
                <h2 className='text-2xl font-semibold'>
                  {property?.name}
                </h2>
                <h3 className='text-lg mb-4'>
                  {property?.address}
                </h3>
              </div>
              <div className='mb-4 lg:mb-0 flex gap-x-2 text-sm'>
                <div className='rounded-full bg-[#616161] text-[white] px-3'>
                  {property?.type}
                </div>
                <div className='bg-[#888888] rounded-full text-[white] px-3'>
                  {property?.city}
                </div>
              </div>
              <div className='text-3xl font-semibold'>
                {property?.price} BGN
              </div>
            </div>
            <div className='flex gap-x-6 mb-6'>
              <div className='flex gap-x-2 items-center'>
                <BiBed className='text-2xl' />
                <div>{property?.bedrooms}</div>
              </div>
              <div className='flex gap-x-2 items-center'>
                <BiBath className='text-2xl' />
                <div>{property?.bathrooms}</div>
              </div>
              <div className='flex gap-x-2 items-center'>
                <BiArea className='text-2xl' />
                <div>{property?.surface}</div>
              </div>
            </div>
            <div>{property?.description}</div>
          </div>
          <div className='flex-1 w-full mb-8 border border-text-color rounded-lg px-6 py-8
           mt-4 bg-primary-grey'>
            <div className='flex items-center gap-x-4 mb-8'>
              <div className='w-20 h-20 p-1 border border-text-color rounded-full'>
                <img src={user?.image} alt="Agent Image" />
              </div>
              <div>
                <div className='font-bold text-lg'>
                  {user?.name}
                </div>
                <p className='text-[14px]'>{user?.phone}</p>
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