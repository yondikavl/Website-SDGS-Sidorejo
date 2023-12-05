"use client";

import React from "react";

const Jumbotron = () => {
  return (
    <div>
      <section class="bg-gradient-to-b from-blue-800 to-slate-900">
        <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            SDGs Desa Sidorejo, Lampung Timur
          </h1>
          <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Website pendataan{" "}
            <span className="italic">Suistanable Development Goals</span> (SDGs)
            Desa Sidorejo Lampung Timur
          </p>
          <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a
              href="/kuesioner"
              class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-black rounded-lg bg-[#FECD01] hover:bg-[#d1b43e] focus:ring-4 focus:ring-blue-300"
            >
              Isi Survey
              <svg
                class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
            <a
              href="#"
              class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
            >
              Tentang SDGs Desa
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Jumbotron;
