import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src="/ffpr_logo_black.png"
        alt="Freedom Farms Logo"
        width={28}
        height={28}
        className="h-7 w-7"
      />
      <span className="text-xl font-bold tracking-tight text-primary">
        {siteConfig.name}
      </span>
    </Link>
  );
}
