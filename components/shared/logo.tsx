import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "dark" | "white";
  width?: number;
  height?: number;
}

export function Logo({ className, variant = "dark", width = 200, height = 200 }: LogoProps) {
  const logoSrc = variant === "white" ? "/images/branding/logo-white.png" : "/images/branding/logo-dark.png";
  
  return (
    <Link href="/" className={cn(className, "block w-full h-full")}>
      <Image 
        src={logoSrc} 
        alt="logo" 
        width={width} 
        height={height} 
        className="w-full h-full object-contain" 
        priority
      />
    </Link>
  );
}
