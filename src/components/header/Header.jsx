import React from "react";
import TopHeader from "./TopHeader";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <div className="fixed w-full">
      {/* Top header */}
      {/* <TopHeader /> */}
      {/* Main header (navbar) */}
      <Navbar />
    </div>
  );
};
export default Header;
