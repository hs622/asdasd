'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function PricingHeader() {
  const [billingInterval, setBillingInterval] = useState<'yearly' | 'monthly'>('yearly')

  return (
    <div className="text-center space-y-8 py-12 m-auto">
      <h1 className="text-4xl font-bold">Plans & Pricing</h1>
      <p className="text-muted-foreground">Pay by the month or the year, and cancel at any time.</p>
      <div className="flex justify-center gap-2">
        <Button
          variant={billingInterval === 'yearly' ? 'default' : 'outline'}
          onClick={() => setBillingInterval('yearly')}
          className="rounded-full"
        >
          Yearly
        </Button>
        <Button
          variant={billingInterval === 'monthly' ? 'default' : 'outline'}
          onClick={() => setBillingInterval('monthly')}
          className="rounded-full"
        >
          Monthly
        </Button>
      </div>
      <p className="text-sm text-teal-600">Save up to 45% with Yearly</p>
    </div>
  )
}