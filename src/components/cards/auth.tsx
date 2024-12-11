"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import LoginForm from "../forms/login";
// import { useSearchParams } from "next/navigation";
// import RegisterForm from "../forms/register";

const Auth = () => {
  // const params = useSearchParams();

  return (
    <div>
      {/* { params.has("form") && params.get("form") == "signup" ? (
        <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Register</CardTitle>
          <CardDescription>
          Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RegisterForm />
        </CardContent>
      </Card>
      ) : ( */}
        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <LoginForm />
          </CardContent>
        </Card>
      {/* )} */}
    </div>
  );
};

export default Auth;
