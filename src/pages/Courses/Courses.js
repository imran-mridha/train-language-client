import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCategory from '../CourseCategory/CourseCategory';
import Course from './Course';

const Courses = () => {
  const courses = useLoaderData()
  return (
    <div className='grid grid-cols-1 lg:grid-cols-12 gap-5 mx-20 my-20'>
        <div className='col-span-2'>
          <CourseCategory />
        </div>
      <div className='col-span-10'>
        <div className='grid grid-cols-1 md-grid-cols-2 lg:grid-cols-3 gap-4'>
          {
            courses.map(course => <Course key={course._id} course={course} />)
          }
        </div>
      </div>
    </div>
  );
};

export default Courses;