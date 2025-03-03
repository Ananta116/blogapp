import axios from "@/lib/axios";
import { AxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";

// cara membuat cookie
export async function GET(req: NextRequest) {
  try {
    const userToken = req.cookies.get("user-token")?.value;
    await axios.get("/users/logout", { 
        headers: {
            "user-token": userToken
        }
     });

    const response = NextResponse.json({message: "Logout Success"});
    response.cookies.set("user-token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENN == "production",
      path: "/",
      maxAge: 0
    });
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return NextResponse.json(
        {error: error.response?.data || "Login Failed!"},
        {status: error.response?.status || 401}
      );
    }
    return NextResponse.json({error:"terjadi kesalahan"})
  }
}
