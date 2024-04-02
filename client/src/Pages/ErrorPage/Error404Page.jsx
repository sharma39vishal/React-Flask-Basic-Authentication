import React from 'react';
import { Link } from 'react-router-dom';

export default function Error404Page() {
  return (
    <section className="bg-white">
      <div className="container flex flex-col items-center justify-center min-h-screen px-6 py-12 mx-auto">
        <div className="text-center">
          <p className="text-sm font-medium text-blue-500">
            404 error
          </p>
          <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">
            We can’t find that page
          </h1>
          <p className="mt-4 text-gray-500">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>
          <div className="flex items-center mt-6 gap-x-3">
            <Link to="/" className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
              <span>Go back</span>
            </Link>
            <Link to="/" className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg sm:w-auto hover:bg-blue-600">
              Take me home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
