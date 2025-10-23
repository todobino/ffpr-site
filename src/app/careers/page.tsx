
import { getPlaceholderImage } from "@/lib/placeholder-images";
import Image from "next/image";
import { poultryServicesStaff } from "@/lib/data";
import { Check, DollarSign, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function CareersPage() {
  const bannerImage = getPlaceholderImage("careers-banner");
  const job = poultryServicesStaff;

  return (
    <>
      <section className="relative h-96 w-full flex items-center justify-center text-white">
        {bannerImage && (
          <Image
            src={bannerImage.imageUrl}
            alt={bannerImage.description}
            data-ai-hint={bannerImage.imageHint}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <header className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-white tracking-tight">
            Join Our Mission
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-primary-foreground/90">
            We're looking for passionate individuals to help us grow. Be part of a team that's making a real difference.
          </p>
        </header>
      </section>

      <div className="container py-12 md:py-24">
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-lg">
            <CardHeader className="bg-secondary/30 p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle className="font-headline text-3xl text-primary">{job.title}</CardTitle>
                  <div className="flex items-center gap-6 text-muted-foreground mt-2">
                    <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> {job.location}</span>
                    <span className="flex items-center gap-1.5"><DollarSign className="h-4 w-4" /> {job.salary}</span>
                  </div>
                </div>
                <Button size="lg" asChild>
                  <a href="https://www.jotform.com/form/252454857611259" target="_blank" rel="noopener noreferrer">Apply Now</a>
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-8 space-y-8">
              <blockquote className="border-l-4 border-primary pl-4 italic text-lg text-foreground/80">
                {job.quote}
              </blockquote>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-headline text-xl font-bold text-primary mb-2">The Mission</h3>
                  <p className="text-foreground/80">{job.mission}</p>
                </div>
                <div>
                  <h3 className="font-headline text-xl font-bold text-primary mb-2">The Opportunity</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    {job.opportunity.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                        <span><span className="font-semibold text-foreground/90">{item.split(':')[0]}:</span>{item.split(':')[1]}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-headline text-xl font-bold text-primary mb-2">The Responsibilities</h3>
                   <ul className="space-y-2 text-muted-foreground">
                    {job.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                        <span><span className="font-semibold text-foreground/90">{item.split(':')[0]}:</span>{item.split(':')[1]}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-headline text-xl font-bold text-primary mb-2">Who We're Looking For</h3>
                   <ul className="space-y-2 text-muted-foreground">
                    {job.whoWeAreLookingFor.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                 <div>
                  <h3 className="font-headline text-xl font-bold text-primary mb-2">What Makes Us Different</h3>
                  <p className="text-foreground/80">{job.whatMakesUsDifferent}</p>
                </div>
              </div>

              <div className="text-center bg-primary/10 p-6 rounded-lg">
                <h3 className="font-headline text-2xl font-bold mb-2">Ready to Change The World?</h3>
                <p className="text-muted-foreground mb-4">{job.closingStatement}</p>
                <Button size="lg" asChild>
                  <a href="https://www.jotform.com/form/252454857611259" target="_blank" rel="noopener noreferrer">Apply Now</a>
                </Button>
              </div>

            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
