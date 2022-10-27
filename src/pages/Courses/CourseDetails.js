import React, { createRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { HiStar } from "react-icons/hi";
import Pdf from "react-to-pdf";
const ref = createRef();
const options = {
  orientation: 'landscape',
  unit: 'in',
  format: [8, 8]
};
const CourseDetails = () => {
  const courseDetails = useLoaderData();
  console.log(courseDetails);
  const { title, image_url, details, instructor, total_student, lessons, duration, lecture } = courseDetails;
  return (
    <div ref={ref} className=''>
      <div className='bg-cyan-800 h-72 md:h-48 flex flex-wrap justify-center items-center'>
        <div className='mx-10 md:mx-0'>
          <p className='text-center lg:text-start text-3xl text-white border-l-4 border-r-4 border-cyan-500 px-3 shadow-2xl p-2'>Details About <span className='text-cyan-300 font-semibold'>{title}</span> Course </p>
        </div>
        <div>
          <div className=''>
            <Pdf targetRef={ref} filename={`${title}.pdf`} options={options} x={.5} y={.5} scale={0.5}>
              {({ toPdf }) => <button onClick={toPdf}><Link><button className='border border-cyan-600 hover:bg-cyan-700 w-full md:w-auto text-white duration-500 py-3 px-6 text-xl font-semibold rounded-lg md:ml-5'>Download PDF</button></Link></button>}
            </Pdf>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-12 mx-5 lg:mx-32 my-20 gap-y-10 lg:gap-10'>
        <div className='col-span-5 p-5 border rounded-lg shadow-xl'>
          <img className='rounded-lg' src={image_url} alt="" />
          <p className='text-2xl mt-3 font-semibold'>Course Name: {title}</p>
          <div className='flex justify-between items-center my-3'>
            <div className='flex text-yellow-500'>
              <p className='text-cyan-500'>Student: {total_student}</p>
            </div>
            <p className='text-cyan-500'>Lessons: {lessons}</p>
            <div className='flex text-yellow-500'>
              <HiStar></HiStar>
              <HiStar></HiStar>
              <HiStar></HiStar>
              <HiStar></HiStar>
              <HiStar></HiStar>
            </div>
          </div>
          <div className='flex justify-between items-center my-3'>
            <div className=''>
              <img className='w-20 h-20 rounded-full' src={instructor.img} alt="" />
              <p className='text-sm lg:text-xl font-semibold mt-3'>Instructor: {instructor.name}</p>
            </div>
            <div className="flex justify-center space-x-4">
              <a href='/' rel="noopener noreferrer" title="Facebook" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-cyan-500 hover:bg-cyan-600 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-4 h-4">
                  <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                </svg>
              </a>
              <a rel="noopener noreferrer" href="/" title="Instagram" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-cyan-500 hover:bg-cyan-600 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-4 h-4">
                  <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
                </svg>
              </a>
              <a rel="noopener noreferrer" href="/" title="Twitter" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-cyan-500 hover:bg-cyan-600 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-4 h-4">
                  <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className='col-span-7 bg-cyan-100 p-3 rounded-lg'>
          <h2 className='text-3xl font-semibold py-1 shadow-lg border-b-4 border-cyan-300'>Details Overview</h2>
          <p className='bg-cyan-100 p-3 text-xl'>
            {details}
          </p>
          <ul className='list-disc px-8 text-xl'>
            <li>Total Student {total_student}</li>
            <li>Total Lessons {lessons}</li>
            <li>Total Lecture {lecture}</li>
            <li className='capitalize'>Course Duration {duration}</li>
          </ul>
          <h2 className='text-3xl font-semibold bg-cyan-100 px-3 py-1  shadow-lg border-b-4 border-cyan-300'>Course Certificate</h2>
          <p className='bg-cyan-100 p-3 text-xl'>
            You will receive an Certificate and a detailed report of your progress in each skill area.
          </p>
          <div className='bg-cyan-100'>
            <Link to={`/checkout/${courseDetails._id}`}><button className='bg-cyan-300 hover:bg-cyan-600 hover:text-white duration-500 py-3 px-6 text-xl font-semibold rounded-lg mr-5 w-full md:w-auto'>Get Premium Access</button></Link>
            {/* <Pdf targetRef={ref} filename="code-example.pdf" options={options} x={.5} y={.5} scale={0.5}>
              {({ toPdf }) => <button onClick={toPdf}><Link><button className='bg-cyan-300 hover:bg-cyan-600 w-full md:w-auto hover:text-white duration-500 py-3 px-6 text-xl font-semibold rounded-lg mt-5'>Download PDF</button></Link></button>}
            </Pdf> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;