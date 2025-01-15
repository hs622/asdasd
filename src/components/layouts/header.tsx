import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import Logout from "../buttons/logout";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Header = ({
  user,
}: {
  user:
    | {
        id: string;
        firstName: string;
        lastName: string | null;
        email: string;
        emailVerified: boolean;
        image: string | null;
        role: string | null;
      }
    | undefined;
}) => {
  return (
    <header className="border-b w-full">
      <div className="container flex h-16 items-center justify-between m-auto">
        <div className="flex items-center gap-8">
          <p className="text-sm ">HD.ai</p>
          <nav className="hidden md:flex gap-6">
            <Link href="/pricing" className="text-sm font-medium">
              Pricing
            </Link>
            <Link href="#" className="text-sm font-medium">
              Resources
            </Link>
          </nav>
        </div>

        {user ? (
          <div className="flex items-center gap-2">
            <Link href={"/healthboard"}>
              <Avatar>
                <AvatarImage
                  src={user.image as string}
                  alt={user.firstName as string}
                />
                <AvatarFallback>
                  {user.firstName?.charAt(0)}{" "}
                  {user.lastName ? user.lastName.charAt(0) : ""}
                </AvatarFallback>
              </Avatar>
            </Link>
            <Logout />
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Sign in
            </Link>
            <Button className="bg-red-500 hover:bg-red-600">
              <Link href={"/sign-up"}>Get Started for Free</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
