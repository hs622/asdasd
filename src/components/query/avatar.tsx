import { CircleIcon } from "lucide-react"

interface AvatarProps {
  isBot?: boolean
}

export default function Avatar({ isBot = false }: AvatarProps) {
  return isBot ? (
    <div className="h-8 w-8 rounded-full bg-teal-600 flex items-center justify-center text-white">
      <CircleIcon className="h-4 w-4" />
    </div>
  ) : (
    <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
      <CircleIcon className="h-4 w-4 text-gray-500" />
    </div>
  )
}

