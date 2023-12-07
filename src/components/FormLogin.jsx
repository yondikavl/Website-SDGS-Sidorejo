"use client";

import React from "react";
import { useState, useEffect } from "react";

const FormLogin = () => {
  const [isLoginPage, setIsLoginPage] = useState(false);

  useEffect(() => {
    setIsLoginPage(true);
  }, []);

  return <div>{isLoginPage ? "This is never prerendered" : "Prerendered"}</div>;
};

export default FormLogin;
