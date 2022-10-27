import React from 'react';

const Blog = () => {
  return (
    <div className="space-y-4 w-11/12 md:w-9/12 mx-auto my-20">
      <h2 className="mb-12 text-3xl font-semibold leading-none text-center sm:text-5xl">Questions & Answers</h2>
      <details className="group border-l-4 border-cyan-500 bg-gray-50 p-6" open>
        <summary className="flex cursor-pointer items-center justify-between">
          <h2 className="text-lg font-medium text-gray-900">
            What is cors?
          </h2>

          <span
            className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-cyan-500 sm:p-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </summary>

        <p className="mt-4 leading-relaxed text-gray-700">
          Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled access to resources located outside of a given domain. It extends and adds flexibility to the same-origin policy (SOP). However, it also provides potential for cross-domain attacks, if a website's CORS policy is poorly configured and implemented. CORS is not a protection against cross-origin attacks such as cross-site request forgery (CSRF).
        </p>
      </details>

      <details className="group border-l-4 border-cyan-500 bg-gray-50 p-6">
        <summary className="flex cursor-pointer items-center justify-between">
          <h2 className="text-lg font-medium text-gray-900">
            Why are you using firebase? What other options do you have to implement authentication?
          </h2>

          <span
            className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-cyan-500 sm:p-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </summary>

        <p className="mt-4 leading-relaxed text-gray-700">
          The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.
        </p>
        <p className="mt-4 leading-relaxed text-gray-700">
          <ul className='list-disc px-5'>
            <li>Single-Factor/Primary Authentication. ...</li>
            <li>Two-Factor Authentication (2FA) ...</li>
            <li>Single Sign-On (SSO) ...</li>
            <li>Multi-Factor Authentication (MFA) ...</li>
            <li>Password Authentication Protocol (PAP)</li>
            <li>Challenge Handshake Authentication Protocol (CHAP)</li>
            <li>Extensible Authentication Protocol (EAP)</li>
          </ul>
        </p>
      </details>
      <details className="group border-l-4 border-cyan-500 bg-gray-50 p-6">
        <summary className="flex cursor-pointer items-center justify-between">
          <h2 className="text-lg font-medium text-gray-900">
            How does the private route work?
          </h2>

          <span
            className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-cyan-500 sm:p-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </summary>

        <p className="mt-4 leading-relaxed text-gray-700">
          The private route component is similar to the public route, the only change is that redirect URL and authenticate condition.
        </p>
        <p className="mt-4 leading-relaxed text-gray-700">
          If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
        </p>
      </details>
      <details className="group border-l-4 border-cyan-500 bg-gray-50 p-6">
        <summary className="flex cursor-pointer items-center justify-between">
          <h2 className="text-lg font-medium text-gray-900">
            What is Node? How does Node work?
          </h2>

          <span
            className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-cyan-500 sm:p-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </summary>

        <p className="mt-4 leading-relaxed text-gray-700">
          Node.js is an open source, cross-platform runtime environment for developing server-side and networking applications. Node.js applications are written in JavaScript, and can be run within the Node.js runtime on OS X, Microsoft Windows, and Linux.
        </p>
        <p className="mt-4 leading-relaxed text-gray-700">
          Node.js also provides a rich library of various JavaScript modules which simplifies the development of web applications using Node.js to a great extent. <br />
          Node.js = Runtime Environment + JavaScript Library
        </p>
        <p className="mt-4 leading-relaxed text-gray-700">
          It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
        </p>
        <p className="mt-4 leading-relaxed text-gray-700">
          Working of Node.js: Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.
        </p>
      </details>
    </div>
  );
};

export default Blog;