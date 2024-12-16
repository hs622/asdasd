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
    const user = {
      id: "66715f30265a39c6b119a487",
      name: "hussain ali",
      email: "hussain.ali@gmail.com",
      password: "admin123",
      token: "xI8wbX3vHAEMn+KkdF1a7A==",
      phone: "+923332222222",
      role: "admin"
    };
    if (
      credentials?.email === user.email &&
      credentials.password === user.password
    ) {
      return user;
    } else return null;
  },
});
