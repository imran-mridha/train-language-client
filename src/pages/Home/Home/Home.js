import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import HeroImage from '../../../assets/images/hero.png';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import Slider from './Slider';
import LearnLive from './LearnLive';
import Learn from './Learn';
import Testmonial from './Testmonial';
import Info from './Info';

const Home = () => {
  const courses = useLoaderData();
  return (
    <div>
      <div className='bg-cyan-900 grid grid-cols-1 md:grid-cols-2 py-10 lg:py-20 px-5 sm:grid-flow-col-dense lg:px-20'>
        <div className='flex flex-col justify-center md:w-9/12'>
          <h2 className='text-2xl md:text-3xl uppercase text-white font-bold'>New language, new opportunities</h2>
          <p className='my-5 text-xl text-white'>Get access to compact lessons from the experts and connect with a community of native speakers to help you master words faster.</p>
          <Link to='/courses'><button className='py-3 px-4 text-white border border-cyan-500 rounded uppercase font-semibold hover:bg-cyan-500 duration-500'>Get Started</button></Link>
        </div>
        <div>
          <img src={HeroImage} alt="" />
        </div>
      </div>
      <div className='mx-5 my-10 lg:my-20 lg:mx-20'>
        <Learn />
      </div>
      <div className='mx-5 lg:my-10 lg:mx-20'>
        <LearnLive />
      </div>
      <div className='mx-5 md:mx-10 lg:mx-20 my-20'>
        <div className='md:flex justify-between'>
          <h2 className='w-64 text-3xl font-semibold mb-10 border-l-4 pl-2 pb-2 shadow-xl border-cyan-500 border-b-4 capitalize'>Popular Courese</h2>
          <Link to='/courses'><button className='hidden lg:flex py-3 px-4 text-cyan-500 border border-cyan-500 rounded uppercase font-semibold hover:bg-cyan-500 hover:text-white duration-500'>Explore More</button></Link>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          loop={true}
          loopFillGroupWithBlank={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            280: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {
            courses.map(course =>
              <SwiperSlide key={course._id}>
                <Slider course={course} />
              </SwiperSlide>
            )
          }
        </Swiper>
      </div>
      <div className='my-10'>
        <Testmonial />
      </div>
      <div className='mt-10 lg:mt-40 mb-20'>
        <Info />
      </div>
    </div>
  );
};

export default Home;