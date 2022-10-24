import React from 'react';
import { Link } from 'react-router-dom';
import HeroImage from '../../../assets/images/hero.png'

const Home = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 my-10 mx-5 lg:mx-20'>
      <div className='flex flex-col justify-center md:w-9/12'>
        <h2 className='text-2xl md:text-3xl uppercase text-cyan-500 font-bold'>New language, new opportunities</h2>
        <p className='my-5 '>Get access to compact lessons from the experts and connect with a community of native speakers to help you master words faster.</p>
        <Link><button className='py-3 px-4 border border-cyan-500 rounded uppercase font-semibold hover:bg-cyan-500 hover:text-white  duration-500'>Get Started</button></Link>
      </div>
      <img src={HeroImage} alt="" />
    </div>
  );
};

export default Home;