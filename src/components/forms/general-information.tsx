"use client";

import { useState } from "react";
import { FormContainer } from "../generalInformation/layout/form-container";
import { StepIndicator } from "../generalInformation/ui/step-indicator";
import { AgeStep } from "../generalInformation/steps/age-step";
import { MeasurementsStep } from "../generalInformation/steps/measurements-step";
import { EthnicityStep } from "../generalInformation/steps/ethnicity-step";
import { SexStep } from "../generalInformation/steps/sex-step";
import Navigation from "../generalInformation/ui/navigation";
import { DisclaimerStep } from "../generalInformation/steps/disclaimer-step";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  GeneralInformationSchema,
  TGeneralInformationSchema,
} from "../../../types/zod";

// interface FormData {
//   age: string;
//   measurementSystem: "metric" | "imperial";
//   weight: string;
//   height: string;
//   heightInches?: string;
//   ethnicity: string;
//   sex: string;
// }

export default function GeneralInformationForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  const methods = useForm<TGeneralInformationSchema>({
    resolver: zodResolver(GeneralInformationSchema),
    defaultValues: {
      age: undefined,
      measurementSystem: "metric",
      weight: "",
      height: "",
      heightInches: "",
      ethnicity: "",
      sex: "",
    },
  });

  // const updateFormData = (key: keyof FormData, value: string) => {
  //   setFormData((prev) => ({ ...prev, [key]: value }));
  // };

  // const handleNext = () => {
  //   if (currentStep < totalSteps) {
  //     setCurrentStep((prev) => prev + 1);
  //   } else {
  //     console.log("Form submitted:", formData);
  //   }
  // };

  const handleNext = async () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    } else {
      console.log("Form submitted:", methods.getValues());
      const response = await fetch("/api/general-information", {
        method: "POST",
        body: JSON.stringify(methods.getValues()),
      });
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  return (
    <FormProvider {...methods}>
      <FormContainer>
        <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />

        <div className="mt-6">
          {currentStep === 1 && <DisclaimerStep onNext={handleNext} />}

          {currentStep === 2 && (
            <AgeStep
              age={methods.watch("age") as number}
              onChange={(value) => methods.setValue("age", parseInt(value))}
            />
          )}

          {currentStep === 3 && (
            <MeasurementsStep
              measurementSystem={methods.watch("measurementSystem")}
              weight={methods.watch("weight")}
              height={methods.watch("height")}
              heightInches={methods.watch("heightInches")}
              onMeasurementSystemChange={(value) =>
                methods.setValue("measurementSystem", value)
              }
              onWeightChange={(value) => methods.setValue("weight", value)}
              onHeightChange={(value) => methods.setValue("height", value)}
              onHeightInchesChange={(value) =>
                methods.setValue("heightInches", value)
              }
            />
          )}

          {currentStep === 4 && (
            <EthnicityStep
              ethnicity={methods.watch("ethnicity")}
              onChange={(value) => methods.setValue("ethnicity", value)}
            />
          )}

          {currentStep === 5 && (
            <SexStep
              sex={methods.watch("sex")}
              onChange={(value) => methods.setValue("sex", value)}
            />
          )}

          <Navigation
            currentStep={currentStep}
            totalSteps={totalSteps}
            onBack={handleBack}
            onNext={handleNext}
          />
        </div>
      </FormContainer>
    </FormProvider>
  );
}
