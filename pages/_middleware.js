import { NextResponse } from "next/server";

export const middleware = (req) => {
  console.log(req.url);
  const cookie = req.cookies["auth"];

  if (!cookie && !req.url.includes("login")) {
    return NextResponse.redirect("/login");
  }
};
