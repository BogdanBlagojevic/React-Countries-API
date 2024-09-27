import React from 'react'
import CountryCard from './CountryCard'

const CountryList = ({countries}) => {
  return (
    <div className='flex flex-wrap justify-center gap-[20px]'>
    {
        countries.map((country, idx)=>{
            return <CountryCard
             key={idx}
             
             country={country}
             style={{animationDelay: `${idx * 0.1}s` }}
            />;
        })
    }
    </div>
  )
}

export default CountryList
