import React from 'react';
import { HiStar } from "react-icons/hi";

const Slider = ({ course }) => {
  console.log(course);
  const { image_url, title, rating, total_student, details, price } = course;
  return (
    <div className='border p-4 flex flex-col rounded-lg justify-between h-[500px]'>
      <img className='w-full h-72 rounded' src={image_url} alt="" />
      <p className='text-3xl mt-3'>{title}</p>
      <p className='my-5'>
        {
          details.length > 100 ? <p>{details.slice(0, 100) + '...'}</p> : <p>{details}</p>
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
    </div>
  );
};

export default Slider;