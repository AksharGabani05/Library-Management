
import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500 border-solid"></div>
      <span className="ml-2 text-blue-500">Loading...</span>
    </div>
  );
};

export default Loader;
