
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface DashboardCardProps {
  title: string
  icon: LucideIcon
  comingSoon?: boolean
  description?: string
  className?: string
  onClick?: () => void
}

export function Card({ title, icon: Icon, comingSoon, description, className, onClick }: DashboardCardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "group relative overflow-hidden rounded-lg border bg-background p-6 transition-colors hover:bg-accent",
        className,
        onClick && "cursor-pointer",
      )}
    >
      <div className="flex justify-between">
        <div className="space-y-2">
          <h3 className="font-semibold">{title}</h3>
          {comingSoon && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Coming soon</span>
            </div>
          )}
          {description && <p className="text-sm text-muted-foreground">{description}</p>}
        </div>
        <div className="h-12 w-12">
          <Icon className="h-12 w-12 text-muted-foreground/50" />
        </div>
      </div>
    </div>
  )
}

