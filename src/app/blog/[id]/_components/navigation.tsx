"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  TiSocialFacebook,
  TiSocialGithub,
  TiSocialLinkedin,
} from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa";
import { IBlog } from "@/app/type";

export interface IProps {
  data : IBlog
}
export default function Navblog({data}:IProps) {
  const router = useRouter();
  return (
    <div className="max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center">
      <button
        onClick={() => router.push("/")}
        className="w-[70px] h-[25px] rounded-md text-center text-black bg-white"
      >
        Kembali
      </button>
      <section className="text-white mt-[20px]">
        <p className="text-center">SHARE</p>
        <div className="flex">
          <Link
            href={`https://www.facebook.com/sharer/sharer.php?u=}`}
          >
            <TiSocialFacebook className="w-[50px] h-[50px]" />
          </Link>
          <Link href={`https://wa.me/?text=localhost:3000/blog/${data.objectId}`}>
            <FaWhatsapp className="w-[50px] h-[50px]" />
          </Link>
          <TiSocialGithub className="w-[50px] h-[50px]" />
          <TiSocialLinkedin className="w-[50px] h-[50px]" />
        </div>
      </section>
    </div>
  );
}
