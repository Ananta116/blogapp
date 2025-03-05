"use client"
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import Avatar from "./avatar";
import Burger from "./burgermenu";

export default function Navbar() {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.user);
  return (
    <div className="bg-white w-[100vw] h-[8vh] flex gap-3 justify-between items-center drop-shadow-md sticky top-0">
      <div className="ml-5">
        <p
          onClick={() => router.push("/")}
          className="text-black font-semibold text-[50px] hover:cursor-pointer subpixel-antialiased"
        >
          Todos.
        </p>
      </div>
      <div className="mr-5">
        {user.objectId ? (
          <div className="text-black flex">
            <Avatar user={user} />
          </div>
        ) : (
          <div>
            <div className="flex gap-3 justify-center items-center mr-4 max-sm:hidden">
              <button
                onClick={() => router.push("/register")}
                className="bg-black w-[70px] h-[30px] rounded-md text-white drop-shadow text-center hover:cursor-pointer"
              >
                Register
              </button>
              <button
                onClick={() => router.push("/login")}
                className="bg-black w-[70px] h-[30px] rounded-md text-white drop-shadow text-center hover:cursor-pointer"
              >
                Login
              </button>
            </div>
            <Burger/>
          </div>
        )}
      </div>
    </div>
  );
}
