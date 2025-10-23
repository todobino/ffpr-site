
import Image from "next/image";
import { getPlaceholderImage } from "@/lib/placeholder-images";
import { Leaf } from "lucide-react";

export function PuertoRicoAdvantage() {
    const advantageImage = getPlaceholderImage("puerto-rico-advantage");
  return (
    <section className="bg-background">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-12 md:py-24">
        <div className="aspect-square w-full relative">
            {advantageImage && (
                <Image
                    src={advantageImage.imageUrl}
                    alt={advantageImage.description}
                    data-ai-hint={advantageImage.imageHint}
                    fill
                    className="rounded-lg shadow-lg object-cover"
                />
            )}
        </div>
        <div className="space-y-4">
            <div className="p-3 bg-primary/10 rounded-full inline-block">
                <Leaf className="h-8 w-8 text-primary" />
            </div>
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary tracking-tight">
            The Puerto Rico Advantage
          </h2>
          <p className="text-lg text-foreground/80">
            Puerto Rico currently imports 85% of its food, and because of a law called the Jones Act, the cost can be up to 40% higher than on the mainland.
          </p>
          <p className="text-lg text-foreground/80">
            As one of the island’s highest-elevation farms, we enjoy air temperatures some 8°F – 18°F cooler than most others, allowing us to grow produce locally that is typically imported at outrageous costs. This unique position allows us to directly address food security and affordability for Puerto Rico.
          </p>
        </div>
      </div>
    </section>
  );
}
