import { Progress } from "@/components/ui/progress"

interface HealthProfileProps {
  name: string
  progress: number
}

export function HealthProfile({ name, progress }: HealthProfileProps) {
  return (
    <div className="mb-8 rounded-lg border bg-background p-6">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight text-primary">{name}&apos;s</h2>
          <p className="text-sm text-muted-foreground">Health Profile</p>
        </div>
        <div className="flex items-center gap-2">
          <Progress value={progress} className="h-2 w-20" />
          <span className="text-sm text-muted-foreground">{progress}%</span>
        </div>
      </div>
    </div>
  )
}

