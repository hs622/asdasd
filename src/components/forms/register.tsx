"use client";

import { Label } from "@radix-ui/react-label";
import Link from "next/link";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const router = useRouter();

  return (
    <form className="grid gap-4">
      <div className="grid grid-cols-2 gap-2">
        <div className="grid">
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" type="text" placeholder="" required />
        </div>
        <div className="grid">
          <Label htmlFor="lastName">Last Name</Label>
          <Input id="lastName" type="text" placeholder="" required />
        </div>
      </div>
      <div className="grid">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="john.doe@example.com"
          required
        />
      </div>
      <div className="grid">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" required />
      </div>
      <Button type="submit" className="w-full">
        Register
      </Button>
      <Button variant="outline" className="w-full">
        Sign in with Google
      </Button>
      <div className="mt-4 text-center text-sm">
        Already have an account?{" "}
        <Link
          href="#"
          className="underline"
          onClick={(e) => {
            e.preventDefault();
            router.push("?form=login");
          }}
        >
          Log in
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
