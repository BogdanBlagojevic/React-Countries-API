import React from 'react'

const FilterCountry = ({ onSelect }) => { // Destrukturiramo onSelect iz props
    const continents = [
        { id: 1, name: "Africa" },
        { id: 2, name: "Antarctic" },
        { id: 3, name: "Asia" },
        { id: 4, name: "Europe" },
        { id: 5, name: "North America" },
        { id: 6, name: "Oceania" },
        { id: 7, name: "South America" }
    ];

    const selectHandler = (e) => {
        const regionName = e.target.value;
        onSelect(regionName);
    }

    return (
        <select onChange={selectHandler} className='w-[200px] px-[25px] py-[10px] mb-[50px] outline-none bg-c1 text-white rounded-md cursor-pointer'>
            <option value="all">Filter by region</option>
            {
                continents.map((continent) => {
                    return (
                        <option value={continent.name} key={continent.id}>{continent.name}</option>
                    )
                })
            }
        </select>
    )
}

export default FilterCountry
