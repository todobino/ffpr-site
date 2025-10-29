
import Image from "next/image";
import { getPlaceholderImage } from "@/lib/placeholder-images";
import { teamMembers } from "@/lib/data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function AboutPage() {
  const aboutImage = getPlaceholderImage("about-us-main");

  return (
    <>
      <section className="relative h-96 w-full flex items-center justify-center text-white">
        <Image
          src="/site-header-banner.jpg"
          alt="Freedom Farms banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <header className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-white tracking-tight">
            Our Story
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-primary-foreground/90">
            More than just a farm, we are a movement dedicated to proving that agriculture can heal the planet and build prosperous communities.
          </p>
        </header>
      </section>

      <div className="container py-12 md:py-24">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12 md:mb-24">
          <div className="aspect-video w-full">
              <iframe
                className="w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/K1TezYYwmZY"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
          </div>
          <div className="space-y-6 text-lg text-foreground/90">
            <h2 className="text-2xl md:text-3xl font-headline font-bold text-primary">From Vision to Verdant Fields</h2>
            <p>
              Freedom Farms was born from a simple yet powerful idea: what if we could farm in a way that gives back more to the Earth than it takes? Nestled in the high-elevation mountains of Puerto Rico, our journey began in 2020 with a mission to address food security, ecological degradation, and economic opportunity.
            </p>
            <p>
              We are at the beginning of our journey to combine ancient agroforestry wisdom with modern sustainable technology. Our plan is to cultivate a thriving ecosystem—a beautiful mosaic of fruit trees, specialty crops, and native forestry. All of these elements will work in synergy to create a carbon-negative sanctuary that produces delicious, healthy food.
            </p>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary tracking-tight mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 gap-8 lg:gap-12">
            {teamMembers.map((member, index) => {
              const memberImage = getPlaceholderImage(member.image);

              return (
                <div key={member.name} className={cn("flex w-full", index % 2 === 0 ? "md:justify-start" : "md:justify-end")}>
                  <Card className={cn("w-full md:w-[70%] bg-secondary/50 overflow-hidden border-border drop-shadow-sm rounded-2xl flex flex-col md:flex-row", { "md:flex-row-reverse": index % 2 !== 0 })}>
                    <div className="relative md:w-2/5 w-full">
                      {memberImage && (
                          <div className="relative w-full h-full min-h-64 md:min-h-full">
                            <Image
                              src={memberImage.imageUrl}
                              alt={member.name}
                              data-ai-hint={memberImage.imageHint}
                              fill
                              className="object-cover object-top"
                            />
                          </div>
                      )}
                    </div>
                    <div className="p-6 text-left flex flex-col justify-center flex-grow md:w-3/5">
                      <h3 className="font-headline text-2xl font-bold">{member.name}</h3>
                      <p className="text-primary font-semibold text-lg mb-4">{member.role}</p>
                      <p className="text-muted-foreground text-sm">{member.bio}</p>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}
