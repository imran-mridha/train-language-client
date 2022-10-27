import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Checkout = () => {
  const course = useLoaderData();
  const { title, image_url, price, instructor } = course;
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleCheckout = (event) => {
    event.preventDefault();
    toast.success('Payment Success!!', { autoClose: 500 });
    navigate('/courses')
  }
  return (
    <div>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-5 mx-5 lg:mx-20 my-20'>
        <div className='bg-cyan-100  p-6 rounded-lg h-min col-span-full lg:col-span-7'>
          <div>
            <img className='rounded-lg mb-3' src={image_url} alt="" />
          </div>
          <div>
            <p className='text-3xl font-semibold'>Course name: {title}</p>
            <p className='text-2xl font-semibold my-3'>Price: <span className='text-cyan-600'>${price}</span> </p>
            <img className='w-16 h-16 rounded-full' src={instructor.img} alt="" />
          </div>
        </div>
        <div className='col-span-full lg:col-span-5 bg-cyan-900 p-5 rounded-lg'>
          <h4 className='mt-3 text-xl text-white'>Customer information</h4>
          <form onSubmit={handleCheckout} className="space-y-6">
            <input type="hidden" name="remember" value="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlhtmlFor="name" className="text-white">Full Name</label>
                <input id="name" defaultValue={user?.displayName} name="name" type="text" required className="w-full rounded border border-cyan-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm my-1" placeholder="Your Full Name" />
              </div>
              <div>
                <label htmlhtmlFor="email" className="text-white">Email</label>
                <input id="email" defaultValue={user?.email} name="email" type="email" required className="w-full rounded border border-cyan-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm my-1" placeholder="Your Email" />
              </div>
              <div>
                <label htmlhtmlFor="address" className="text-white">Adress</label>
                <input id="street" name="street" type="text" className="w-full rounded border border-cyan-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm my-1" placeholder="Street" />
                <input id="city" name="city" type="text" className="w-full rounded border border-cyan-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm my-1" placeholder="City" />
                <div className='md:flex gap-5'>
                  <input id="country" name="country" type="text" className="w-full rounded border border-cyan-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm my-1" placeholder="Country" />
                  <input id="zip" name="zip" type="text" className="w-full rounded border border-cyan-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm my-1" placeholder="Zip Code" />
                </div>
              </div>
              <div>
                <h4 className='mt-3 text-xl text-white'>Payment Information</h4>
                <label htmlhtmlFor="card" className="text-white">Card Number</label>
                <input id="card" name="card" type="text" required className="w-full rounded border border-cyan-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm my-1" placeholder="Card Number MM/YY CVC" />
              </div>
              <div className='md:flex gap-5'>
                <div>
                  <label htmlhtmlFor="exp-month" className="text-white">Exp Month</label>
                  <input id="exp-month" name="exp-month" type="text" className="w-full rounded border border-cyan-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm my-1" placeholder="Exp Month" />
                </div>
                <div>
                  <label htmlhtmlFor="exp-year" className="text-white">Exp Year</label>
                  <input id="exp-year" name="exp-year" type="text" className="w-full rounded border border-cyan-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm my-1" placeholder="Exp Year" />
                </div>
              </div>
            </div>
            <div>
              <button type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-cyan-600 py-2 px-4 text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Proceed To Payment
              </button>
            </div>
          </form>
        </div>
      </div >
    </div >
  );
};

export default Checkout;