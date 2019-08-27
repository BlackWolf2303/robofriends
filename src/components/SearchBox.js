import React from 'react';
const SearchBox = ({searchfield, searchChange}) => {
  return (
  <input 
    className='border border-success'
    type='search' 
    placeholder='search robots' 
    onChange={searchChange}
    />
  );
};

export default SearchBox;
