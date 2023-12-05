/* eslint-disable react/prop-types */
import React from 'react';
import Property from './Property';
import { Link } from 'react-router-dom';
import { ImSpinner2 } from 'react-icons/im';

const PropertyList = ({ properties, loading }) => {

  if (loading) {
    return (
      <ImSpinner2 className='mx-auto animate-spin text-text-color text-4xl mt-[60px] bg-[#fafafa]' />
    );
  }

  if (properties.length < 1) {
    return (
      <div className='text-center text-3xl text-[#979797] pb-20 bg-[#fafafa]'>
        No properties with that criteria were found... :(
      </div>
    );
  }

  return (
    <section>
      <div className='container mx-auto'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 pb-10 gap-4 lg:gap-x-14 lg:gap-y-9'>
          {properties.map((house, index) => (
            <Link to={`/property/${house.id}`} key={index}>
              <Property house={house} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyList;