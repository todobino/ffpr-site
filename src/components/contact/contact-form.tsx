
"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect } from "react";
import { submitContactForm } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const initialState = {
  message: "",
  errors: {},
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? "Sending..." : "Send Message"}
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.success) {
      toast({
        title: "Success!",
        description: state.message,
      });
    } else if (state.message && Object.keys(state.errors).length > 0) {
      toast({
        variant: "destructive",
        title: "Error",
        description: state.message,
      });
    }
  }, [state, toast]);

  return (
    <Card className="bg-background shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">Send us a message</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" placeholder="Your Name" />
            {state.errors?.name && (
              <p className="text-sm text-destructive mt-1">{state.errors.name[0]}</p>
            )}
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="your@email.com" />
            {state.errors?.email && (
              <p className="text-sm text-destructive mt-1">{state.errors.email[0]}</p>
            )}
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" placeholder="Your message or inquiry..." />
            {state.errors?.message && (
              <p className="text-sm text-destructive mt-1">{state.errors.message[0]}</p>
            )}
          </div>
          <SubmitButton />
        </form>
      </CardContent>
    </Card>
  );
}
