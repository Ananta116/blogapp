"use client";

import { useState } from "react";
// import { IUser } from "../type";
// import RegForm from "../components/regForm";

import LoginForm from "./_components/loginform";

export default function Register() {
//   const [users, setUsers] = useState<IUser[]>([]);
  const [render, setRender] = useState<boolean>(true);

  const onReload = () => {
    setRender(!render);
  };
  return (
    <div>
      <div className="mt-[100px] flex justify-evenly max-sm:mt-[50px] max-sm:flex-col sm:flex-col sm:justify-center sm:items-center md:flex-col lg:flex-row">
        <div className="text-white mt-[50px] max-sm:mt-10 flex flex-col justify-center items-center">
          <h1 className="text-[30px] font-semibold max-sm:text-center lg:mt-0">Keep your gaming experience</h1>
          <h2 className="text-[50px] font-bold">Todos.</h2>
        </div>
        <div className="ml-[50px] max-sm:ml-0 sm:ml-0 lg:ml-[50px]">
          <LoginForm onReload={onReload} />
        </div>
      </div>
    </div>
  );
}
