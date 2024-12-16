import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="border-b w-full">
      <div className="container flex h-16 items-center justify-between mx-auto">
        <div className="flex items-center gap-8">
          <Image
            src="/placeholder.svg"
            alt="Healthdesk Logo"
            width={100}
            height={40}
            className="h-8 w-auto"
          />
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
        <div className="flex items-center gap-4">
          <Link href="/sign-in" className="text-sm font-medium">
            Sign in
          </Link>
          <Button>
            <Link href={"/sign-up"}>Get Started for Free</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
