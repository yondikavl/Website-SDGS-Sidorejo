"use client";

import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const menu = [
    { name: "Formulir SDGs", url: "/" },
    { name: "Profil Desa", url: "/" },
  ];
  const login = [{ name: "Masuk sebagai Admin", url: "/" }];

  return (
    <nav className="bg-white shadow ">
      <div className="justify-between px-4 mx-auto md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="#" className="flex items-center justify-center gap-4">
              <Image src="/lamtim.svg" alt="logo-web" width="24" height="24" />
              <h1 className="text-2xl bg-gradient-to-r from-slate-500 to-slate-800 bg-clip-text text-transparent font-bold">
                DESA SIDOREJO
              </h1>
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <RxCross1 className="text-[#0099CB]" />
                ) : (
                  <AiOutlineMenu className="text-[#0099CB]" />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col items-center justify-center space-y-8 md:flex md:flex-row md:space-x-8 md:space-y-0">
              {menu.map(({ name, url }, index) => (
                <li
                  key={index}
                  className="text-[#0099CB] font-medium text-base"
                >
                  <Link href={url}>{name}</Link>
                </li>
              ))}
              {login.map(({ name, url }, index) => (
                <li
                  key={index}
                  className="text-white bg-[#84D25E] px-6 py-3 font-bold text-base rounded-lg"
                >
                  <Link href={url}>{name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
