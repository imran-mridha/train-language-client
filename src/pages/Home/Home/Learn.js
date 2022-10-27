import React from 'react';
import { HiSpeakerphone, HiBookOpen, HiPencil } from "react-icons/hi";

const Learn = () => {
  return (
    <div>
      <h2 className='text-2xl md:text-3xl capitalize w-64 md:w-72 font-semibold mb-10 border-l-4 pl-2 pb-2 shadow-xl border-cyan-500 border-b-4'>What do you learn?</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
        <div className='text-center px-20 pb-5 rounded-xl border border-cyan-500 hover:bg-cyan-100 duration-500 shadow-xl'>
          <HiSpeakerphone className='w-10 mx-auto text-8xl text-cyan-500' />
          <p className='text-3xl font-semibold'>Speak</p>
          <p className='my-5'>Speak with native speakers on any topic you want (not just about the weather). Make friends in different parts of the Earth!</p>
        </div>
        <div className=' text-center px-20 pb-5 bg-cyan-100 shadow-xl rounded-xl border border-cyan-500'>
          <HiBookOpen className='w-10 mx-auto text-8xl text-cyan-500' />
          <p className='text-3xl font-semibold'>Read</p>
          <p className='my-5'>Read literature in the original language. Grow your vocabulary, master the language’s grammar, and broaden your horizons!</p>
        </div>
        <div className='text-center px-20 pb-5 rounded-lg border border-cyan-500 hover:bg-cyan-100 duration-500'>
          <HiPencil className='w-10 mx-auto text-8xl text-cyan-500' />
          <p className='text-3xl font-semibold'>Write</p>
          <p className='my-5'>Write to your foreign friends or conduct business correspondence with people from other countries and even continents!</p>
        </div>
      </div>
    </div>
  );
};

export default Learn;