import { IUserLogin } from "@/lib/profile";
import { UserRole } from "@/types/auth";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const cookie = req.cookies.get("userSession")?.value;

  // Public Routes
  if (pathname === "/" || pathname.startsWith("/login")) {
    return NextResponse.next();
  }

  // Redirect to login page if noo cookies
  if (!cookie) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  const cookieValue = JSON.parse(cookie) as IUserLogin;

  const roleRoutes: Record<UserRole, string> = {
    ADMIN: "/dashboard/admin",
    USER: "/dashboard/user",
  };

  // Prevent other role from accessing other user dashboard view
  const userRole = cookieValue.role;

  if (pathname === "/dashboard") {
    const target = roleRoutes[userRole];
    return NextResponse.redirect(new URL(target, req.url));
  }
  if (pathname.startsWith("/dashboard")) {
    if (
      (pathname.startsWith("/dashboard/admin") && userRole !== "ADMIN") ||
      (pathname.startsWith("/dashboard/User") && userRole !== "USER")
    ) {
      return NextResponse.redirect(new URL(roleRoutes[userRole], req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
