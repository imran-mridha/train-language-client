import React from 'react';
import { FaLaptop, FaBookOpen, FaUsers, FaUserAlt } from "react-icons/fa";

const Info = () => {
  return (
    <div className='mx-5 lg:mx-20'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-20'>
        <div className='flex items-center'>
          <div className='border p-3 bg-cyan-100 rounded-full'>
            <FaLaptop className='text-2xl text-cyan-500'></FaLaptop>
          </div>
          <p className='text-2xl ml-5 text-gray-900'>Online Tutoring</p>
        </div>
        <div className='flex items-center'>
          <div className='border p-3 bg-cyan-100 rounded-full'>
            <FaBookOpen className='text-2xl text-cyan-500'></FaBookOpen>
          </div>
          <p className='text-2xl ml-5 text-gray-900'>15+ Courses</p>
        </div>
        <div className='flex items-center'>
          <div className='border p-3 bg-cyan-100 rounded-full'>
            <FaUsers className='text-2xl text-cyan-500'></FaUsers>
          </div>
          <p className='text-2xl ml-5 text-gray-900'>Lifetime Access</p>
        </div>
        <div className='flex items-center'>
          <div className='border p-3 bg-cyan-100 rounded-full'>
            <FaUserAlt className='text-2xl text-cyan-500'></FaUserAlt>
          </div>
          <p className='text-2xl ml-5 text-gray-900'>Online Tutoring</p>
        </div>
      </div>
    </div>
  );
};

export default Info;