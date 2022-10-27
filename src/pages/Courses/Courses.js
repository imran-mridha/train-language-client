import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseName from '../CourseName/CourseName';

import Course from './Course';

const Courses = () => {
  const courses = useLoaderData()
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 mx-5 lg:mx-20 my-20'>
      <div className='md:col-span-0 lg:col-span-2'>
        <h2 className='text-3xl border-l-4 pl-2 font-semibold border-cyan-500'>All Courses</h2>
        {
          courses.map(course => <CourseName key={course._id} course={course} />)
        }
      </div>
      <div className='md:col-span-0 lg:col-span-10'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
          {
            courses.map(course => <Course key={course._id} course={course} />)
          }
        </div>
      </div>
    </div>
  );
};

export default Courses;