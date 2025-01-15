"use client";

import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ProfileSchema, TProfileSchema } from "../../../types/zod";
import { LoadingButton } from "../buttons/loading";

const ProfileForm = () => {
  const { data: session } = useSession();

  const {
    register,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TProfileSchema>({
    resolver: zodResolver(ProfileSchema),
  });

  const updateProfile = (Data: any) => {};

  return (
    <form onSubmit={handleSubmit(updateProfile)} noValidate={false}>
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Personal Information</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" {...register("firstName")} />
          </div>
          <div>
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" {...register("lastName")} />
          </div>
        </div>
        <div>
          <Label htmlFor="gender">Gender</Label>
          <Select {...register("gender")}>
            <SelectTrigger>
              <SelectValue placeholder="Select gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="dateOfBirth">Date of Birth</Label>
          <Input id="dateOfBirth" type="number" {...register("dob")} />
        </div>
        <div>
          <Label htmlFor="phoneNumber">Phone Number</Label>
          <Input id="phoneNumber" {...register("phoneNumber")} />
        </div>
        <div>
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" type="email" {...register("email")} />
        </div>
        <div>
          <Label htmlFor="address">Home Address</Label>
          <Textarea id="address" {...register("address")} />
        </div>
      </div>

      <div className="mt-2">
        {isSubmitting ? (
          <LoadingButton bodyText="Save change" isLoading={isSubmitting} />
        ) : (
          <Button type={"submit"}>Save Changes</Button>
        )}
      </div>
    </form>
  );
};

export default ProfileForm;
