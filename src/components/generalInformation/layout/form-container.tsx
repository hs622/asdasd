'use client'

import { Card, CardContent } from "@/components/ui/card"

interface FormContainerProps {
  children: React.ReactNode
}

export function FormContainer({ children }: FormContainerProps) {
  return (
    <div className="min-h-[100vh-150px] p-4 md:p-8">
      <div className="mx-auto max-w-2xl">
        <Card className="border shadow-md">
          <CardContent className="p-6">
            {children}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

