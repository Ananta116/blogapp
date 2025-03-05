import { IBlog } from "@/app/type";
import Image from "next/image";
import Link from "next/link";
import { TiSocialFacebook, TiSocialGithub } from "react-icons/ti";
import { FaWhatsapp, FaTwitter } from "react-icons/fa";
import { IoHome } from "react-icons/io5";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const res = await fetch(
    `https://pilotcake-us.backendless.app/api/data/Blogs/${id}?LoadRelations=author`
  );
  const data: IBlog = await res.json();
  return {
    title: data.title,
    openGraph: {
      images: [data.thumbnail],
    },
  };
}
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const res = await fetch(
    `https://pilotcake-us.backendless.app/api/data/Blogs/${id}?LoadRelations=author`
  );
  const data: IBlog = await res.json();
  return (
    <div className="flex max-sm:flex-col sm:flex-col lg:flex-row">
      <div
        role="navigation"
        className="ml-[50px] mt-[70px] max-sm:ml-0 sm:ml-0 lg:ml-[100px]"
      >
        <div className="max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center sm:flex sm:flex-col sm:justify-center sm:items-center">
          <button className="w-[100px] h-[100px] rounded-[100%] text-center text-black bg-white">
            <Link href={"/"}>
              <div className="flex justify-center items-center">
                <IoHome className="w-[50px] h-[50px] " />
              </div>
            </Link>
          </button>
          <section className="text-white mt-[20px]">
            <p className="text-center">SHARE</p>
            <div className="flex gap-5">
              <Link href={`https://www.facebook.com/sharer/sharer.php?u=}`}>
                <TiSocialFacebook className="w-[50px] h-[50px]" />
              </Link>
              <Link href={`https://wa.me/?text=localhost:3000/blog/${id}`}>
                <FaWhatsapp className="w-[50px] h-[50px]" />
              </Link>
              <Link
                href={`https://www.linkedin.com/sharing/share-offsite/?url=localhost:3000/blog/${id}`}
              >
                <TiSocialGithub className="w-[50px] h-[50px]" />
              </Link>
              <Link
                href={`https://www.twitter.com/intent/tweet?url=localhost:3000/blog/${id}`}
              >
                <FaTwitter className="w-[50px] h-[50px]" />
              </Link>
            </div>
          </section>
        </div>
      </div>
      <div role="blog section" className="mr-10 max-sm:mr-0 sm:mr-0 lg:mr-10">
        <header className="text-white ml-[250px] mt-[70px] max-sm:ml-0 sm:ml-0 md:ml-0 lg:ml-[250px]">
          <h1 className="text-[25px] text-blue-300 max-sm:text-center sm:text-center">
            {data.category}
          </h1>
          <p className="text-[35px] max-sm:text-center">{data.title}</p>
          <Image
            className="rounded-md sm:w-screen"
            src={data.thumbnail}
            alt="error"
            width={600}
            height={100}
          />
          <section
            className="mt-[20px] max-sm:text-justify max-sm:px-5 sm:text-justify sm:px-5 lg:text-justify lg:px-0"
            dangerouslySetInnerHTML={{ __html: data.content }}
          ></section>
        </header>
      </div>
    </div>
  );
}
