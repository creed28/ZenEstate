import React, {useContext} from 'react';
import {HouseContext} from '../contexts/HouseContext';
import Property from './Property';
import {Link} from 'react-router-dom';
import {ImSpinner2} from 'react-icons/im';

const PropertyList = () => {
  const {houses, loading} = useContext(HouseContext);

  return (
    <section className='bg-[white]'>
      <div className="container mx-auto">
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-x-14 lg:gap-y-9'>
          {houses.map((house, index) => {
            return (
              <Link to={`/property/${house.id}`} key={index}>
                <Property house={house} />
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default PropertyList