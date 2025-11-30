
"use client";

import { useForm, ValidationError } from "@formspree/react";
import { CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CheckCircle, Info } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function EventRsvpForm({ eventId }: { eventId: string }) {
  const [state, handleSubmit] = useForm("movogowl");
  const { toast } = useToast();

  if (state.succeeded) {
    return (
        <div className="mt-6 bg-primary/10 p-4 rounded-lg flex flex-col items-center justify-center gap-3 text-center">
            <CheckCircle className="h-10 w-10 text-primary" />
            <h3 className="font-headline text-lg font-semibold text-primary">RSVP Received!</h3>
            <p className="text-sm text-primary font-semibold">
                Thank you for your interest. We'll be in touch with more details soon.
            </p>
        </div>
    );
  }

  return (
    <CardContent className="p-0">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="hidden" name="eventId" value={eventId} />
        <div>
          <Label htmlFor="name" className="sr-only">Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Your Name"
            aria-label="Name"
            required
          />
           <ValidationError 
              prefix="Name" 
              field="name"
              errors={state.errors}
              className="text-sm text-destructive mt-1"
            />
        </div>
        <div>
          <Label htmlFor="email" className="sr-only">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your@email.com"
            aria-label="Email"
            required
          />
           <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
              className="text-sm text-destructive mt-1"
            />
        </div>
        <Button type="submit" disabled={state.submitting} className="w-full">
          {state.submitting ? "Submitting..." : "RSVP to Express Interest"}
        </Button>
        {state.errors && Object.keys(state.errors).length > 0 && (
             <p className="text-sm text-destructive mt-2">
                There was an error with your submission. Please check the fields and try again.
             </p>
          )}
      </form>
    </CardContent>
  );
}
