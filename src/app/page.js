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
    <main className="bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto py-16">
        <form className="py-4 space-y-4" onSubmit={handleSubmit}>
          <div className="flex items-center justify-center">
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="name"
              id="name"
              className="p-3 shadow-md focus:ring-indigo-500  focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md text-black"
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
              className="p-3 shadow-md focus:ring-indigo-500  focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md text-black"
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
              className="p-3 shadow-md focus:ring-indigo-500  focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md text-black"
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
              className="p-3 shadow-md focus:ring-indigo-500  focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md text-black"
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
