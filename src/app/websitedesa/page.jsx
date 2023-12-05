import React from "react";

export const metadata = {
  title: "Beralih Website | SDGs Desa Sidorejo",
};

const page = () => {
  return (
    <div className="h-screen bg-[url('/sidorejo-jumbotron.jpg')] bg-no-repeat bg-cover flex items-center justify-center bg-sky-900 bg-blend-multiply">
      <a
        href="http://www.sidorejo-lampungtimur.desa.id/"
        class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-black rounded-lg bg-[#FECD01] hover:bg-[#d1b43e] focus:ring-4 focus:ring-blue-300 mx-4 md:mx-0"
      >
        Beralih ke Website Desa Sidorejo
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
    </div>
  );
};

export default page;
