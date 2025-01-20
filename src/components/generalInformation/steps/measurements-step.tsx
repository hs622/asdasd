import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface MeasurementsStepProps {
  measurementSystem: 'metric' | 'imperial'
  weight: string
  height: string
  heightInches?: string
  onMeasurementSystemChange: (value: 'metric' | 'imperial') => void
  onWeightChange: (value: string) => void
  onHeightChange: (value: string) => void
  onHeightInchesChange: (value: string) => void
}

export function MeasurementsStep({
  measurementSystem,
  weight,
  height,
  heightInches,
  onMeasurementSystemChange,
  onWeightChange,
  onHeightChange,
  onHeightInchesChange,
}: MeasurementsStepProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold">Measurement system</h2>
        <p className="text-gray-600">
          Select your preferred measurement system to accurately record
          your height and weight.
        </p>
        <div className="mt-4">
          <RadioGroup
            value={measurementSystem}
            onValueChange={(value: 'metric' | 'imperial') => onMeasurementSystemChange(value)}
            className="flex space-x-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="imperial" id="imperial" />
              <Label htmlFor="imperial">lbs/ft/in</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="metric" id="metric" />
              <Label htmlFor="metric">kg/cm</Label>
            </div>
          </RadioGroup>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="weight">Weight</Label>
          <div className="mt-1 flex max-w-[200px] items-center space-x-2">
            <Input
              id="weight"
              type="number"
              value={weight}
              onChange={(e) => onWeightChange(e.target.value)}
              placeholder={measurementSystem === 'metric' ? '65' : '155'}
            />
            <span className="text-gray-600">{measurementSystem === 'metric' ? 'kg' : 'lb'}</span>
          </div>
        </div>

        <div>
          <Label htmlFor="height">Height</Label>
          <div className="mt-1 flex max-w-[300px] items-center space-x-2">
            <Input
              id="height"
              type="number"
              value={height}
              onChange={(e) => onHeightChange(e.target.value)}
              placeholder={measurementSystem === 'metric' ? '173' : '5'}
            />
            <span className="text-gray-600">{measurementSystem === 'metric' ? 'cm' : 'ft'}</span>
            {measurementSystem === 'imperial' && (
              <>
                <Input
                  type="number"
                  value={heightInches}
                  onChange={(e) => onHeightInchesChange(e.target.value)}
                  placeholder="8"
                />
                <span className="text-gray-600">in</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

