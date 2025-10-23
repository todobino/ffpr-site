import { Hero } from "@/components/home/hero";
import { Mission } from "@/components/home/mission";
import { Features } from "@/components/home/features";
import { Investment } from "@/components/home/investment";
import { PuertoRicoAdvantage } from "@/components/home/puerto-rico-advantage";
import { GlobalImpact } from "@/components/home/global-impact";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Mission />
      <Features />
      <Investment />
      <PuertoRicoAdvantage />
      <GlobalImpact />
    </div>
  );
}
