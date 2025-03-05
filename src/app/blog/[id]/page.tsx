import { IBlog } from "@/app/type";
import Image from "next/image";
import Navblog from "./_components/navigation";


export async function generateMetadata({params}: {params:Promise<{id: string}>}) {
  const {id} = await params
  const res = await fetch(
    `https://pilotcake-us.backendless.app/api/data/Blogs/${id}?LoadRelations=author`
  );
  const data: IBlog = await res.json();
  return {
    title: data.title,
    openGraph: {
      images: [data.thumbnail]
    }
  }
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
    <div className="flex max-sm:flex-col">
      <div role="navigation" className="ml-[50px] mt-[70px] max-sm:ml-0 sm:ml-0 lg:ml-[100px]">
        
      </div>
      <div role="blog section" className="mr-10 max-sm:mr-0 sm:mr-0 lg:mr-10">
        <header className="text-white ml-[250px] mt-[70px] max-sm:ml-0 md:ml-[80px] lg:ml-[250px]">
          <h1 className="text-[25px] text-blue-300">{data.category}</h1>
          <p className="text-[35px] max-sm:text-center">{data.title}</p>
          <Image
            className="rounded-md"
            src={data.thumbnail}
            alt="error"
            width={600}
            height={100}
          />
          <section
            className="mt-[20px] max-sm:text-justify lg:text-justify"
            dangerouslySetInnerHTML={{ __html: data.content }}
          ></section>
        </header>
      </div>
    </div>
  );
}
