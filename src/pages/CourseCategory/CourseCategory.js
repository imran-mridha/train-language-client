import React, { useEffect, useState } from 'react';
import Category from './Category';

const CourseCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/course-categories')
    .then(res => res.json())
    .then(data => setCategories(data))
  },[])
  return (
    <div className='sticky top-0'>
      <h2>Courser Categories</h2>
      <div >
        {
          categories.map(category => <Category key = {category.id} category = {category} />)
        }
      </div>
    </div>
  );
};

export default CourseCategory;