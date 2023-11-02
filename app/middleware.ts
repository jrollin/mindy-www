/* import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    let isAuthCookie = request.cookies.get("is_auth");
    console.log("middleware");
    // redirect if no auth
    if (
        request.nextUrl.pathname.startsWith("/webpages") &&
        !(isAuthCookie?.value === "true")
    ) {
        return NextResponse.redirect(new URL("/auth", request.nextUrl));
    }
} */
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    return NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: "/profile",
};
