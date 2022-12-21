import React from 'react';

const Newslatter = () => {
  return (
    <div data-aos="zoom-in" className='container mx-auto my-20'>
      <div className='lg:w-9/12 h-60 rounded-lg mx-auto bg-gray-100 flex flex-col  justify-center p-4'>
        <h2 className='text-center text-xl md:text-3xl uppercase font-semibold text-gray-700 pb-5'>Wanna know upcomming updates?</h2>
        <form className='text-center'>
          <input className='mx-w-96 lg:w-96 mb-5 mr-4 py-3 rounded-lg outline-none border pl-5' type="email" />
          <button className='border-2 border-white py-2 rounded px-5 text-xl font-semibold hover:bg-white duration-200'>Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default Newslatter;