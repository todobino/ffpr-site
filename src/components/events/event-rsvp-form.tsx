
"use client";

import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { submitEventRegistration } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
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
      {pending ? "Submitting..." : "RSVP to Express Interest"}
    </Button>
  );
}

export function EventRsvpForm({ eventId }: { eventId: string }) {
  const [state, formAction] = useActionState(
    submitEventRegistration,
    initialState
  );
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: "Success!",
          description: state.message,
        });
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: state.message,
        });
      }
    }
  }, [state, toast]);

  return (
    <Card className="bg-transparent border-none shadow-none">
      <CardContent className="p-0">
        <form action={formAction} className="space-y-4">
          <input type="hidden" name="eventId" value={eventId} />
          <div>
            <Label htmlFor="name" className="sr-only">Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Your Name"
              aria-label="Name"
            />
            {state.errors?.name && (
              <p className="text-sm text-destructive mt-1">
                {state.errors.name[0]}
              </p>
            )}
          </div>
          <div>
            <Label htmlFor="email" className="sr-only">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              aria-label="Email"
            />
            {state.errors?.email && (
              <p className="text-sm text-destructive mt-1">
                {state.errors.email[0]}
              </p>
            )}
          </div>
          <SubmitButton />
        </form>
      </CardContent>
    </Card>
  );
}
