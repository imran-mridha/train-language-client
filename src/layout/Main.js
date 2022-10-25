import React from 'react';
import { Outlet} from 'react-router-dom';
import CourseCategory from '../pages/CourseCategory/CourseCategory';
import Header from '../shared/Header/Header';

const Main = () => {
  return (
    <div>
      <Header />
      {/* <div className='grid grid-cols-1 lg:grid-cols-12 gap-5 mx-20 my-20'>
        <div className='col-span-2 sticky top-0'>
          <CourseCategory />
        </div>
        <div className='col-span-10'>
          <Outlet />
        </div>
      </div> */}
      <Outlet />
    </div>
  );
};

export default Main;