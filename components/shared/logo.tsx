import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={cn(className, "w-full h-full")}>
      <Image src={"/images/branding/logo-dark.png"} alt="logo" width={200} height={200} className="w-full h-full object-contain" />
    </Link>
  );
}
