import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import Logout from "../buttons/logout";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function SiteHeader({
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
}) {
  return (
    <nav className="border-b w-full">
      <div className="container flex h-16 items-center justify-between m-auto">
        <div className="flex items-center gap-8">
          <Link href="/" className="font-bold text-xl">
            Healthdesk
          </Link>
          <div className="hidden md:flex gap-6">
            <Link
              href="/pricing"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Pricing
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground">
                Resources <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem asChild>
                  <Link href="#">Blog</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="#">Symptoms Guide</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="#">Knowledge Base</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="#">Glossary</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="#"
              className="text-sm font-medium text-red-500 hover:text-red-600"
            >
              For Labs
            </Link>
          </div>
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
              href="/sign-in"
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
    </nav>
  );
}
