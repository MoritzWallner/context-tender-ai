import type React from "react"
import Image from "next/image"
import Link from "next/link"

const Logo: React.FC<{ className?: string; iconOnly?: boolean; size?: "sm" | "md" | "lg" }> = ({
  className,
  iconOnly = false,
  size = "sm",
}) => {
  const sizeClass = {
    sm: "h-10",
    md: "h-16",
    lg: "h-20",
  }[size]

  const finalClassName = className || sizeClass

  return (
    <Link href="/" className="flex items-center hover:opacity-80 transition-opacity cursor-pointer">
      <div className={`flex items-center ${finalClassName}`}>
        <Image src="/alpx-logo.png" alt="AlpX Logo" width={160} height={50} className="w-auto h-12" priority />
      </div>
    </Link>
  )
}

export default Logo
