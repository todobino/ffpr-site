
import Image from "next/image";
import { getPlaceholderImage } from "@/lib/placeholder-images";
import { teamMembers } from "@/lib/data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function AboutPage() {
  const aboutImage = getPlaceholderImage("about-us-main");
  
  return (
    <div className="container py-12 md:py-24">
      <header className="text-center mb-12 md:mb-20">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary tracking-tight">
          Our Story
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
          More than just a farm, we are a movement dedicated to proving that agriculture can heal the planet and build prosperous communities.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12 md:mb-24">
        {aboutImage && (
          <div className="w-full h-80 md:h-full relative">
            <Image
              src={aboutImage.imageUrl}
              alt={aboutImage.description}
              data-ai-hint={aboutImage.imageHint}
              fill
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        )}
        <div className="space-y-6 text-lg text-foreground/90">
          <h2 className="text-2xl md:text-3xl font-headline font-bold text-primary">From Vision to Verdant Fields</h2>
          <p>
            Freedom Farms was born from a simple yet powerful idea: what if we could farm in a way that gives back more to the Earth than it takes? Nestled in the high-elevation mountains of Puerto Rico, our journey began in 2020 with a mission to address food security, ecological degradation, and economic opportunity.
          </p>
          <p>
            We combine ancient agroforestry wisdom with modern sustainable technology to create a thriving ecosystem. Our farm is a mosaic of fruit trees, specialty crops, and native forestry, all working in synergy to create a carbon-negative sanctuary that produces delicious, healthy food.
          </p>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary tracking-tight mb-12">
          Meet Our Team
        </h2>
        <div className="space-y-16">
          {teamMembers.map((member, index) => {
            const memberImage = getPlaceholderImage(member.image);
            const isReversed = index % 2 !== 0;

            return (
              <Card key={member.name} className="bg-secondary/50 border-0 overflow-hidden">
                <div className={cn("grid grid-cols-1 md:grid-cols-3 items-center gap-8", isReversed ? "md:grid-flow-col-dense" : "")}>
                  <div className={cn("relative w-full h-80 md:h-full", isReversed ? "md:col-start-3" : "")}>
                    {memberImage && (
                      <Image
                        src={memberImage.imageUrl}
                        alt={member.name}
                        data-ai-hint={memberImage.imageHint}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                  <div className="md:col-span-2 p-8 text-left">
                    <h3 className="font-headline text-2xl font-bold">{member.name}</h3>
                    <p className="text-primary font-semibold text-lg mb-4">{member.role}</p>
                    <p className="text-muted-foreground">{member.bio}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
}
