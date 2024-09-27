import React, { useEffect, useState } from 'react';
import CountryList from './CountryList';
import SearchBar from './SearchBar';
import FilterCountry from './FilterCountry';
import SortDropdown from './SortDropdown';

const API_URL = "https://restcountries.com/v3.1";

const Main = () => {
    const [countries, setCountries] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState("asc");


    const fetchCountries = async () => {
        try {
            const response = await fetch(`${API_URL}/all`);
            const data = await response.json();
            if (data) {
                // Filter out Kosovo (Kosovo is Serbia!)
                const filteredData = data.filter(country => country.name.common !== 'Kosovo');
                setCountries(filteredData);
            }
        } catch (error) {
            console.error("Error fetching countries:", error);
        }
    };

    useEffect(() => {
        fetchCountries(); 
    }, []);

  
    const filteredCountries = countries
        .filter(country =>
            country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => {
            return sortOrder === 'asc'
                ? a.name.common.localeCompare(b.name.common)
                : b.name.common.localeCompare(a.name.common);
        });

    const getCountryByRegion = async (regionName) => {
        try {
            if (regionName === "all") {
                fetchCountries(); 
                return;
            }
            const response = await fetch(`${API_URL}/region/${regionName}`);
            const data = await response.json();
            if (data) {
          
                const filteredData = data.filter(country => country.name.common !== 'Kosovo');
                setCountries(filteredData);
            }
        } catch (error) {
            console.error("Error fetching countries by region:", error);
        }
    };

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
    };

    console.log(countries)
    return (
        <>
            <div className='flex flex-col sm:flex-row items-center justify-end gap-[20px] sm:mr-20'> 
                <SearchBar setSearchTerm={setSearchTerm} />
                <FilterCountry onSelect={getCountryByRegion} />
                <SortDropdown sortOrder={sortOrder} onSortChange={handleSortChange} />
            </div>
            <CountryList countries={filteredCountries} />
        </>
    );
};

export default Main;
