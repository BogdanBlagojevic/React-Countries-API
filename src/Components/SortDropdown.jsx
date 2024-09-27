import React from 'react';

const SortDropdown = ({ sortOrder, onSortChange }) => {
  return (
    <select
      value={sortOrder}
      onChange={onSortChange}
      className='w-[200px] px-[25px] py-[10px] mb-[50px] outline-none bg-c1 rounded-md cursor-pointer text-white'
    >
      <option value="asc">Ascending</option>
      <option value="desc">Descending</option>
    </select>
  );
};

export default SortDropdown;
