import React from 'react'

const SearchBar = ({ setSearchTerm }) => { // Izvlačimo setSearchTerm iz props objekta
  return (
    <div className='flex justify-center mb-12'>
      <input 
        className='w-[200px] p-[10px] rounded-md border-2 border-c5 focus:outline-none focus:w-[250px] duration-[0.3s]' 
        type="text" 
        placeholder='Search for a country...' 
        onChange={(e) => setSearchTerm(e.target.value)} // Koristimo setSearchTerm funkciju
      />
    </div>
  )
}

export default SearchBar
