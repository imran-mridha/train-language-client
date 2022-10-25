import React, { useEffect, useState } from 'react';
import LeftSideCategory from './LeftSideCategory';

const CourseCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/course-categories')
    .then(res => res.json())
    .then(data => setCategories(data))
  },[])
  return (
    <div className='sticky top-0'>
      <h2 className='text-xl border-l-4 border-cyan-600 pl-2 text-cyan-500'>Course Categories</h2>
      <div >
        {
          categories.map(category => <LeftSideCategory key = {category.id} category = {category} />)
        }
      </div>
    </div>
  );
};

export default CourseCategory;