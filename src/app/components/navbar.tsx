"use client";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

export default function Navbar() {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.user);
  return (
    <div className="bg-white w-[100vw] h-[8vh] flex gap-3 justify-between items-center drop-shadow-md">
      <div className="ml-5">
        <p
          onClick={() => router.push("/")}
          className="text-orange-400 font-bold text-[50px] hover:cursor-pointer"
        >
          Todos.
        </p>
      </div>
      <div className="mr-5">
        {user.objectId ? (
          <div className="text-black">
            <div>{user.name}</div>
            <div>{user.email}</div>
          </div>
        ) : (
          <div className="flex gap-3 justify-center items-center mr-4">
            <button
              onClick={() => router.push("/register")}
              className="bg-orange-400 w-[70px] h-[30px] rounded-md text-black drop-shadow text-center hover:cursor-pointer"
            >
              Register
            </button>
            <button
              onClick={() => router.push("/login")}
              className="bg-orange-400 w-[70px] h-[30px] rounded-md text-black drop-shadow text-center hover:cursor-pointer"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
