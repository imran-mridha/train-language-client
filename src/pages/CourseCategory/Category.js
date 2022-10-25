import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({category}) => {
  return (
    <div className=''>
      <Link to = {`/category/${category.id}`}><h2 className='border px-2 py-3 my-3 text-center text-xl rounded'>{category.name}</h2></Link>
    </div>
  );
};

export default Category;