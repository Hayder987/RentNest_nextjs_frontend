import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtUtils } from "./utils/jwt";
import { JwtPayload } from "jsonwebtoken";

const AUTH_ROUTES = ["/login", "/register"];
const PUBLIC_ROUTES = ["/", "/contact", "/about", "/properties"];

export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const response = NextResponse.next();

  const accessToken = request.cookies.get("accessToken")?.value;

  const decodedAccessToken = accessToken
    ? jwtUtils.verifyToken(accessToken, process.env.JWT_ACCESS_SECRET as string)
    : null;

  let userRole = null;

  //   if access token invalid or expired
  if (!decodedAccessToken?.success) {
    response.cookies.delete("accessToken");
  }

  // set user role from token
  if (decodedAccessToken?.success && decodedAccessToken?.data) {
    userRole = (decodedAccessToken?.data as JwtPayload).role;
  }

  //  ADMIN
  //   LANDLORD
  //   TENANT

  // protected logged user to going /login and /register page
  if (accessToken && AUTH_ROUTES.includes(pathname)) {
    if (userRole === "TENANT") {
      return NextResponse.redirect(new URL("/tenant-dashboard", request.url));
    } else if (userRole === "LANDLORD") {
      return NextResponse.redirect(new URL("/landlord-dashboard", request.url));
    } else if (userRole === "ADMIN") {
      return NextResponse.redirect(new URL("/admin-dashboard", request.url));
    } else {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  const isPublicRoute = PUBLIC_ROUTES.some((route) => {
    return pathname === route || pathname.startsWith(route + "/");
  });
  
  const isAuthRoute = AUTH_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(route + "/"),
  );

  // Authenticated Pages Protection : Authorization is not handled yet
  if (!accessToken && !isPublicRoute && !isAuthRoute) {
    const loginUrl = new URL("/login", request.url)

    loginUrl.searchParams.set("redirectTo", pathname)
    
    return NextResponse.redirect(loginUrl);
  }


  // Authorization : Role based access control
  if (pathname.startsWith("/tenant-dashboard") && userRole !== "TENANT") {
    return NextResponse.redirect(new URL("/not-found", request.url));
  } else if (
    pathname.startsWith("/landlord-dashboard") &&
    userRole !== "LANDLORD"
  ) {
    return NextResponse.redirect(new URL("/not-found", request.url));
  } else if (pathname.startsWith("/admin-dashboard") && userRole !== "ADMIN") {
    return NextResponse.redirect(new URL("/not-found", request.url));
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|favicon.ico|_next/image|.*\\.png$).*)"],
};
