import React from "react";

const page = () => {
  return (
    <div className="h-screen bg-white flex justify-center items-center text-center text-black">
      <div>
        <h1>halo</h1>
        <div className="w-screen h-screen pt-20 md:pt-24 px-2 md:px-40">
          <iframe
            width="100%"
            height="80%"
            frameborder="0"
            scrolling="no"
            src="https://docs.google.com/spreadsheets/d/1-tSEzRNcYy9cNXlK5UEYoTbMfx9CA61Hip6Vuh4K-m0/edit?usp=sharing"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default page;
