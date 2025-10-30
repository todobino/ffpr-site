
import { Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";
import { getPlaceholderImage } from "@/lib/placeholder-images";
import Image from "next/image";

const TelegramIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m15 10-4 4 6 6 4-16-18 7 4 2 2 6 3-4" />
    </svg>
  );

export default function ContactPage() {
  return (
    <>
      <section className="relative h-96 w-full flex items-center justify-center text-white">
        <Image
          src="/site-header-banner.jpg"
          alt="Freedom Farms banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <header className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-white tracking-tight">
            Get in Touch
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-primary-foreground/90">
            Whether you're an interested investor, a potential partner, or just want to learn more, we'd love to hear from you.
          </p>
        </header>
      </section>

      <div className="container py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8 flex flex-col justify-center">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-full text-primary">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-headline">Email</h3>
                <p className="text-muted-foreground">For general inquiries and investment information.</p>
                <a href="mailto:info@freedomfarmspr.com" className="text-primary hover:underline">
                  info@freedomfarmspr.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-full text-primary">
                <TelegramIcon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-headline">Telegram Channel</h3>
                <p className="text-muted-foreground">Join our community for updates and discussions.</p>
                <a href="https://t.me/+LYu0wiiutnA2MGZh" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Freedom Farms Community
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
    </>
  );
}
