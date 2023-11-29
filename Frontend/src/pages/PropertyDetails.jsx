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
        <div>
          <div>
            <h2>{house.name}</h2>
            <h3>{house.address}</h3>
          </div>
          <div>
            <div>{house.type}</div>
            <div>{house.city}</div>
          </div>
          <div>{house.price} BGN</div>
        </div>
      </div>
    </section>
  )
}

export default PropertyDetails