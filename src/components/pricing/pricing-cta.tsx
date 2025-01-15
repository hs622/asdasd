import { Button } from "@/components/ui/button"
import { Check } from 'lucide-react'

export function PricingCTA() {
  return (
    <div className="bg-[#1D2939] text-white">
      <div className="container py-16 text-center space-y-8 m-auto">
        <h2 className="text-3xl font-bold">You're only one click away</h2>
        <p className="text-xl">from a life-changing journey</p>
        <Button className="bg-red-500 hover:bg-red-600">Try Docus for Free</Button>
        <div className="flex justify-center gap-8 text-sm">
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5" />
            <span>350+ world-renowned Doctors</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5" />
            <span>Virtual health assistant powered by AI</span>
          </div>
        </div>
      </div>
    </div>
  )
}