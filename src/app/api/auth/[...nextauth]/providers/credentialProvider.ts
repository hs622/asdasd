import CredentialProvider from "next-auth/providers/credentials";

export default CredentialProvider({
  name: "Credentials",
  credentials: {
    email: {
      label: "Email",
      type: "email",
    },
    password: {
      label: "Password",
      type: "password",
    },
  },
  async authorize(credentials) {
    console.log("CredentialProvider: ",{credentials});
    const user = {
      id: "66715f30265a39c6b119a487",
      firstName: "hussain",
      lastName: "Ali",
      image: null,
      email: "hussain.ali@gmail.com",
      password: "admin123",
      emailVerified: false,
      role: "admin"

      // token: "xI8wbX3vHAEMn+KkdF1a7A==",
      // phone: "+923332222222",
    };
    if (
      credentials?.email === user.email &&
      credentials.password === user.password
    ) {
      return user;
    } else return null;
  },
});
