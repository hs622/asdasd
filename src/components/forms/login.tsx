import React from "react";
import { Label } from "../ui/label";
import Link from "next/link";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import GoogleBotton from "../bottons/google";

const LoginForm = () => {
  return (
    <div>
      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <Link href="#" className="ml-auto inline-block text-sm underline">
              Forgot your password?
            </Link>
          </div>
          <Input id="password" type="password" required />
        </div>
        <Button type="submit" className="w-full">
          Login
        </Button>
        <GoogleBotton>Sign In with Google</GoogleBotton>
      </div>
      <div className="mt-4 text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link href="/sign-up" className="underline">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
