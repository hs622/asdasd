// import { NextRequest, NextResponse } from "next/server";

// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL('/', request.url))
// };


export { default } from 'next-auth/middleware'

export const config = {
  matcher: [ 
    '/prerequisite',
    '/healthboard',
    '/healthboard/:path',
  ]
}
