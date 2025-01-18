"use client";
 
import { OnboardingForm } from "@/components/prerequisite/onboarding";
import { useSession } from "next-auth/react";

const Prerequisite = () => {
  const { data: session, status } = useSession();
  console.log({session}, status);

  return <OnboardingForm />
};

export default Prerequisite;
