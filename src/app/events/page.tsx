
import Image from "next/image";
import { getPlaceholderImage } from "@/lib/placeholder-images";
import { events } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Clock, MapPin, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EventsPage() {
  const bannerImage = getPlaceholderImage("events-banner");
  const event = events[0]; // There is only one event now
  const eventImage = getPlaceholderImage(event.image);

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
            Exclusive Investor Event
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-primary-foreground/90">
            An invitation to experience the future of sustainable agriculture firsthand.
          </p>
        </header>
      </section>
      
      <div className="container py-12 md:py-24">
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-lg grid grid-cols-1 md:grid-cols-2">
            <div className="relative min-h-[300px] md:min-h-full">
              {eventImage && (
                <Image
                  src={eventImage.imageUrl}
                  alt={event.title}
                  data-ai-hint={eventImage.imageHint}
                  fill
                  className="object-cover"
                />
              )}
            </div>
            <div className="flex flex-col p-8">
              <CardHeader className="p-0">
                <CardTitle className="font-headline text-3xl text-primary">{event.title}</CardTitle>
                <div className="flex flex-col gap-2 text-muted-foreground text-sm pt-4">
                  <div className="flex items-center gap-2">
                    <event.icon className="h-4 w-4 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{event.time}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0 pt-6 flex-grow flex flex-col">
                <CardDescription className="flex-grow text-base text-foreground/80">{event.description}</CardDescription>
                <div className="mt-6 bg-primary/10 p-4 rounded-lg text-center">
                  <p className="text-sm text-primary font-semibold">Exact date to be announced after the New Orleans Investment Conference.</p>
                </div>
                <Button className="mt-6 w-full" size="lg">RSVP to Express Interest</Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
