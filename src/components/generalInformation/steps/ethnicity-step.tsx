import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface EthnicityStepProps {
  ethnicity: string
  onChange: (value: string) => void
}

export function EthnicityStep({ ethnicity, onChange }: EthnicityStepProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Primary racial or ethnic group</h2>
      <p className="text-gray-600">
        Different racial and ethnic groups have varied health tendencies. We use this
        information to provide more accurate health recommendations.
      </p>
      <Select value={ethnicity} onValueChange={onChange}>
        <SelectTrigger>
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="black">Black or African Descent</SelectItem>
          <SelectItem value="white">White or European Descent</SelectItem>
          <SelectItem value="hispanic">Hispanic or Latino</SelectItem>
          <SelectItem value="south_asian">South Asian</SelectItem>
          <SelectItem value="east_asian">East Asian</SelectItem>
          <SelectItem value="middle_eastern">Middle Eastern</SelectItem>
          <SelectItem value="pacific_islander">Pacific Islander</SelectItem>
          <SelectItem value="multiracial">Multiracial or Other</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

