"use client"

import ChatInput from "@/components/query/chat-input"
import SuggestionButton from "@/components/query/suggestion-button"
import WelcomeMessage from "@/components/query/welcome-message"

const suggestions = [
  "Are you experiencing any persistent symptoms such as hearing loss or ringing in the ears?",
  "Do you often have sinus-related discomfort or congestion?",
  "Have you noticed any recurring throat pain or difficulty swallowing?",
  "Do you experience frequent ear infections or dizziness?"
];

export default function Chat() {
  const handleSuggestionClick = (question: string) => {
    console.log("Selected question:", question)
  }

  const handleSendMessage = (message: string) => {
    console.log("Sent message:", message)
  }

  return (
    <main className="flex items-center justify-center h-[calc(100vh-6px)]">
      <div className="max-w-3xl w-full p-4 space-y-8">
        <WelcomeMessage />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {suggestions.map((question, index) => (
            <SuggestionButton key={index} question={question} onClick={() => handleSuggestionClick(question)} />
          ))}
        </div>

        <ChatInput onSend={handleSendMessage} />
      </div>
    </main>
  )
}

