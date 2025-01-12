"use client";

import { Label } from "@radix-ui/react-label";
import Link from "next/link";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import GoogleButton from "../buttons/google";

import { useForm } from "react-hook-form";
import { RegisterSchema, TRegisterSchema } from "../../../types/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoadingButton } from "../buttons/loading";

import { useRouter } from "next/navigation"; 

const RegisterForm = () => {
  const [show] = useState(false);
  const [isLoading, setIsLoading] = useState(false); 
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<TRegisterSchema>({
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit = async (data: TRegisterSchema) => {
    setIsLoading(true);
     
    // using fetch API
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
        first_name: data.first_name,
        last_name: data.last_name,
      }),
    });

    const result = await response.json();
    if(response.ok) {
      setIsLoading(false);
      console.log(result)  
 
      router.push(result.redirect);
    }

    // displaying server errors.
    if (result.errors || !response.ok) {
      const errors = result.errors;
      if (errors.first_name) {
        setError("first_name", {
          type: "server",
          message: errors.first_name,
        });
      } else if (errors.last_name) {
        setError("last_name", {
          type: "server",
          message: errors.last_name,
        });
      } else if (errors.email) {
        setError("email", {
          type: "server",
          message: errors.email,
        });
      } else if (errors.password) {
        setError("password", {
          type: "server",
          message: errors.password,
        });
      } else alert("Something went wrong!");

      setIsLoading(false);
    }
  };

  return (
    <div className="grid gap-2">
      <form
        className="grid gap-4"
        onSubmit={handleSubmit((data) => onSubmit(data))}
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
        {isLoading ? (
          <LoadingButton bodyText={"Create an account"} isLoading={isLoading} />
        ) : (
          <Button type={"submit"} className="w-full">
            Create an account
          </Button>
        )}
      </form>
      <GoogleButton>Continue with Google</GoogleButton>
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
