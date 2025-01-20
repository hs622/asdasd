import { Button } from "@/components/ui/button"

interface DisclaimerStepProps {
  onNext: () => void
}

export function DisclaimerStep({ onNext }: DisclaimerStepProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Disclaimer</h2>
      <p className="text-gray-600">
        The information collected in this form is used to provide personalized health recommendations. 
        By proceeding, you agree to our terms of service and privacy policy.
      </p>
      <p className="text-gray-600">
        Please note that this is not a substitute for professional medical advice, diagnosis, or treatment. 
        Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
      </p>
    </div>
  )
}

