"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();
  return (
    <div>
      <div className="flex gap-5 justify-center mt-[50px]">
        <div className="w-[300px] h-[400px] bg-black rounded-md">
          <div className="mt-5 flex flex-col justify-center items-center">
            <Image
              className=""
              src={"/goblox2.png"}
              alt="logo"
              width={200}
              height={100}
            />
            <div className="mt-[100px] flex flex-col items-center justify-center">
              <h1>Free Slot</h1>
              <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloremque, porro.
              </p>
            </div>
          </div>
        </div>
        <div className="w-[300px] h-[400px] bg-black rounded-md">
          <div className="mt-5 flex flex-col justify-center items-center">
            <Image
              className=""
              src={"/goblox2.png"}
              alt="logo"
              width={200}
              height={100}
            />
            <div className="mt-[100px] flex flex-col items-center justify-center">
              <h1>Free Slot</h1>
              <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloremque, porro.
              </p>
            </div>
          </div>
        </div>
        <div className="w-[300px] h-[400px] bg-black rounded-md">
          <div className="mt-5 flex flex-col justify-center items-center">
            <Image
              className=""
              src={"/goblox2.png"}
              alt="logo"
              width={200}
              height={100}
            />
            <div className="mt-[100px] flex flex-col items-center justify-center">
              <h1>Free Slot</h1>
              <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloremque, porro.
              </p>
            </div>
          </div>
        </div>
        <div className="w-[300px] h-[400px] bg-black rounded-md">
          <div className="mt-5 flex flex-col justify-center items-center">
            <Image
              className=""
              src={"/goblox2.png"}
              alt="logo"
              width={200}
              height={100}
            />
            <div className="mt-[100px] flex flex-col items-center justify-center">
              <h1>Free Slot</h1>
              <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloremque, porro.
              </p>
            </div>
          </div>
        </div>
      </div>
      <button 
      onClick={()=> router.push("/dashboard")}
      className="w-[100px] h-[50px] bg-amber-700">New Blog</button>
    </div>
  );
}
