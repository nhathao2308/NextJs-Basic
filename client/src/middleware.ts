import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const privatePaths = ["/me"];
const authPaths = ["/login", "register"];

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const sessionToken = request.cookies.get("sessionToken")?.value;
  if (
    privatePaths.some((path) => {
      pathname.startsWith(path);
    }) ||
    !sessionToken
  ) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (
    authPaths.some((path) => {
      pathname.startsWith(path);
    }) ||
    sessionToken
  )
    return NextResponse.redirect(new URL("/me", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/login", "/register", "/me"],
};
