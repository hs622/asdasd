interface SuggestionButtonProps {
  question: string
  onClick?: () => void
}

export default function SuggestionButton({ question, onClick }: SuggestionButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-full p-4 text-left rounded-lg border border-gray-200 hover:border-teal-500 transition-colors"
    >
      {question}
    </button>
  )
}

