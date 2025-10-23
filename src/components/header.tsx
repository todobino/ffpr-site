"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Logo } from "./logo";

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="sticky top-4 z-50 flex justify-center">
      <header className="w-full max-w-2xl rounded-full border border-border/40 bg-background/95 shadow-md backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <div className="mr-4 flex">
            <Logo />
          </div>
          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="pr-0">
                <div className="p-4">
                  <Logo />
                </div>
                <div className="flex flex-col space-y-4 mt-4">
                  {siteConfig.navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "text-lg font-medium font-headline px-4 py-2 rounded-md",
                        pathname === item.href
                          ? "text-primary bg-primary/10"
                          : "text-muted-foreground hover:bg-muted"
                      )}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <nav className="hidden font-headline md:flex md:gap-6">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname === item.href
                    ? "text-foreground"
                    : "text-foreground/60"
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </div>
  );
}
