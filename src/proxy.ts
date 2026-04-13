import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function proxy(req: NextRequest) {
	const hasSession = req.cookies.has("token");
	const { pathname } = req.nextUrl;
	if (pathname == "/") {
		if (hasSession) {
			return NextResponse.redirect(new URL("/dashboard", req.url));
		} else {
			return NextResponse.redirect(new URL("/login", req.url));
		}
	}
	if (pathname.startsWith("/dashboard") && !hasSession) {
		return NextResponse.redirect(new URL("/login", req.url));
	}

	if (pathname.startsWith("/login") && hasSession) {
		return NextResponse.redirect(new URL("/dashboard", req.url));
	}
    return NextResponse.next();
}
export const config = {
    matcher: ["/", "/dashboard/:path*", "/login"],
};
