import React from 'react';
import timage01 from '../../../assets/images/testmonialImg-01.jpg';
import timage02 from '../../../assets/images/testmonialImg-02.jpg';
import quatImg from '../../../assets/images/quote-ico.png';
import { HiStar } from "react-icons/hi";
const Testmonial = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-3'>
      <div className='grid grid-cols-2 lg:gap-3 mx-5 md:mx-0 lg:ml-20 items-center'>
        <img className='lg:w-72' src={timage01} alt="" />
        <img className='lg:w-60' src={timage02} alt="" />
      </div>
      <div className='bg-cyan-900 p-5 lg:p-20'>
        <div className='flex justify-between'>
          <div className='flex text-3xl text-yellow-500'>
            <HiStar></HiStar>
            <HiStar></HiStar>
            <HiStar></HiStar>
            <HiStar></HiStar>
            <HiStar></HiStar>
          </div>
          <img src={quatImg} alt="" />
        </div>
        <p className='my-5 text-white text-xl italic'>I'm absolutely loving my Spanish lessons with Live Lingua! For someone who travels full time, I was worried about how I would manage to stay on top of my Spanish learning. But with the flexibility of classes, taking lessons has been super convenient.</p>
        <div className='flex items-center'>
          <img className='w-20 h-20 rounded-full mr-3' src={timage01} alt="" />
          <div className='text-gray-300'>
            <p className='text-2xl'>Sean Anderson</p>
            <p className='text-xl'>Trainer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testmonial;