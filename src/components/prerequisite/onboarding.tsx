'use client'

import { useState } from 'react'

import { RoleStep } from './role'
import { NameStep } from './name'
import { CountryStep } from './country'
import { WelcomeStep } from './welcome'

const steps = ['role', 'name', 'country', 'welcome'] as const
type Step = typeof steps[number]

export function OnboardingForm() {
  const [currentStep, setCurrentStep] = useState<Step>('role')
  const [formData, setFormData] = useState({
    purpose: '',
    name: '',
    country: '',
    isAdult: false,
  })

  const handleContinue = () => {
    const currentIndex = steps.indexOf(currentStep)
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1])
    }
  }

  const handlePrevious = () => {
    const currentIndex = steps.indexOf(currentStep)
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1])
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 'role':
        return (
          <RoleStep
            purpose={formData.purpose}
            onPurposeChange={(value) => setFormData({ ...formData, purpose: value })}
            onContinue={handleContinue}
          />
        )
      case 'name':
        return (
          <NameStep
            name={formData.name}
            isAdult={formData.isAdult}
            onNameChange={(value) => setFormData({ ...formData, name: value })}
            onAdultChange={(checked) => setFormData({ ...formData, isAdult: checked })}
            onContinue={handleContinue}
            onPrevious={handlePrevious}
          />
        )
      case 'country':
        return (
          <CountryStep
            country={formData.country}
            onCountryChange={(value) => setFormData({ ...formData, country: value })}
            onContinue={handleContinue}
            onPrevious={handlePrevious}
          />
        )
      case 'welcome':
        return (
          <WelcomeStep
            onStart={() => console.log('Onboarding completed:', formData)}
            onPrevious={handlePrevious}
          />
        )
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        {renderStep()}
      </div>
    </main>
  )
}

