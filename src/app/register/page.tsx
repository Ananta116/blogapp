"use client";

import { useState } from "react";

import RegForm from "./_components/regform";

// import { IUser } from "../type";
// import { useRouter } from "next/navigation";

export default function Register() {
  // const [users, setUsers] = useState<IUser[]>([]);
  const [render, setRender] = useState<boolean>(true);

  // const router = useRouter();
  const onReload = () => {
    setRender(!render);
  };
  return (
    <div>
      <div className="mt-[100px] flex justify-evenly max-sm:flex-col sm:flex-col sm:justify-center sm:items-center md:flex-col lg:flex-row">
        <div className="text-white flex flex-col justify-center items-center">
          <h1 className="text-[30px] font-light text-white max-sm:text-center">
            Post Your Gaming Experience
          </h1>
          <h2>IN</h2>

          <p className="text-white drop-shadow-md font-extrabold text-[100px]">
            Todos.
          </p>
        </div>
        <div className="ml-[50px] max-sm:ml-0 sm:ml-0 lg:ml-[50px]">
          <RegForm onReload={onReload} />
        </div>
      </div>
    </div>
  );
}
