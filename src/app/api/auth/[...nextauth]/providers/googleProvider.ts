import GoogleProvider from "next-auth/providers/google";
import { GoogleProfile } from "next-auth/providers/google";
import { DEFAULT_ROLE } from "../../../../../../types/zod";

export default GoogleProvider({
  clientId: process.env.GOOGLE_ID as string,
  clientSecret: process.env.GOOGLE_SECRET as string,
  
  profile(profile: GoogleProfile) {
    console.log("Google Provider: ", {profile});
    return {
      id: profile.sub,
      firstName: profile.given_name,
      lastName: profile.family_name ?? null,
      email: profile.email,
      image: profile.picture,
      emailVerified: profile.email_verified,
      role: DEFAULT_ROLE,
      status: null,
    }
  },
})



