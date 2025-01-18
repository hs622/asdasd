import Image from 'next/image'
import { Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface WelcomeStepProps {
  onStart: () => void
  onPrevious: () => void
}

export function WelcomeStep({ onStart, onPrevious }: WelcomeStepProps) {
  return (
    <div className="space-y-6 text-center">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">Welcome to HealthDesk</h1>
        <p className="text-muted-foreground">your personal health companion</p>
      </div>
      <div className="relative w-32 h-32 mx-auto">
        <Image
          src="/chat-doctor.svg"
          alt="AI Doctor"
          fill
          className="object-contain"
        />
      </div>
      <p className="text-center max-w-md mx-auto">
        We&apos;re going to ask you some health related questions to personalize your health
        journey for your unique needs.
      </p>
      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
        <Lock className="w-4 h-4" />
        <p>Privacy Note: Your data is confidential and secured by HIPAA and GDPR standards.</p>
      </div>
      <div className="flex max-w-sm mx-auto gap-3">
        <Button className="w-full bg-teal-600 hover:bg-teal-700" onClick={onStart}>
          Start
        </Button>
      </div>
    </div>
  )
}