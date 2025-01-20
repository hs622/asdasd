interface StepIndicatorProps {
  currentStep: number
  totalSteps: number
}

export function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
  const progress = (currentStep / totalSteps) * 100

  return (
    <div className="space-y-2">
      <h1 className="text-xl font-semibold text-[#22A699]">GENERAL INFORMATION</h1>
      <div className="relative h-2 w-full overflow-hidden rounded-full bg-[#E8F3F3]">
        <div
          className="h-full bg-[#22A699] transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="text-right text-sm text-gray-600">{currentStep}/{totalSteps}</div>
    </div>
  )
}

