import React from "react";

const Navbar = () => {
  return (
    <>
      <header className="bg-gray-600">
        <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <a className="block text-white" href="/">
                Where in the world?
              </a>
            </div>

            <button className="flex space-x-2 items-center px-4 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
              <span className="text-white text-md">Dark Mode</span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
