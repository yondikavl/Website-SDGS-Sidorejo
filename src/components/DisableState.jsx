"use client";

import React from "react";

const DisableState = ({ label, desa, type }) => {
  return (
    <div>
      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white my-2 md:my-4 gap-y-2 md:gap-y-4">
        {label}
      </label>
      <input
        disabled
        value={desa}
        aria-label={label}
        type={type}
        class="block w-full p-3 sm:text-md rounded-md bg-slate-200 focus:ring-indigo-500 focus:border-indigo-500 text-black"
      />
    </div>
  );
};

export default DisableState;
