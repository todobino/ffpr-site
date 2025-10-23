import Link from "next/link";
import { Button } from "../ui/button";
import { CheckCircle } from "lucide-react";

export function Investment() {
  return (
    <section className="bg-secondary/50">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-12 md:py-24">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary tracking-tight">
            Invest in a Greener Future
          </h2>
          <p className="text-lg text-foreground/80">
            Freedom Farms offers a unique opportunity for accredited investors to be part of a project that generates both financial returns and positive environmental impact. Your investment directly supports the expansion of our carbon-negative operations.
          </p>
          <ul className="space-y-2 text-foreground/70">
            <li className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              Tangible assets in sustainable agriculture.
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              Contribute to a carbon-negative enterprise.
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              Become part of a forward-thinking community.
            </li>
          </ul>
          <Button asChild size="lg" className="mt-4">
            <Link href="/contact">Request Information</Link>
          </Button>
        </div>
        <div className="aspect-video w-full">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/K1TezYYwmZY"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
