import React, {useContext} from 'react';
import {HouseContext} from '../contexts/HouseContext';
import Property from './Property';
import {Link} from 'react-router-dom';
import {ImSpinner2} from 'react-icons/im';

const PropertyList = () => {
  const {houses, loading} = useContext(HouseContext);

  console.log(houses);
  return (
    <section className='mb-20'>
      <div className="container mx-auto">
        <div>
          {houses.map((house, index) => {
            return (
              <Link to={`/property/${house.id}`} key={index}>
                <Property property={house} />
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default PropertyList