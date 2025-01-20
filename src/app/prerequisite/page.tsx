"use client";

import { useState } from "react";

import { RoleStep } from "../../components/prerequisite/role";
import { NameStep } from "../../components/prerequisite/name";
import { CountryStep } from "../../components/prerequisite/country";
import { WelcomeStep } from "../../components/prerequisite/welcome";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const steps = ["role", "name", "country", "welcome"] as const;
type Step = (typeof steps)[number];

export default function Prerequisite() {
  const { update } = useSession();
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<Step>("role");
  const [formData, setFormData] = useState({
    purpose: "",
    name: "",
    country: "",
    isAdult: false,
  });
  const [isSubmit, setIsSubmit] = useState(false);

  const handleContinue = () => {
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1]);
    }
  };

  const handlePrevious = () => {
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1]);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case "role":
        return (
          <RoleStep
            purpose={formData.purpose}
            onPurposeChange={(value) =>
              setFormData({ ...formData, purpose: value })
            }
            onContinue={handleContinue}
          />
        );
      case "name":
        return (
          <NameStep
            name={formData.name}
            isAdult={formData.isAdult}
            onNameChange={(value) => setFormData({ ...formData, name: value })}
            onAdultChange={(checked) =>
              setFormData({ ...formData, isAdult: checked })
            }
            onContinue={handleContinue}
            onPrevious={handlePrevious}
          />
        );
      case "country":
        return (
          <CountryStep
            country={formData.country}
            onCountryChange={(value) =>
              setFormData({ ...formData, country: value })
            }
            onContinue={handleContinue}
            onPrevious={handlePrevious}
          />
        );
      case "welcome":
        return (
          <WelcomeStep
            onStart={() => submitHandler(formData)}
            onPrevious={handlePrevious}
            isSubmit={isSubmit}
          />
        );
    }
  };

  const submitHandler = async (formData: {
    name: string;
    purpose: string;
    country: string;
    isAdult: boolean;
  }) => {
    setIsSubmit(true);
    const response = await fetch("/api/profile", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    // update the session 
    await update({role: formData.purpose});

    if (response.ok) {
      return router.push("/healthboard");
    } else router.refresh();
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">{renderStep()}</div>
    </main>
  );
}
