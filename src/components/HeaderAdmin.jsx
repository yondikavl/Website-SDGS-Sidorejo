"use client";

import { useState, useRef } from "react";
import Image from "next/image";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to toggle the modal visibility
  const toggleModal = () => {
    const modal = document.getElementById("authentication-modal");
    modal.classList.toggle("hidden");
  };

  return (
    <div>
      <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            class="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image src="/lamtim.svg" alt="logo-web" width="24" height="24" />
            <span class="self-center text-base md:text-2xl font-bold whitespace-nowrap text-black">
              Admin Desa Sidorejo
            </span>
          </a>
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              isMobileMenuOpen ? "block" : "hidden"
            }`}
            id="navbar-sticky"
          >
            <ul class="flex flex-col md:items-center p-0 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row py-4 md:py-0 md:mt-0 md:border-0 md:bg-white">
              <li>
                <a
                  href="/cms"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                >
                  Data Survey
                </a>
              </li>
              <li>
                <a
                  href="/dashboard"
                  className="block text-white bg-[#d25e5e] hover:bg-[#68a748] focus:ring-4 focus:outline-none focus:ring-[#FECD01] font-medium rounded-lg text-sm px-5 py-2.5 w-full text-center"
                >
                  Keluar
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
