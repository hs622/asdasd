import { Card, CardContent } from "@/components/ui/card"
import { Users2, User } from 'lucide-react'

type Role = 'PERSONAL' | 'PROFESSIONAL'

interface RoleCardProps {
  title: string
  description: string
  icon: React.ReactNode
  isSelected: boolean
  onClick: () => void
}

interface RoleSelectionProps { 
  selectedRole: Role | null
  onSelectRole: (role: Role) => void
}

export default function RoleSelection({ selectedRole, onSelectRole }: RoleSelectionProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2"> 
      <RoleCard
        title="For Personal Health"
        description="To understand and manage my or my family member's health conditions."
        icon={<Users2 className="h-6 w-6 text-primary" />}
        isSelected={selectedRole === 'PERSONAL'}
        onClick={() => onSelectRole('PERSONAL')} 
      />
      <RoleCard
        title="As a Healthcare Professional"
        description="To streamline workflows, and save time, improving patient interaction and outcomes."
        icon={<User className="h-6 w-6 text-primary" />}
        isSelected={selectedRole === 'PROFESSIONAL'}
        onClick={() => onSelectRole('PROFESSIONAL')} 
      />
    </div>
  )
}

function RoleCard({ title, description, icon, isSelected, onClick }: RoleCardProps) {
  return (
    <Card 
      className={`cursor-pointer transition-all ${
        isSelected ? 'ring-2 ring-primary' : ''
      }`}
      onClick={onClick}
    >
      <CardContent className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="font-medium text-primary">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        {icon}
      </CardContent>
    </Card>
  )
}