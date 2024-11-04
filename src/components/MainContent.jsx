import React from 'react';

function MainContent() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        {/* Background effects */}
      </div>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-40">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
         
        </div>
        <div className="text-center">
          <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">Budget Your Adventures, Live Your Dreams.</h1>
          <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl">Empowering Travelers to Manage Their Finances with Ease.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="./signup" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Learn more <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        {/* Background effects */}
      </div>
    </div>
  );
}

export default MainContent;
