import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ['es', 'en'];
const defaultLocale = 'es';

function getLocale(request: NextRequest) {
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  if (cookieLocale && locales.includes(cookieLocale)) {
    return cookieLocale;
  }
  const acceptLang = request.headers.get("accept-language");
  if (acceptLang?.includes("en")) return "en";
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Skip static files, api, etc.
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.match(/\.(.*)$/) 
  ) {
    return NextResponse.next();
  }

  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    
    // Redirect /something to /es/something
    const redirectUrl = new URL(
      `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
      request.url
    );
    
    // Avoid double slashes logic
    if (pathname === '/') {
       redirectUrl.pathname = `/${locale}`;
    }
    
    return NextResponse.redirect(redirectUrl);
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.png|.*\\.svg|.*\\.pdf).*)',
  ],
};
