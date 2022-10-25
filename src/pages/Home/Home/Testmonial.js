import React from 'react';
import timage01 from '../../../assets/images/testmonialImg-01.jpg';
import timage02 from '../../../assets/images/testmonialImg-02.jpg';
import quatImg from '../../../assets/images/quote-ico.png';
import { HiStar } from "react-icons/hi";
const Testmonia = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
      <div className='grid grid-cols-2 gap-3 mx-5 md:mx-0 lg:ml-20 items-center'>
        <img className='w-72' src={timage01} alt="" />
        <img className='w-60' src={timage02} alt="" />
      </div>
      <div className='bg-cyan-900 p-20'>
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
        <p className='my-5 text-white text-xl italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio corporis numquam accusamus velit incidunt odio voluptatem dolores autem sapiente id.</p>
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

export default Testmonia;