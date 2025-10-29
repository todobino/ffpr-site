
"use client";

import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function ContactForm() {
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
      type: "contact",
      data: {
        name: data.name,
        email: data.email,
        message: data.message,
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
          description: "Thank you! Your message has been sent successfully.",
        });
        form.reset();
      } else {
        const result = await response.json();
        setStatus("error");
        setError(result.error || "An unexpected error occurred.");
        toast({
          variant: "destructive",
          title: "Error",
          description: result.error || "Could not send message.",
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
        if(status !== 'sent') {
            setStatus('initial');
        }
    }
  }

  return (
    <Card className="bg-white shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">Send us a message</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" placeholder="Your Name" required />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="your@email.com" required />
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" placeholder="Your message or inquiry..." required />
          </div>
          <Button type="submit" disabled={status === 'sending'} className="w-full">
            {status === 'sending' ? "Sending..." : "Send Message"}
          </Button>
          {status === 'error' && error && (
            <p className="text-sm text-destructive mt-2">{error}</p>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
