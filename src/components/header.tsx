"use client";

import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Logout from "./buttons/logout";
import { useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();
  console.log("Client Session: ", {session});  
  
  return (
    <header className="border-b w-full">
      <div className="container flex h-16 items-center justify-between mx-auto">
        <div className="flex items-center gap-8">
          <p className="text-sm ">HD.ai</p>
          <nav className="hidden md:flex gap-6">
            <Link href="#" className="text-sm font-medium">
              Solutions
            </Link>
            <Link href="#" className="text-sm font-medium">
              Pricing
            </Link>
            <Link href="#" className="text-sm font-medium">
              Resources
            </Link>
          </nav>
        </div>

        {session ? (
          <Logout />
        ) : (
          <div className="flex items-center gap-4">
            <Link href="/sign-in" className="text-sm font-medium">
              Sign in
            </Link>
            <Button>
              <Link href={"/sign-up"}>Get Started for Free</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
