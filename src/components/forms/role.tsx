"use client";

import { useState } from "react";
import RoleSelection from "../role";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react"; 

const RoleForm = () => {
  const [selectedRole, setSelectedRole] = useState<
    "PERSONAL" | "PROFESSIONAL" | null
  >(null);
  const [isLoading, setIsLoading] = useState(false);
  

  const submitHandler = async () => {
    setIsLoading(true);
    

    // const response = await fetch('/api/profile', {
    //   method: 'POST',
    //   body: JSON.stringify({ 
    //     role: selectedRole
    //   })
    // })

    // const result = await response.json();
    // if(response.ok) {

    // }
  }

  return (
    <div className="flex flex-col gap-4">
      <RoleSelection
        selectedRole={selectedRole}
        onSelectRole={setSelectedRole}
      />
      <div className="flex justify-center">
        {isLoading ? (
          <Button
            size="lg"
            disabled={isLoading}
            className="bg-teal-600 hover:bg-teal-700"
          >
            <Loader2 className="animate-spin" />
            Continue
          </Button>
        ) : (
          <Button
            size="lg"
            disabled={!selectedRole}
            className="bg-teal-600 hover:bg-teal-700"
            onClick={submitHandler}
          >
            Continue
          </Button>
        )}
      </div>
    </div>
  );
};

export default RoleForm;
