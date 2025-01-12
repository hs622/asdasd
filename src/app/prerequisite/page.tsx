"use client";

import RoleForm from "@/components/forms/role";
import { useSession } from "next-auth/react";

const Prerequisite = () => {
  const { data: session, status } = useSession();
  console.log({session}, status);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl space-y-8">
        {/* <Logo /> */}
        <p className="text-2xl">HealthDesk</p>
        <div className="text-center space-y-6">
          <h1 className="text-2xl font-semibold">Hello! 👋</h1>
          <h2 className="text-xl">How do you plan to use HealthDesk?</h2>
        </div>
        <RoleForm />
      </div>
    </div>
  );
};

export default Prerequisite;
