import React from 'react';
import learnLive from '../../../assets/images/learnLive.jpg'

const LearnLive = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
      <div className='flex flex-col justify-center'>
        <h2 className='text-3xl font-semibold'>Learn with real people</h2>
        <p className='text-gray-500 w-9/12 mt-5'>Practice with friendly, professional tutors in live 1-to-1 lessons or group classes to build confidence in your chosen language. Don’t just learn a language, speak it.</p>
      </div>
      <div>
        <img src={learnLive} alt="" />
      </div>

    </div>
  );
};

export default LearnLive;