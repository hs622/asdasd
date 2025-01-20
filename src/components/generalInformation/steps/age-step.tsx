import { Input } from "@/components/ui/input"

interface AgeStepProps {
  age: number
  onChange: (value: string) => void
}

export function AgeStep({ age, onChange }: AgeStepProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Age</h2>
      <p className="text-gray-600">
        Age is a key factor in health assessment, influencing the range
        of potential risks and appropriate wellness strategies.
      </p>
      <div className="flex max-w-[200px] items-center space-x-2">
        <Input
          type="number"
          value={age}
          onChange={(e) => onChange(e.target.value)}
          placeholder="48"
        />
        <span className="text-gray-600">years</span>
      </div>
    </div>
  )
}

