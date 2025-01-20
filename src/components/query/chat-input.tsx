"use client"

import { ArrowRightIcon } from "lucide-react"
import { useState } from "react"

interface ChatInputProps {
  onSend?: (message: string) => void
}

export default function ChatInput({ onSend }: ChatInputProps) {
  const [input, setInput] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim() && onSend) {
      onSend(input)
      setInput("")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
      <div className="max-w-3xl mx-auto relative">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Your question..."
          className="w-full p-4 pr-12 rounded-lg border border-gray-200 focus:outline-none focus:border-teal-500"
        />
        <button
          type="submit"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-teal-600"
          aria-label="Send message"
        >
          <ArrowRightIcon className="h-5 w-5" />
        </button>
      </div>
    </form>
  )
}

