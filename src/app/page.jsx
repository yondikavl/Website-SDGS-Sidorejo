"use client";

import Image from "next/image";
import { useState } from "react";
import Head from "next/head";

export default function Home() {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbzh3FyVVgLVeKU2XIQPwEk7KRC-5kDSIHH61mNWkDx0teGzERDt7hB33oDDQlH_LSzT/exec";

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setSubmitting(true);

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: new FormData(form),
      });

      if (response.ok) {
        alert("Thank you! Your form is submitted successfully");
        form.reset();
      } else {
        alert("Error submitting the form. Please try again.");
      }
    } catch (error) {
      console.error("Error!", error.message);
    } finally {
      setSubmitting(false);
    }
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
          method="post"
          action=""
          name="contact-form"
          onSubmit={handleSubmit}
          className="py-12 space-y-4 bg-[#005599] mx-4 md:mx-8"
        >
          <div className="flex flex-col items-center justify-center">
            <input
              type="text"
              name="your-name"
              placeholder="Name"
              required
              className="p-3 bg-slate-200 focus:ring-indigo-500  focus:border-indigo-500 block w-3/6 sm:text-md rounded-md text-black"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <input
              type="text"
              name="your-number"
              placeholder="Number"
              required
              className="p-3 bg-slate-200 focus:ring-indigo-500  focus:border-indigo-500 block w-3/6 sm:text-md rounded-md text-black"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <input
              type="email"
              name="your-email"
              placeholder="Email"
              required
              className="p-3 bg-slate-200 focus:ring-indigo-500  focus:border-indigo-500 block w-3/6 sm:text-md rounded-md text-black"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
              className="p-3 bg-slate-200 focus:ring-indigo-500  focus:border-indigo-500 block w-3/6 sm:text-md rounded-md text-black"
            ></textarea>
          </div>

          <div className="flex flex-col items-center justify-center">
            <input
              type="submit"
              value={submitting ? "Submitting..." : "Submit"}
              id="submit"
              disabled={submitting}
              className="flex items-center justify-center text-sm w-64 rounded-md py-3 px-2 text-white bg-indigo-500"
            />
          </div>
        </form>
      </div>
    </main>
  );
}
