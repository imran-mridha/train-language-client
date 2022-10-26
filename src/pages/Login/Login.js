import React from 'react';

const Login = () => {
  return (
    <div className='bg-cyan-900 p-5 w-11/12 md:w-6/12 lg:w-4/12 mx-auto my-20 rounded-lg'>
      <h4 className='mt-3 text-2xl text-white'>Login</h4>
      <form className="space-y-6">
        <input type="hidden" name="remember" value="true" />
        <div className="-space-y-px rounded-md shadow-sm">
          <div>
            <label htmlFor="email" className="text-white">Email</label>
            <input id="email" name="email" type="email" required className="w-full rounded border border-cyan-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm my-1" placeholder="Your Email" />
          </div>
          <div>
            <label htmlFor="password" className="text-white">Password</label>
            <input id="password" name="password" type="password" required className="w-full rounded border border-cyan-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm my-1" placeholder="Your Password" />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="text-white">Confirm Password</label>
            <input id="confirmPassword" name="confirmPassword" type="password" required className="w-full rounded border border-cyan-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm my-1" placeholder="Confirm Password" />
          </div>
        </div>
        <div>
          <button type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-cyan-600 py-2 px-4 text-xl font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;