
import Image from "next/image";
import Link from "next/link";

export function PuertoRicoAdvantage() {
  return (
    <section className="bg-background">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-12 md:py-24">
        <div className="aspect-video w-full relative">
            <Image
                src="/sustainable-pr.jpg"
                alt="Sustainable agriculture in Puerto Rico"
                fill
                className="rounded-lg shadow-lg object-cover"
            />
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary tracking-tight">
            The Puerto Rico Advantage
          </h2>
          <p className="text-lg text-foreground/80">
            Puerto Rico currently imports 85% of its food, and because of a law called <a href="https://en.wikipedia.org/wiki/Merchant_Marine_Act_of_1920" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">the Jones Act</a>, the cost can be up to 40% higher than on the mainland.
          </p>
          <p className="text-lg text-foreground/80">
            As one of the island’s highest-elevation farms, we enjoy air temperatures some 10-25 degrees F cooler than most others, allowing us to grow produce locally that is typically imported at outrageous costs. This unique position allows us to directly address food security and affordability for Puerto Rico.
          </p>
        </div>
      </div>
    </section>
  );
}
