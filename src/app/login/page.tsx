"use client";

import Image from "next/image";
import { useState } from "react";
// import { IUser } from "../type";
// import RegForm from "../components/regForm";

import LoginForm from "../components/loginform";

export default function Register() {
//   const [users, setUsers] = useState<IUser[]>([]);
  const [render, setRender] = useState<boolean>(true);

  const onReload = () => {
    setRender(!render);
  };
  return (
    <div>
      <div className="mt-[100px] flex justify-evenly">
        <div className="text-black mt-[150px]">
          <h1 className="text-[30px] font-semibold">Keep your gaming experience</h1>
          <Image
            className="rounded-md mt-10"
            src={"/next.svg"}
            alt="errors"
            width={400}
            height={500}
          />
        </div>
        <div>
          <LoginForm onReload={onReload} />
        </div>
      </div>
    </div>
  );
}
