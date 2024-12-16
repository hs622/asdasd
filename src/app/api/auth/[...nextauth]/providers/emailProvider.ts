import EmailProvider from "next-auth/providers/email"

export default EmailProvider({
  server: process.env.EMAIL_SERVER,
  from: process.env.EMAIL_FROM
})