import { siteConfig } from "@/config/site";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8">
        <div className="flex items-center justify-between">
          <Logo />
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
