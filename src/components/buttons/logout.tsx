"use client";

import { signOut } from "next-auth/react";
import { Button, ButtonProps } from "../ui/button";

const Logout = (props: ButtonProps) => {
  return (
    <Button onClick={() => signOut()} {...props}>
      Logout
    </Button>
  );
}

export default Logout;