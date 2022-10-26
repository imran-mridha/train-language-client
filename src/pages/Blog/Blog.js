import React from 'react';

const Blog = () => {
  return (
    <div class="space-y-4 w-11/12 md:w-9/12 mx-auto my-20">
      <details class="group border-l-4 border-cyan-500 bg-gray-50 p-6" open>
        <summary class="flex cursor-pointer items-center justify-between">
          <h2 class="text-lg font-medium text-gray-900">
            What is cors?
          </h2>

          <span
            class="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-cyan-500 sm:p-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
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

        <p class="mt-4 leading-relaxed text-gray-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
          molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
          voluptate dicta quo officiis explicabo consequuntur distinctio corporis
          earum similique!
        </p>
      </details>

      <details class="group border-l-4 border-cyan-500 bg-gray-50 p-6">
        <summary class="flex cursor-pointer items-center justify-between">
          <h2 class="text-lg font-medium text-gray-900">
            Why are you using firebase? What other options do you have to implement authentication?
          </h2>

          <span
            class="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-cyan-500 sm:p-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
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

        <p class="mt-4 leading-relaxed text-gray-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
          molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
          voluptate dicta quo officiis explicabo consequuntur distinctio corporis
          earum similique!
        </p>
      </details>
      <details class="group border-l-4 border-cyan-500 bg-gray-50 p-6">
        <summary class="flex cursor-pointer items-center justify-between">
          <h2 class="text-lg font-medium text-gray-900">
            How does the private route work?
          </h2>

          <span
            class="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-cyan-500 sm:p-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
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

        <p class="mt-4 leading-relaxed text-gray-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
          molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
          voluptate dicta quo officiis explicabo consequuntur distinctio corporis
          earum similique!
        </p>
      </details>
      <details class="group border-l-4 border-cyan-500 bg-gray-50 p-6">
        <summary class="flex cursor-pointer items-center justify-between">
          <h2 class="text-lg font-medium text-gray-900">
            What is Node? How does Node work?
          </h2>

          <span
            class="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-cyan-500 sm:p-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
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

        <p class="mt-4 leading-relaxed text-gray-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
          molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
          voluptate dicta quo officiis explicabo consequuntur distinctio corporis
          earum similique!
        </p>
      </details>
    </div>
  );
};

export default Blog;