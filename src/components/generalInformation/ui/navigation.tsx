import { Button } from "@/components/ui/button";
import { ArrowLeft, Loader2 } from "lucide-react";

interface NavigationProps {
  currentStep: number;
  totalSteps: number;
  onBack: () => void;
  onNext: () => void; 
}

export default function Navigation({
  currentStep,
  totalSteps,
  onBack,
  onNext, 
}: NavigationProps) {
  return (
    <div className="mt-8 flex items-center justify-between">
      {currentStep > 1 && (
        <button
          onClick={onBack}
          className="flex items-center text-sm text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </button>
      )}
      {currentStep < totalSteps && (
        <Button
          onClick={onNext}
          className="ml-auto bg-[#22A699] hover:bg-[#1A8F88]"
        >
          {currentStep === 1 ? "Accept, Continue" : "Next"}
        </Button>
      )}
      {currentStep === totalSteps && (
        <Button
          onClick={onNext}
          className="ml-auto bg-[#22A699] hover:bg-[#1A8F88]"
        > 
          Submit
        </Button>
      )} 
    </div>
  );
}
