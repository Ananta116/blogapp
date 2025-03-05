"use client";
import Link from "next/link";
import {
  TiSocialFacebook,
  TiSocialGithub,
  TiSocialLinkedin,
} from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa";

interface IIconLink {
  objectId: string;
}

export default function Icons({ objectId }: IIconLink) {
  const domain = "localhost:3000/blog/";
  return (
    <div className="flex">
      <Link
        href={`https://www.facebook.com/sharer/sharer.php?u=${domain}${objectId}`}
      >
        <TiSocialFacebook className="w-[50px] h-[50px]" />
      </Link>
      <Link
      href={`https://wa.me/?text=${domain}${objectId}`}>
        <FaWhatsapp className="w-[50px] h-[50px]" />
      </Link>
      <TiSocialGithub className="w-[50px] h-[50px]" />
      <TiSocialLinkedin className="w-[50px] h-[50px]" />
    </div>
  );
}
