
"use client";

import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function EventRsvpForm({ eventId }: { eventId: string }) {
  const [status, setStatus] = useState<"initial" | "sending" | "sent" | "error">("initial");
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const payload = {
      type: "eventRegistration",
      data: {
        name: data.name,
        email: data.email,
        eventId: data.eventId,
      },
    };

    try {
      const response = await fetch("/api/forms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus("sent");
        toast({
          title: "Success!",
          description: "Thank you for your interest! We've received your RSVP and will send more details soon.",
        });
        form.reset();
      } else {
        const result = await response.json();
        setStatus("error");
        setError(result.error || "An unexpected error occurred.");
        toast({
          variant: "destructive",
          title: "Error",
          description: result.error || "Could not submit RSVP.",
        });
      }
    } catch (err) {
      setStatus("error");
      const errorMessage = err instanceof Error ? err.message : "An unexpected network error occurred.";
      setError(errorMessage);
      toast({
        variant: "destructive",
        title: "Error",
        description: errorMessage,
      });
    } finally {
        if (status !== 'sent') {
            setStatus('initial');
        }
    }
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
        </div>
        <Button type="submit" disabled={status === 'sending'} className="w-full">
          {status === 'sending' ? "Submitting..." : "RSVP to Express Interest"}
        </Button>
        {status === 'error' && error && (
          <p className="text-sm text-destructive mt-2">{error}</p>
        )}
      </form>
    </CardContent>
  );
}
