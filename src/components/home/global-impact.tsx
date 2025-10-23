
import { Button } from "../ui/button";
import Link from "next/link";

export function GlobalImpact() {
  return (
    <section className="bg-secondary/50">
      <div className="container py-12 md:py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary tracking-tight">
          A Profitable Path to Global Impact
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
            Due to an extraordinary set of local tax exemptions and our unique geographical advantages, Freedom Farms is probably the only place on earth where we can profitably prove that carbon-negative permaculture is cheaper than modern chemical farming.
        </p>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
            Once achieved, farmers everywhere will adopt these techniques simply because they are more profitable. That is how we change the world for the better.
        </p>
        <Button asChild size="lg" className="mt-8">
            <Link href="/about">Discover Our Mission</Link>
        </Button>
      </div>
    </section>
  );
}
