import React from 'react';
import { HiStar } from "react-icons/hi";
import { Link } from 'react-router-dom';

const Slider = ({ course }) => {
  const { _id, image_url, title, total_student, details } = course;
  return (
    <Link to={`/course/${_id}`} className='border p-4 flex flex-col rounded-lg justify-between h-[500px]'>
      <img className='w-full h-72 rounded' src={image_url} alt="" />
      <p className='text-3xl mt-3'>{title}</p>
      <p className='my-5'>
        {
          details.length > 100 ?
            <>{details.slice(0, 100) + '...'}
              <Link className='text-cyan-500' to={`/course/${_id}`}>Read More</Link></>
            :
            <>{details}</>
        }
      </p>
      <div className='flex justify-between items-center'>
        <div className='flex text-yellow-500'>
          <HiStar></HiStar>
          <HiStar></HiStar>
          <HiStar></HiStar>
          <HiStar></HiStar>
          <HiStar></HiStar>
        </div>
        <p className='text-cyan-500'>Student: {total_student}</p>
      </div>
    </Link>
  );
};

export default Slider;