
"use client";

import { useForm, ValidationError } from "@formspree/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [state, handleSubmit] = useForm("mblvvvop");

  if (state.succeeded) {
    return (
      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Thank You!</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-foreground/80">Your message has been sent successfully. We'll be in touch soon.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">Get in Touch!</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" placeholder="Your Name" required />
             <ValidationError 
              prefix="Name" 
              field="name"
              errors={state.errors}
              className="text-sm text-destructive mt-1"
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="your@email.com" required />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
              className="text-sm text-destructive mt-1"
            />
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" placeholder="Your message or inquiry..." required />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
              className="text-sm text-destructive mt-1"
            />
          </div>
          <Button type="submit" disabled={state.submitting} className="w-full">
            {state.submitting ? "Sending..." : "Send Message"}
          </Button>
          {state.errors && Object.keys(state.errors).length > 0 && (
             <p className="text-sm text-destructive mt-2">
                There was an error with your submission. Please check the fields and try again.
             </p>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
