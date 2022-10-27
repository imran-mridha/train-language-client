import React from 'react';
import { Link } from 'react-router-dom';
import { HiStar } from "react-icons/hi";

const Course = ({ course }) => {
  const { _id, image_url, title, total_student, details } = course;
  return (
    <div className='shadow-xl rounded-lg p-4'>
      <img className='w-full h-52 rounded-lg' src={image_url} alt="" />
      <h2 className='text-3xl font-semibold mt-3'>{title}</h2>
      <div className='flex justify-between items-center my-3'>
        <div className='flex text-yellow-500'>
          <HiStar></HiStar>
          <HiStar></HiStar>
          <HiStar></HiStar>
          <HiStar></HiStar>
          <HiStar></HiStar>
        </div>
        <p className='text-cyan-500'>Student: {total_student}</p>
      </div>
      {
        details.length > 100 ? <>{details.slice(0, 100) + '...'}</> : <>{details}</>
      }
      <Link to={`/course/${_id}`}><button className='bg-cyan-300 hover:bg-cyan-500 duration-500 hover:text-white text-xl font-semibold py-2 w-full mt-5 rounded-lg'>See Details</button></Link>
    </div>
  );
};

export default Course;