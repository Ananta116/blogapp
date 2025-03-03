"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  return (
    <div className="bg-black w-[100vw] h-[8vh] flex gap-3 justify-between items-center drop-shadow-md">
      <div className="ml-5">
        <Image 
        onClick={()=> router.push("/")}
        className="drop-shadow-md hover:cursor-pointer"
        src={"/goblox2.png"} alt="gobloxlogo" width={100} height={300}/>
      </div>
      <div className="flex gap-3 justify-center items-center mr-4">
        <button 
        onClick={()=> router.push("/register")}
        className="bg-lime-300 w-[70px] h-[30px] rounded-md text-black border drop-shadow text-center hover:cursor-pointer">
          Register
        </button>
        <button 
        onClick={()=> router.push("/login")}
        className="bg-lime-300 w-[70px] h-[30px] rounded-md text-black drop-shadow text-center hover:cursor-pointer">
          Login
        </button>
      </div>
    </div>
  );
}
