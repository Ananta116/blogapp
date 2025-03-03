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
        <div className="text-white">
          <h1 className="text-[30px] font-semibold">Post Your Story</h1>
          <h2 className="font-thin">
            Post your story let the world knows what you doing!
          </h2>
          <Image
            className="rounded-md"
            src={"/nextjs.png"}
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
