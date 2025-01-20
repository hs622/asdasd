interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  description?: string
}

export function FormInput({ label, description, ...props }: FormInputProps) {
  return (
    <div className="space-y-2">
      <label className="block">
        <span className="text-sm font-medium">{label}</span>
        <input
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-gray-400 focus:outline-none"
          {...props}
        />
      </label>
      {description && (
        <p className="text-sm text-gray-500">{description}</p>
      )}
    </div>
  )
}

