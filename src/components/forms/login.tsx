"use client";

import React from "react";
import { Label } from "../ui/label";
import Link from "next/link";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import GoogleButton from "../buttons/google";
import { LoginSchema, TLoginSchema } from "../../../types/zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { signIn } from "next-auth/react";

const LoginForm = () => {
  const router = useRouter();
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<TLoginSchema>({
    resolver: zodResolver(LoginSchema),
  });

  const submit = async ({ email, password }: TLoginSchema) => {
    console.log({ email, password });

    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (response!.ok) router.push("/");
    else {
      toast({
        title: "Invalid Credentials",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="grid gap-4">
      <form onSubmit={handleSubmit(submit)} noValidate={false}>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" {...register("email")} />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link href="#" className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </Link>
            </div>
            <Input id="password" type="password" {...register("password")} />
          </div>

          {!isSubmitting ? (
            <Button className="w-full" type={"submit"}>
              Login
            </Button>
          ) : (
            <Button className="w-full" disabled={isSubmitting}>
              <Loader2 className="animate-spin" />
              Login
            </Button>
          )}
        </div>
      </form>
      <GoogleButton>Contiune with Google</GoogleButton>
      <div className=" text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link href="/sign-up" className="underline">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
