import React from 'react';
import { Link } from 'react-router-dom';

const CourseName = ({ course }) => {
  const { _id, title } = course;

  return (
    <div className=''>
      <Link to={`/course/${_id}`}><h2 className='border border-cyan-300 hover:bg-cyan-300 py-3 my-3 text-center text-xl rounded'>{title}</h2></Link>
    </div>
  );
};

export default CourseName;