import React from "react";
import RegisterForm from "./register-form";

const RegisterPage = () => {
  return (
    <div>
      <div className="font-semibold text-xl text-center ">Register</div>
      <div className="flex justify-center">
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
