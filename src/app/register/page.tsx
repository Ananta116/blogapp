"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import RegForm from "../components/regform";
import { IUser } from "../type";
import { useRouter } from "next/navigation";

export default function Register() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [render, setRender] = useState<boolean>(true);

  const router = useRouter();
  const onReload = () => {
    setRender(!render);
  };
  return (
    <div>
      <div className="mt-[100px] flex justify-evenly">
        <div className="text-white flex flex-col justify-center items-center">
          <h1 className="text-[30px] font-light text-lime-400">
            Post Your Gaming Experience
          </h1>

          <Image
            className="rounded-md"
            src={"/goblox.png"}
            alt="errors"
            width={450}
            height={500}
          />
        </div>
        <div>
          <RegForm onReload={onReload} />
        </div>
      </div>
    </div>
  );
}
