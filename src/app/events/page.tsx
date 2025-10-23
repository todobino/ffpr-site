import Image from "next/image";
import { getPlaceholderImage } from "@/lib/placeholder-images";
import { events } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EventsPage() {
  return (
    <div className="container py-12 md:py-24">
      <header className="text-center mb-12 md:mb-20">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary tracking-tight">
          Upcoming Events
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
          Join us on the farm to learn, connect, and celebrate sustainable agriculture.
        </p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {events.map((event) => {
          const eventImage = getPlaceholderImage(event.image);
          return (
            <Card key={event.title} className="flex flex-col">
              {eventImage && (
                <div className="w-full h-60 relative">
                  <Image
                    src={eventImage.imageUrl}
                    alt={event.title}
                    data-ai-hint={eventImage.imageHint}
                    fill
                    className="rounded-t-lg object-cover"
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="font-headline text-2xl">{event.title}</CardTitle>
                <div className="flex items-center gap-4 text-muted-foreground text-sm pt-2">
                  <div className="flex items-center gap-1.5">
                    <event.icon className="h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    <span>{event.time}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <CardDescription className="flex-grow">{event.description}</CardDescription>
                <Button className="mt-6 w-full md:w-auto self-start">RSVP Now</Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
