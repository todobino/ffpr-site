import { Hero } from "@/components/home/hero";
import { Mission } from "@/components/home/mission";
import { Features } from "@/components/home/features";
import { Investment } from "@/components/home/investment";
import { CarbonCalculator } from "@/components/home/carbon-calculator";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Mission />
      <Features />
      <Investment />
      <div className="container py-12 md:py-24">
        <Separator />
      </div>
      <CarbonCalculator />
    </div>
  );
}
