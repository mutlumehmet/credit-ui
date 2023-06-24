import React from "react";

export default function Navbar() {
  return (
    <header className="sticky top-0">
      <nav className="bg-[#0a1a2b] border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="/" className="flex items-center">
            <img
              src="data:image/jpeg;base64,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"
              className="mr-3 h-6 sm:h-9"
              alt="Cognitivecredit Logo"
            />
          </a>
          <div className="flex items-center lg:order-2">
            <a
              href="/"
              className="text-white  hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  focus:outline-none hover:text-gray-400 "
            >
              Log in
            </a>
            <a
              href="/"
              className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >
              Get started
            </a>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a
                  href="/"
                  className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                  aria-current="page"
                >
                  Companies
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="block py-2 pr-4 pl-3 text-gray-400 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Comparables
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="block py-2 pr-4 pl-3 text-gray-400 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Drive
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="block py-2 pr-4 pl-3 text-gray-400 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Text Search
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
