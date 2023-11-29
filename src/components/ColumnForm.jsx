"use client";

import React from "react";

const ColumnForm = ({ label, type, name, placeholder }) => {
  return (
    <div className="flex flex-col my-2 md:my-4 gap-y-2 md:gap-y-4">
      <label htmlFor="">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required
        className="p-3 bg-slate-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-md rounded-md text-black"
      />
    </div>
  );
};

export default ColumnForm;
