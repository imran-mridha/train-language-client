import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({course}) => {
  // console.log(course);
  const {image_url,title,rating,total_student,details} = course;
  return (
    <div>
      <div className='border p-4'>
        <img className='w-full h-52' src={image_url} alt="" />
        <h2>{title}</h2>
        <div className='flex justify-between'>
          <p>Rating: {rating}</p>
          <p>Student: {total_student}</p>
        </div>
        {
          details.length > 100 ? <p>{details.slice(0,100) + '...'}</p>:<p>{details}</p>
        }
        <Link>See Details</Link>
      </div>
    </div>
  );
};

export default Course;