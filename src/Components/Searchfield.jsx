import React from 'react';

const Searchfield = ({ handleText }) => {
  const handleSearch = (inputValue) => {
    handleText(inputValue);
  };

  return (
    <div className='flex items-center justify-center mt-4'>
      <input
        type="text"
        placeholder='Search by Book name or Author'
        className='w-full md:w-1/2 h-14 pl-4 pr-10 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 transition-all duration-300'
        onChange={(e) => handleSearch(e.target.value)}
      />
      <button className='h-14 px-4 ml-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-300'>
        Search
      </button>
    </div>
  );
};

export default Searchfield;
