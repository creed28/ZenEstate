import React, {useState, useEffect, createContext} from 'react';
import { useQuery } from '@tanstack/react-query';

import {housesData} from '../../../API/data';

export const HouseContext = createContext();

const HouseContextProvider = ({children}) => {
  const {data: propertiesData} = useQuery({
    queryKey: ['properties'],
    queryFn: () => {
      return housesData;
    }
  })
  
  const [city, setCity] = useState('Location (any)');
  const [cities, setCities] = useState([]);
  const [property, setProperty] = useState('Property type (any)');
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState('Price range (any)');
  const [loading, setLoading] = useState(false);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sortingOption, setSortingOption] = useState('');

  const filteredHouses = propertiesData?.filter((house) => {
    const isDefault = (str) => {
      return str.split(' ').includes('(any)');
    }

    const newMinPrice = isNaN(parseInt(minPrice)) ? 0 : parseInt(minPrice);

    const newMaxPrice = isNaN(parseInt(maxPrice)) ? 0 : parseInt(maxPrice);

    const housePrice = parseInt(house.price);
    const cityCondition = isDefault(city) || house.city === city;
    const propertyCondition = isDefault(property) || house.type === property;
    const priceCondition = isDefault(price) || (housePrice >= newMinPrice && housePrice <= newMaxPrice);
  
    return cityCondition && propertyCondition && priceCondition;
  });

  const filteredAndSortedHouses = filteredHouses?.sort((houseA, houseB) => {
    const housePriceA = parseInt(houseA.price);
    const housePriceB = parseInt(houseB.price);

    const houseYearA = new Date(houseA.year);
    const houseYearB = new Date(houseB.year);

    switch (sortingOption.value) {
      case 'price-asc':
        return housePriceA - housePriceB;
      case 'price-desc':
        return housePriceB - housePriceA;
      case 'date-asc':
        return houseYearA - housePriceB;
      case 'date-desc':
        return houseYearB - housePriceA;
      default:
        return 0;
    }
  });

  useEffect(() => {
    const allCities = housesData.map((house) => {
      return house.city;
    });

    const uniqueCities = ['Location (any)', ... new Set(allCities)];

    setCities(uniqueCities);
  }, []);

  useEffect(() => {
    const allProperties = housesData.map((house) => {
      return house.type;
    });

    const uniqueProperties = ['Property type (any)', ... new Set(allProperties)];

    setProperties(uniqueProperties);
  }, []);

  const handleReset = () => {
    setCity('Location (any)');
    setProperty('Property type (any)');
    setMinPrice('');
    setMaxPrice('');
    setPrice('Price range (any)');
    setSortingOption('(Default)');
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
      loading,
      minPrice,
      setMinPrice,
      maxPrice,
      setMaxPrice,
      sortingOption, 
      setSortingOption,
      handleReset,
      filteredAndSortedHouses
    }}>
      {children}
    </HouseContext.Provider>
  )
}

export default HouseContextProvider