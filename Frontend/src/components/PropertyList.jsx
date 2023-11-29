import React, {useContext} from 'react';
import {HouseContext} from '../contexts/HouseContext';
import Property from './Property';
import {Link} from 'react-router-dom';
import {ImSpinner2} from 'react-icons/im';

const PropertyList = () => {
  const {houses, loading} = useContext(HouseContext);

  console.log(houses);
  return (
    <section className='mt-1 bg-[white]'>
      <div className="container mx-auto">
        <div>
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