import Link from "next/link";
import React from "react";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center w-full h-20 bg-transparent mt-4">
      <div className="flex items-center space-x-10">
        {/* Logo */}
        <Logo />
        {/* Nav Items */}

        <div className="flex">
          <ul className="flex items-baseline list-none m-0 p-0 space-x-12">
            <Link href="/products">
              <a className="pb-0 decoration-none cursor-pointer font-inter  text-gray-800 font-semibold">
                <li className="text-sm font-inter font-bold text-gray-800 dark:text-gray-100">
                  Products
                </li>
              </a>
            </Link>
            <Link href="/solutions">
              <a className="pb-0 decoration-none cursor-pointer font-inter  text-gray-800 font-semibold">
                <li className="text-sm font-inter font-bold text-gray-800 dark:text-gray-100">
                  Solutions
                </li>
              </a>
            </Link>
            <Link href="/learn">
              <a className="pb-0 decoration-none cursor-pointer font-inter  text-gray-800 font-semibold">
                <li className="text-sm font-inter font-bold text-gray-800 dark:text-gray-100">
                  Learn
                </li>
              </a>
            </Link>
            <Link href="/pricing">
              <a className="pb-0 decoration-none cursor-pointer font-inter  text-gray-800 font-semibold">
                <li className="text-sm font-inter font-bold text-gray-800 dark:text-gray-100">
                  Pricing
                </li>
              </a>
            </Link>
          </ul>
        </div>
      </div>
      {/* Sign Up & Log In Button */}
      <div className="flex items-center space-x-6">
        <Link href="/signup">
          <a>
            <button className="btn text-md bg-gray-50 text-violet-600 hover:bg-violet-500 hover:text-gray-50 shadow-md shadow-violet-500 hover:-translate-y-1">
              Sign Up
            </button>
          </a>
        </Link>
        <Link href="/login">
          <a>
            <button className="btn text-md bg-gray-200/30 text-gray-50 hover:bg-gray-200/30 hover:-translate-y-1">
              Log In
            </button>
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
