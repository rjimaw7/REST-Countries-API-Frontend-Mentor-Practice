import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="flex justify-center space-x-1 dark:text-gray-100">
        <ul>
          {pageNumbers.map((number) => (
            <li
              key={number}
              className="inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md dark:bg-gray-900 dark:text-violet-400 dark:border-violet-400"
            >
              <button
                onClick={() => paginate(number)}
                // href="/"
                // className="page-link"
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Pagination;
