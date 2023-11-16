import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail, AiOutlineGlobal } from "react-icons/ai";
const TopHeader = () => {
  const items = [
    { icon: <BsFillTelephoneFill />, description: "+212 000 xx xx xx" },
    { icon: <AiOutlineMail />, description: "example@gmail.com" },
    { icon: <AiOutlineGlobal />, description: "Desa Sidorejo, Lampung Timur" },
  ];

  return (
    <div className="py-5 w-full text-center bg-slate-100">
      <div className="flex gap-3 flex-wrap justify-end px-4 md:px-8">
        <ul className="flex flex-wrap gap-2 md:gap-8 justify-center text-center text-slate-800">
          {items.map(({ icon, description }, index) => (
            <li key={index} className="flex items-center gap-2">
              <span>{icon}</span>
              <span>{description}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default TopHeader;
