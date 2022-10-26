import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import reader from '../assets/images/98488-bot-error-404.json';

const ErrorPage = () => {
  return (
    <section className="flex items-center h-screen p-16 bg-gray-900 text-gray-100">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
            <Lottie animationData={reader} loop={true} />
          <Link rel="noopener noreferrer" to="/" className="px-8 py-3 font-semibold rounded bg-cyan-300 hover:bg-cyan-600 hover:text-white text-gray-900">Back to homepage</Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;