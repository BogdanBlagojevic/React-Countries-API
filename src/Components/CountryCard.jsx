import React from 'react';
import { FaUser, FaGlobe, FaCity } from 'react-icons/fa';

const CountryCard = ({ country, style }) => {
  return (
    <div
      className='bg-c1 rounded-xl p-4 w-[250px] shadow-md text-white m-4 relative transition-all transform hover:scale-105 hover:shadow-2xl hover:-translate-y-2'
      style={style}
    >
      <img
        src={country.flags.svg}
        alt={`${country.name.common} flag`}
        className='w-full h-[150px] object-cover rounded-xl border border-c4' // Added border color
      />
      <div className='mt-4'>
        <h2 className='text-xl font-bold truncate text-c6'>{country.name.common}</h2> {/* Updated text color */}
        <p className='text-sm mt-2 flex items-center'>
          <FaUser className='mr-2' />
          <strong className='mr-1'>Population: </strong>
          {country.population.toLocaleString()}
        </p>
        <p className='text-sm mt-1 flex items-center'>
          <FaGlobe className='mr-2' />
          <strong className='mr-1' >Region:</strong>
          {country.region}
        </p>
        <p className='text-sm mt-1 flex items-center'>
          <FaCity className='mr-2' />
          <strong className='mr-1'>Capital: </strong>
          {country.capital || 'N/A'}
        </p>
      </div>
    </div>
  );
};

export default CountryCard;