import React, { useState } from "react";

const DisableState = ({ label, desa, type, name }) => {
  const [value, setValue] = useState(desa);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white my-2 md:my-4 gap-y-2 md:gap-y-4">
      {label}
      <input
        readOnly
        value={value || ""}
        onChange={handleChange}
        name={name}
        type={type}
        className="block w-full p-3 sm:text-md rounded-md bg-slate-200 focus:ring-indigo-500 focus:border-indigo-500 text-black"
      />
    </label>
  );
};

export default DisableState;
