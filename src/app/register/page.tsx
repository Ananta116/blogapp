"use client";

import { useState } from "react";

import RegForm from "../components/regform";
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
      <div className="mt-[100px] flex justify-evenly">
        <div className="text-white flex flex-col justify-center items-center">
          <h1 className="text-[30px] font-light text-black">
            Post Your Gaming Experience
          </h1>
          <h2>IN</h2>

          <p className="text-orange-400 drop-shadow-md font-extrabold text-[100px]">
            Todos.
          </p>
        </div>
        <div>
          <RegForm onReload={onReload} />
        </div>
      </div>
    </div>
  );
}
