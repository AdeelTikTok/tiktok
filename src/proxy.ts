import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { detectLocale } from "@/lib/i18n/geo";
import { isValidLocale, LOCALE_COOKIE } from "@/lib/i18n/locales";

const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year — re-detect only if the visitor clears cookies

export async function proxy(request: NextRequest) {
  const existingLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  if (isValidLocale(existingLocale)) {
    return NextResponse.next();
  }

  const locale = await detectLocale(request.headers);
  const response = NextResponse.next();
  response.cookies.set(LOCALE_COOKIE, locale, {
    maxAge: COOKIE_MAX_AGE,
    path: "/",
    sameSite: "lax",
  });
  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|images|videos|sitemap.xml|robots.txt).*)",
  ],
};
