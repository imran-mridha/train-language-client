import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
  const course = useLoaderData();
  const { title, image_url, price, details, instructor, total_student, lessons } = course;
  console.log(course);

  const handleCheckout = (event) => {
    event.preventDefault();
    const form = event.target;
    console.log(form);
  }
  return (
    <div>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-5 mx-5 lg:mx-20 my-20'>
        <div className='md:flex bg-cyan-100  p-6 rounded-lg h-min col-span-full lg:col-span-7'>
          <div className='w-5/12 mx-auto md:mx-0'>
            <img src={image_url} alt="" />
          </div>
          <div className='ml-5 flex flex-col justify-between text-center'>
            <p className='text-2xl font-semibold'>Course name: {title}</p>
            <p className='text-xl font-semibold'>Price: <span className='text-cyan-600'>${price}</span> </p>
            <img className='w-16 h-16 mx-auto rounded-full' src={instructor.img} alt="" />
          </div>
        </div>
        <div className='col-span-full lg:col-span-5 bg-cyan-900 p-5'>
          <h4 className='mt-3 text-xl text-white'>Customer information</h4>
          <form className="space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" value="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="name" className="text-white">Full Name</label>
                <input id="name" name="name" type="text" required className="w-full rounded border border-cyan-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm my-1" placeholder="Your Full Name" />
              </div>
              <div>
                <label htmlFor="email" className="text-white">Email</label>
                <input id="email" name="email" type="email" required className="w-full rounded border border-cyan-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm my-1" placeholder="Your Email" />
              </div>
              <div>
                <label htmlFor="address" className="text-white">Adress</label>
                <input id="street" name="street" type="text" required className="w-full rounded border border-cyan-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm my-1" placeholder="Street" />
                <input id="city" name="city" type="text" required className="w-full rounded border border-cyan-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm my-1" placeholder="City" />
                <div className='md:flex gap-5'>
                  <input id="country" name="country" type="text" required className="w-full rounded border border-cyan-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm my-1" placeholder="Country" />
                  <input id="zip" name="zip" type="text" required className="w-full rounded border border-cyan-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm my-1" placeholder="Zip Code" />
                </div>
              </div>
              <div>
                <h4 className='mt-3 text-xl text-white'>Payment Information</h4>
                <label htmlFor="card" className="text-white">Card Number</label>
                <input id="card" name="card" type="text" required className="w-full rounded border border-cyan-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm my-1" placeholder="Card Number MM/YY CVC" />
              </div>
              <div className='md:flex gap-5'>
                <div>
                  <label htmlFor="exp-month" className="text-white">Exp Month</label>
                  <input id="exp-month" name="exp-month" type="text" required className="w-full rounded border border-cyan-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm my-1" placeholder="Exp Month" />
                </div>
                <div>
                  <label htmlFor="exp-year" className="text-white">Exp Year</label>
                  <input id="exp-year" name="exp-year" type="text" required className="w-full rounded border border-cyan-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm my-1" placeholder="Exp Year" />
                </div>
              </div>
            </div>
            <div>
              <button type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-cyan-600 py-2 px-4 text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Proceed To Checkout
              </button>
            </div>
          </form>
        </div>
      </div >
    </div >
  );
};

export default Checkout;