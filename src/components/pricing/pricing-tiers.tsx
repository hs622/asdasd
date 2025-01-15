import { Check } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function PricingTiers() {
  return (
    <div className="container grid md:grid-cols-3 gap-8 py-12 m-auto">
      <div className="border rounded-lg p-8 space-y-6">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold">Free</h3>
          <p className="text-2xl font-bold">$0/forever</p>
          <p className="text-sm text-muted-foreground">No credit card required</p>
        </div>
        <Button className="w-full" variant="outline">Get Started</Button>
        <ul className="space-y-4">
          <li className="flex gap-2">
            <Check className="h-5 w-5 text-teal-600" />
            <span className="text-sm">3 messages/week with AI Doctor</span>
          </li>
          <li className="flex gap-2">
            <Check className="h-5 w-5 text-teal-600" />
            <span className="text-sm">1 test result interpreted by AI</span>
          </li>
          <li className="flex gap-2">
            <Check className="h-5 w-5 text-teal-600" />
            <span className="text-sm">AI long-term memory</span>
          </li>
          <li className="flex gap-2">
            <Check className="h-5 w-5 text-teal-600" />
            <span className="text-sm">Chat history</span>
          </li>
        </ul>
      </div>
      <div className="border rounded-lg p-8 space-y-6 bg-[#EBF5F3]">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold">Lite</h3>
          <p className="text-2xl font-bold">$3.99/mo</p>
          <p className="text-sm text-muted-foreground">Billed annually $47.88</p>
        </div>
        <Button className="w-full bg-teal-600 hover:bg-teal-700">Get Started</Button>
        <ul className="space-y-4">
          <li className="flex gap-2">
            <Check className="h-5 w-5 text-teal-600" />
            <span className="text-sm">50 messages/month with AI Doctor</span>
          </li>
          <li className="flex gap-2">
            <Check className="h-5 w-5 text-teal-600" />
            <span className="text-sm">5 test results/month interpreted by AI</span>
          </li>
          <li className="flex gap-2">
            <Check className="h-5 w-5 text-teal-600" />
            <span className="text-sm">AI long-term memory</span>
          </li>
          <li className="flex gap-2">
            <Check className="h-5 w-5 text-teal-600" />
            <span className="text-sm">Chat history</span>
          </li>
        </ul>
      </div>
      <div className="border rounded-lg p-8 space-y-6">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold">Pro</h3>
          <p className="text-2xl font-bold">$7.99/mo</p>
          <p className="text-sm text-muted-foreground">Billed annually $95.88</p>
        </div>
        <Button className="w-full" variant="outline">Get Started</Button>
        <ul className="space-y-4">
          <li className="flex gap-2">
            <Check className="h-5 w-5 text-teal-600" />
            <span className="text-sm">500 messages/month with AI Doctor</span>
          </li>
          <li className="flex gap-2">
            <Check className="h-5 w-5 text-teal-600" />
            <span className="text-sm">15 test results/month interpreted by AI</span>
          </li>
          <li className="flex gap-2">
            <Check className="h-5 w-5 text-teal-600" />
            <span className="text-sm">AI long-term memory</span>
          </li>
          <li className="flex gap-2">
            <Check className="h-5 w-5 text-teal-600" />
            <span className="text-sm">Chat history</span>
          </li>
        </ul>
      </div>
    </div>
  )
}