import { IBlog } from "@/app/type";
import Image from "next/image";

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
    <div className="text-black">
    <Image src={data.thumbnail} alt="error" width={100} height={100} />
      <h1>{data.title}</h1>
      <div dangerouslySetInnerHTML={{__html: data.content}}></div>
    </div>
  );
}
