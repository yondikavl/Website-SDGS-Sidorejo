"use client";

import Image from "next/image";
import { Main } from "next/document";
import React, { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = {
      name,
      email,
      phone,
      message,
    };

    console.log(form);
  };

  return (
    <main className="bg-white min-h-screen">
      <div className="flex pt-40 flex-row items-center justify-center gap-6">
        <Image src="/image 1.png" alt="me" width="64" height="64" />
        <div className="text-left py-20 flex flex-col">
          <h1 className="font-bold text-slate-800 text-6xl">
            FORM SURVEY PENDATAAN
          </h1>
          <p className="font-bold text-[#0099CB] text-2xl">
            SDGs Desa Sidorejo, Kec. Sekampung Udik, Kab. Lampung Timur
          </p>
        </div>
      </div>
      <div className="mx-auto">
        <div className="flex mx-4 md:mx-8">
          <div className="bg-[#FD6633] flex-1 py-2"></div>
          <div className="bg-[#84D25E] flex-1 py-2"></div>
          <div className="bg-[#FECD01] flex-1 py-2"></div>
        </div>
        <form
          className="py-12 space-y-4 bg-[#005599] mx-4 md:mx-8"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col items-center justify-center">
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="name"
              id="name"
              className="p-3 bg-slate-200 focus:ring-indigo-500  focus:border-indigo-500 block w-3/6 sm:text-md rounded-md text-black"
              placeholder="Your Name"
            ></input>
          </div>
          <div className="flex items-center justify-center">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              id="email"
              className="p-3 bg-slate-200 focus:ring-indigo-500  focus:border-indigo-500 block w-3/6 sm:text-md border-gray-300 rounded-md text-black"
              placeholder="Your Email"
            ></input>
          </div>
          <div className="flex items-center justify-center">
            <label htmlFor="phone" className="sr-only">
              Phone
            </label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="tel"
              name="phone"
              id="phone"
              className="p-3 bg-slate-200 focus:ring-indigo-500  focus:border-indigo-500 block w-3/6 sm:text-md border-gray-300 rounded-md text-black"
              placeholder="Your Phone"
            ></input>
          </div>
          <div className="flex items-center justify-center">
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              name="message"
              id="message"
              className="p-3 bg-slate-200 focus:ring-indigo-500  focus:border-indigo-500 block w-3/6 sm:text-md border-gray-300 rounded-md text-black"
              placeholder="your message"
            ></textarea>
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="flex items-center justify-center text-sm w-64 rounded-md py-3 px-2 text-white bg-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
