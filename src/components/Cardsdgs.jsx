import React from "react";
import Image from "next/image";

const Cardsdgs = ({ image }) => {
  return (
    <div className="w-36 md:w-48">
      <Image
        loading="lazy"
        src={image}
        alt="sdgs-image"
        width="180"
        height="180"
      />
    </div>
  );
};

export default Cardsdgs;
