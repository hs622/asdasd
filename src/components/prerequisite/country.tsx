import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface CountryStepProps {
  country: string
  onCountryChange: (value: string) => void
  onContinue: () => void
  onPrevious: () => void
}

export function CountryStep({ country, onCountryChange, onContinue, onPrevious }: CountryStepProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">What&apos;s your country of residence?</h1>
        <p className="text-sm text-muted-foreground">
          Selecting country helps us tailor our services and ensure compliance with local regulations.
        </p>
      </div>
      {/* <div className="relative w-full aspect-[2/1] mb-6"> */}
        {/* <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bzU9WlmZLm1nC44a2JzwbULZDQtZK8.png"
          alt="World map"
          fill
          className="object-contain"
          priority
        /> */}
      {/* </div> */}
      <Select
        value={country}
        onValueChange={onCountryChange}
      >
        <SelectTrigger>
          <SelectValue placeholder="Please select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="us">United States</SelectItem>
          <SelectItem value="uk">United Kingdom</SelectItem>
          <SelectItem value="ca">Canada</SelectItem>
          {/* Add more countries as needed */}
        </SelectContent>
      </Select>
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
          disabled={!country}
        >
          Continue
        </Button>
      </div>
    </div>
  )
}