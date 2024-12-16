"use client";

import { Label } from "@radix-ui/react-label";
import Link from "next/link";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import GoogleBotton from "../bottons/google";

import { useForm } from "react-hook-form";
import { RegisterSchema, TRegisterSchema } from "../../../types/zod";
import { zodResolver } from "@hookform/resolvers/zod";

const RegisterForm = () => {
  const [show] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterSchema>({
    resolver: zodResolver(RegisterSchema),
  });

  return (
    <div className="grid gap-2">
      <form
        className="grid gap-4"
        onSubmit={handleSubmit((data) => console.log(data))}
        noValidate={false}
      >
        <div className="grid grid-cols-2 gap-2">
          <div className="grid gap-1">
            <Label htmlFor="firstName" className="text-sm">
              First Name
            </Label>
            <Input
              id="firstName"
              type="text"
              placeholder=""
              {...register("first_name")}
            />
          </div>
          <div className="grid gap-1">
            <Label htmlFor="lastName" className="text-sm">
              Last Name
            </Label>
            <Input
              id="lastName"
              type="text"
              placeholder=""
              {...register("last_name")}
            />
            {errors?.last_name && (
              <p className="text-red-400 text-sm">{`${errors.last_name.message}`}</p>
            )}
          </div>
          {errors?.first_name && (
            <p className="text-red-400 text-sm">{`${errors.first_name.message}`}</p>
          )}
        </div>
        <div className="grid gap-1">
          <Label htmlFor="email" className="text-sm">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder=""
            {...register("email")}
          />
          {errors?.email && (
            <p className="text-red-400 text-sm">{`${errors.email.message}`}</p>
          )}
        </div>
        <div className="grid gap-1">
          <Label htmlFor="password" className="text-sm">
            Password
          </Label>
          <Input
            id="password"
            type={show ? "text" : "password"}
            {...register("password")}
          />
          {errors?.password && (
            <p className="text-red-400 text-sm">{`${errors.password.message}`}</p>
          )}
        </div>
        <Button type={"submit"} className="w-full">
          Create an account
        </Button>
      </form>
      <GoogleBotton>Sign up with Google</GoogleBotton>
      <div className="mt-4 text-center text-sm">
        Already have an account?{" "}
        <Link href="/sign-in" className="underline">
          Log in
        </Link>
      </div>
    </div>
  );
};

export default RegisterForm;
