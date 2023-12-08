"use client";
import React, { useState } from "react";

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "admin@sidorejo.com" && password === "sidorejo") {
      const isAuthenticated = true;

      if (isAuthenticated) {
        if (rememberMe) {
          // Do something if rememberMe is checked
        }

        // Use window.location to navigate
        window.location.href = "/cms";
      }
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <div>
      <div
        id="authentication-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-screen max-h-full bg-black bg-opacity-50"
      >
        <div
          className="relative p-4 w-full max-w-md max-h-screen"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative bg-white rounded-lg shadow">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
              <h3 className="text-xl font-semibold text-gray-900 ">
                Masuk Sebagai Admin Desa
              </h3>
            </div>
            <div class="p-4 md:p-5">
              <form class="space-y-4" onSubmit={handleLogin}>
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="name@gmail.com"
                    required
                  ></input>
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Kata sandi
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                  ></input>
                </div>
                <div class="flex justify-between">
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input
                        id="remember"
                        type="checkbox"
                        checked={rememberMe}
                        onChange={() => setRememberMe(!rememberMe)}
                        class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                      ></input>
                    </div>
                    <label
                      for="remember"
                      class="ms-2 text-sm font-medium text-gray-900"
                    >
                      Ingat saya
                    </label>
                  </div>
                  <a href="#" class="text-sm text-blue-700 hover:underline">
                    Lupa Password
                  </a>
                </div>
                <button
                  type="submit"
                  class="w-full text-white bg-[#84D25E] hover:bg-[#68a748] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Masuk Akun
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
