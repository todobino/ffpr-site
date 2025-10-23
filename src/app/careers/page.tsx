import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { careers } from "@/lib/data";
import { MapPin, Clock, Check } from "lucide-react";

export default function CareersPage() {
  return (
    <div className="container py-12 md:py-24">
      <header className="text-center mb-12 md:mb-20">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary tracking-tight">
          Join Our Mission
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
          We're looking for passionate individuals to help us grow. Be part of a team that's making a real difference.
        </p>
      </header>

      <div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {careers.map((job) => (
            <AccordionItem key={job.title} value={job.title}>
              <AccordionTrigger className="text-left hover:no-underline">
                <div className="w-full">
                  <h3 className="text-xl font-headline font-bold">{job.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                    <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> {job.location}</span>
                    <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {job.type}</span>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-6 pt-4">
                <p className="text-foreground/80">{job.description}</p>
                <div>
                  <h4 className="font-bold mb-2">Responsibilities:</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    {job.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Qualifications:</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    {job.qualifications.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
