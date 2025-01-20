export { default } from 'next-auth/middleware'

export const config = {
  matcher: [ 
    '/prerequisite',
    '/healthboard',
    '/healthboard/:path',
  ]
}
