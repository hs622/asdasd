import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'

interface NameStepProps {
  name: string
  isAdult: boolean
  onNameChange: (value: string) => void
  onAdultChange: (checked: boolean) => void
  onContinue: () => void
  onPrevious: () => void
}

export function NameStep({ name, isAdult, onNameChange, onAdultChange, onContinue, onPrevious }: NameStepProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">Let&apos;s get to know you!</h1>
        <h2 className="text-xl">How should we greet you?</h2>
        <p className="text-sm text-muted-foreground">
          If privacy is a concern, feel free to use just a nickname.
        </p>
      </div>
      <Input
        placeholder="Preferred nickname or name"
        value={name}
        onChange={(e) => onNameChange(e.target.value)}
      />
      <div className="flex items-center space-x-2">
        <Checkbox
          id="adult"
          checked={isAdult}
          onCheckedChange={(checked) => onAdultChange(checked as boolean)}
        />
        <label htmlFor="adult" className="text-sm">
          I confirm that I am at least 18 years old or I am the legal guardian of the user.
        </label>
      </div>
      <div className="flex gap-3">
        <Button 
          variant="outline" 
          className="w-full" 
          onClick={onPrevious}
        >
          Previous
        </Button>
        <Button 
          className="w-full bg-teal-600 hover:bg-teal-700" 
          onClick={onContinue}
          disabled={!name || !isAdult}
        >
          Continue
        </Button>
      </div>
    </div>
  )
}

