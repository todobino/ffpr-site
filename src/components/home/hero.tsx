import { getPlaceholderImage } from "@/lib/placeholder-images";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export function Hero() {
  const heroImage = getPlaceholderImage("hero-background");

  return (
    <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          data-ai-hint={heroImage.imageHint}
          fill
          className="object-cover"
          priority
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center px-4 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold tracking-tighter">
          Freedom Farms
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/90">
          A high-elevation sustainable agriculture project in Puerto Rico aiming to produce food locally, profitably, and carbon-negatively.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/about">Learn More</Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Invest Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
