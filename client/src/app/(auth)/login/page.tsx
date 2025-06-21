"use client";

import React from "react";

import LoginForm from "./login-form";

const LoginPage = () => {
  return (
    <div>
      <div className="font-semibold text-xl text-center ">Login</div>
      <div className="flex justify-center">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
