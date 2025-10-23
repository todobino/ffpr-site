import { siteConfig } from "@/config/site";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 space-y-4">
        <div className="flex items-center justify-between">
          <Logo />
          <p className="text-sm text-muted-foreground text-right">
            © {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.
          </p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground">
            This website is for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any securities. Investments referenced herein are offered pursuant to Rule 506(c) of Regulation D and are available only to verified accredited investors. All investments involve risk, including the loss of principal. Past performance is not indicative of future results. Forward-looking statements are not guarantees of future outcomes. Offers may only be made through official offering documents. Please consult your legal, tax, or financial advisor before making any investment decision.
          </p>
        </div>
      </div>
    </footer>
  );
}
