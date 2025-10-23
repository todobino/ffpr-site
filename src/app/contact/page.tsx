import { Mail, Phone, MapPin } from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-24">
      <header className="text-center mb-12 md:mb-20">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary tracking-tight">
          Get in Touch
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
          Whether you're an interested investor, a potential partner, or just want to learn more, we'd love to hear from you.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-full text-primary">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-headline">Email</h3>
              <p className="text-muted-foreground">For general inquiries and investment information.</p>
              <a href="mailto:contact@freedomfarms.pr" className="text-primary hover:underline">
                contact@freedomfarms.pr
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-full text-primary">
              <Phone className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-headline">Phone</h3>
              <p className="text-muted-foreground">Available during business hours (9am-5pm AST).</p>
              <a href="tel:+17875550101" className="text-primary hover:underline">
                +1 (787) 555-0101
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-full text-primary">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-headline">Location</h3>
              <p className="text-muted-foreground">High-Elevation Mountains, Puerto Rico. <br />Farm visits are by appointment only.</p>
            </div>
          </div>
        </div>
        
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
