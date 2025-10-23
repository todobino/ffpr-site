import { siteConfig } from "@/config/site";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="border-t bg-muted">
      <div className="container py-8">
        <div className="flex flex-col items-center gap-4">
          <Logo />
          <p className="text-center text-sm leading-loose text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
