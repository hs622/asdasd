import GoogleProvider from "next-auth/providers/google";

export default GoogleProvider({
  clientId: process.env.GOOGLE_ID as string,
  clientSecret: process.env.GOOGLE_SECRET as string,
})



