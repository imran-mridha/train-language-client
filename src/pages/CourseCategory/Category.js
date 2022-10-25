import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Courses/Course';
import CourseCategory from './CourseCategory';

const Category = () => {
  const categoryCourse = useLoaderData()
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 mx-5 lg:mx-20 my-20'>
        <div className='md:col-span-0 lg:col-span-2'>
          <CourseCategory />
        </div>
      <div className='md:col-span-0 lg:col-span-10'>
        <div className='grid grid-cols-1 md-grid-cols-2 lg:grid-cols-3 gap-4'>
          {
            categoryCourse.map(course => <Course key={course._id} course={course} />)
          }
        </div>
      </div>
    </div>
  );
};

export default Category;