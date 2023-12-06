import React, {useState, useEffect, createContext} from 'react';

import {housesData} from '../../../API/data';
import { MdHouseSiding } from 'react-icons/md';

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
  const [sortedHouses, setSortedHouses] = useState([...housesData]);

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

    const newHouses = sortedHouses.filter((house) => {
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

  const handleReset = () => {
    setCity('Location (any)');
    setProperty('Property type (any)');
    setMinPrice('');
    setMaxPrice('');
    setPrice('Price range (any)');
    setSortingOption('(Default)');
    setHouses(housesData);
  }

  const sortHouses = (option) => {
    let newSortedHouses;
  
    switch (option.value) {
      case 'price-asc':
        newSortedHouses = [...housesData].sort((a, b) => parseInt(a.price) - parseInt(b.price));
        break;
      case 'price-desc':
        newSortedHouses = [...housesData].sort((a, b) => parseInt(b.price) - parseInt(a.price));
        break;
      case 'date-asc':
        newSortedHouses = [...housesData].sort((a, b) => new Date(a.year) - new Date(b.year));
        break;
      case 'date-desc':
        newSortedHouses = [...housesData].sort((a, b) => new Date(b.year) - new Date(a.year));
        break;
      default:
        newSortedHouses = [...housesData];
        break;
    }
  
    setSortedHouses(newSortedHouses);
    setHouses(newSortedHouses);
  };

  useEffect(() => {
    if (sortingOption) {
      sortHouses(sortingOption);
    }
  }, [sortingOption]);

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
      setSortingOption,
      handleReset,
      sortHouses
    }}>
      {children}
    </HouseContext.Provider>
  )
}

export default HouseContextProvider