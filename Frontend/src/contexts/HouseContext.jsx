import React, {useState, useEffect, createContext} from 'react';

import {housesData} from '../../../API/data';

export const HouseContext = createContext();

const HouseContextProvider = ({children}) => {
  const [houses, setHouses] = useState(housesData);
  const [city, setCity] = useState('Location (any)');
  const [cities, setCities] = useState([]);
  const [property, setProperty] = useState('Property type (any)');
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState('Price range (any)');
  const [loading, setLoading] = useState(false);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sortingOption, setSortingOption] = useState('');

  useEffect(() => {
    const allCities = houses.map((house) => {
      return house.city;
    });

    const uniqueCities = ['Location (any)', ... new Set(allCities)];

    setCities(uniqueCities);
  }, []);

  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    });

    const uniqueProperties = ['Property type (any)', ... new Set(allProperties)];

    setProperties(uniqueProperties);
  }, []);

  const handleClick = () => {
    setLoading(true);

    const isDefault = (str) => {
      return str.split(' ').includes('(any)');
    }

    const newMinPrice = isNaN(parseInt(minPrice)) ? 0 : parseInt(minPrice);

    const newMaxPrice = isNaN(parseInt(maxPrice)) ? 0 : parseInt(maxPrice);

    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);
      const cityCondition = isDefault(city) || house.city === city;
      const propertyCondition = isDefault(property) || house.type === property;
      const priceCondition = isDefault(price) || (housePrice >= newMinPrice && housePrice <= newMaxPrice);
    
      return cityCondition && propertyCondition && priceCondition;
    });    

    setTimeout(() => {
      return newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
      setLoading(false);
    }, 2000)
  }

  return (
    <HouseContext.Provider value={{
      city,
      setCity,
      cities,
      setCities,
      property,
      setProperty,
      properties,
      setProperties,
      price,
      setPrice,
      houses,
      loading,
      handleClick,
      minPrice,
      setMinPrice,
      maxPrice,
      setMaxPrice,
      sortingOption, 
      setSortingOption
    }}>
      {children}
    </HouseContext.Provider>
  )
}

export default HouseContextProvider