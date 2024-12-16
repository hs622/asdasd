import React from "react";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";

const GoogleBotton = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <Button
      variant="outline"
      className="w-full"
      onClick={() => signIn("google")}
    >
      { children }
    </Button>
  );
};

export default GoogleBotton;
