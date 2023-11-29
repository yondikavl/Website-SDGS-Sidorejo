"use client";

import React from "react";

const MultiOption = ({ label, options, values }) => {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white my-2 md:my-4 gap-y-2 md:gap-y-4">
        {label}
      </label>
      <select
        className="block w-full p-3 sm:text-md rounded-md bg-slate-200 focus:ring-indigo-500 focus:border-indigo-500 text-black"
        required
      >
        {options.map((option, index) => (
          <option key={index} value={values[index]}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MultiOption;
