
import { features } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export function Features() {
  return (
    <section id="features" className="container py-12 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <Card key={feature.title} className="text-center bg-white shadow-lg drop-shadow-md">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-primary/10 text-primary">
                  <feature.icon className="w-8 h-8" />
                </div>
              </div>
              <CardTitle className="font-headline text-2xl">
                {feature.title}
              </CardTitle>
              <CardDescription className="text-base text-foreground/70 pt-2">
                {feature.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
