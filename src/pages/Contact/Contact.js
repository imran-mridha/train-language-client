import React from 'react';
import Lottie from 'lottie-react';
import reader from '../../assets/images/97681-contact-us.json'

const Contact = () => {
  return (
    <div className=''>
      <h2 className="text-4xl font-semibold text-center mt-10 lg:my-10 leading-tight lg:text-5xl">Let's <span className='font-semibold text-cyan-500'>talk!</span> </h2>
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16  text-gray-100">
        <div className="">
          <div className="">
          </div>
          <Lottie animationData={reader} loop={true} />
        </div>
        <form noValidate="" className=" bg-cyan-900 p-5 ng-untouched ng-pristine ng-valid rounded-lg">
          <div>
            <label htmlhtmlFor="name" className="text-xm">Full name</label>
            <input id="name" type="text" placeholder="" className="w-full my-2 p-3 rounded bg-cyan-50 border border-cyan-500 outline-none text-gray-900" />
          </div>
          <div>
            <label htmlhtmlFor="email" className="text-xm">Email</label>
            <input id="email" type="email" required className="w-full my-2 p-3 rounded bg-cyan-50 border border-cyan-500 outline-none text-gray-900" />
          </div>
          <div>
            <label htmlhtmlFor="message" className="text-xm">Message</label>
            <textarea id="message" rows="3" className="w-full my-2 p-3 rounded bg-cyan-50 border border-cyan-500 outline-none text-gray-900"></textarea>
          </div>
          <button type="submit" className="w-full p-3 text-xl font-semibold tracking-wide uppercase rounded bg-cyan-500 hover:bg-cyan-600 text-white">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;