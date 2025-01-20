import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface SexStepProps {
  sex: string
  onChange: (value: string) => void
}

export function SexStep({ sex, onChange }: SexStepProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Sex assigned at birth</h2>
      <p className="text-gray-600">
        Biological sex can impact risk for certain conditions and response to treatments.
      </p>
      <RadioGroup value={sex} onValueChange={onChange} className="space-y-2">
        {['male', 'female', 'other'].map((option) => (
          <div key={option} className="flex items-center">
            <RadioGroupItem
              value={option}
              id={option}
              className="peer sr-only"
            />
            <Label
              htmlFor={option}
              className="flex w-full cursor-pointer items-center rounded-lg border border-gray-200 p-4 text-sm font-medium shadow-sm hover:bg-gray-50 focus:outline-none peer-checked:border-[#22A699] peer-checked:ring-1 peer-checked:ring-[#22A699]"
            >
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center">
                  <div className="text-sm">
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                  </div>
                </div>
                <svg className="hidden h-5 w-5 text-[#22A699] peer-checked:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  )
}

