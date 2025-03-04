import { NextRequest, NextResponse } from "next/server";
import { AxiosError } from "axios";
import axios from "@/lib/axios";

export async function POST(req: NextRequest) {
  try {
    const { title, category, thumbnail, content, userId } = await req.json();
    const userToken = req.cookies.get("user-token")?.value;

    if (!userToken) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 400 });
    }

    const { data } = await axios.post(
      "/data/Blogs",
      {
        title,
        category,
        thumbnail,
        content,
      },
      {
        headers: { "user-token": userToken },
      }
    );

    await axios.post(`/data/Blogs/${data.objectId}/author`, [userId], {
      headers: {
        "user-token": userToken,
      },
    });

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    if (error instanceof AxiosError) {
      return NextResponse.json(
        { error: error.response?.data || "Login Failed!" },
        { status: error.response?.status || 401 }
      );
    }
    return NextResponse.json({ error: "terjadi kesalahan" }, { status: 500 });
  }
}
