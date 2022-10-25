import React from 'react';
import timage01 from '../../../assets/images/testmonialImg-01.jpg';
import timage02 from '../../../assets/images/testmonialImg-02.jpg';
import { HiStar } from "react-icons/hi";
const Testmonia = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 ml-20'>
        <img src={timage01} alt="" />
        <img src={timage02} alt="" />
      </div>
      <div className='bg-cyan-900'>
        <div className=''>
          <div className='flex'>
            <HiStar></HiStar>
            <HiStar></HiStar>
            <HiStar></HiStar>
            <HiStar></HiStar>
            <HiStar></HiStar>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Testmonia;