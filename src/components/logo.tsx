import Image from "next/image"

export default function Logo() {
  return (
    <div className="flex justify-center">
      <Image
        src="/placeholder.svg"
        alt="Docus Logo"
        width={120}
        height={40}
        className="h-10 w-auto"
      />
    </div>
  )
}