import Avatar from "./avatar";


export default function WelcomeMessage() {
  return (
    <div className="flex gap-4 items-start">
      <Avatar isBot />
      <div className="flex-1 rounded-lg p-4 bg-[#f0fdf4]">
        <h1 className="font-semibold text-lg mb-2">Welcome to HealthDesk</h1>
        <p className="text-gray-800">Your ultimate companion in navigating the academic landscape of Stanford.</p>
      </div>
    </div>
  )
}

