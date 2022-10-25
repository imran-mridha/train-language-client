import React from 'react';
import { Link } from 'react-router-dom';

const LeftSideCategory = ({category}) => {
  return (
    <div className=''>
      <Link to = {`/category/${category.id}`}><h2 className='border border-cyan-300 hover:bg-cyan-300 py-3 my-3 text-center text-xl rounded'>{category.name}</h2></Link>
    </div>
  );
};

export default LeftSideCategory;