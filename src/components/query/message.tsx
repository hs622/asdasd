import Avatar from "./avatar"

interface MessageProps {
  isBot?: boolean
  content: string
  isWelcome?: boolean
  link?: string
  signature?: string
}

export function Message({ isBot = false, content, isWelcome, link, signature }: MessageProps) {
  return (
    <div className="flex gap-4 items-start">
      <Avatar isBot={isBot} />
      <div className={`flex-1 rounded-lg p-4 ${isBot ? "bg-[#f0fdf4]" : "bg-gray-100"}`}>
        {isWelcome && <h2 className="font-semibold text-lg mb-2">Welcome to DegreeGuru</h2>}
        <p className="text-gray-800 whitespace-pre-wrap">{content}</p>
        {link && (
          <p className="mt-4">
            For more information on the Creative Writing minor requirements and how to declare it, you can visit the
            Stanford Bulletin page{" "}
            <a href={link} className="text-teal-600 hover:underline">
              here
            </a>
            .
          </p>
        )}
        {signature && <p className="mt-4 text-gray-600">{signature}</p>}
      </div>
    </div>
  )
}