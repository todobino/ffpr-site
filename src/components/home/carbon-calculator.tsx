"use client";

import { useState, useEffect, useTransition } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { getCarbonMetric } from "@/app/actions";
import type { CarbonNegativityMetricOutput } from "@/ai/flows/display-dynamic-carbon-negativity-metric";
import { Skeleton } from "../ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Terminal } from "lucide-react";

const initialInput = {
  farmSizeAcres: 100,
  treesPlanted: 5000,
  averageTreeCarbonSequestrationKgPerYear: 22,
  farmEmissionsKgPerYear: 25000,
};

export function CarbonCalculator() {
  const [input, setInput] = useState(initialInput);
  const [metric, setMetric] = useState<CarbonNegativityMetricOutput | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSliderChange = (name: keyof typeof input, value: number[]) => {
    setInput((prev) => ({ ...prev, [name]: value[0] }));
  };

  useEffect(() => {
    startTransition(async () => {
      try {
        setError(null);
        const result = await getCarbonMetric(input);
        setMetric(result);
      } catch (e) {
        setError((e as Error).message);
      }
    });
  }, [input]);

  const MetricCard = ({ title, value, unit, description }: { title: string; value: number | string; unit?: string; description?: string }) => (
    <Card>
      <CardHeader>
        <CardDescription>{title}</CardDescription>
        <CardTitle className="text-3xl text-primary">
          {isPending ? <Skeleton className="w-3/4 h-8" /> : (
            <>
              {typeof value === 'number' ? value.toLocaleString(undefined, { maximumFractionDigits: 1 }) : value}
              {unit && <span className="text-lg text-muted-foreground ml-2">{unit}</span>}
            </>
          )}
        </CardTitle>
      </CardHeader>
      {description && !isPending && <CardContent><p className="text-sm text-muted-foreground">{description}</p></CardContent>}
    </Card>
  )

  return (
    <section className="container pb-12 md:pb-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary tracking-tight">
          Our Dynamic Carbon Impact
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
          Adjust the sliders to see how different factors contribute to our carbon negativity. This tool provides a real-time estimate of our environmental impact based on the latest data and projections.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-8">
          <div>
            <Label htmlFor="farmSizeAcres" className="text-lg">Farm Size: {input.farmSizeAcres.toLocaleString()} Acres</Label>
            <Slider
              id="farmSizeAcres"
              min={10} max={500} step={10}
              value={[input.farmSizeAcres]}
              onValueChange={(v) => handleSliderChange("farmSizeAcres", v)}
              className="mt-2"
            />
          </div>
          <div>
            <Label htmlFor="treesPlanted" className="text-lg">Trees Planted: {input.treesPlanted.toLocaleString()}</Label>
            <Slider
              id="treesPlanted"
              min={100} max={25000} step={100}
              value={[input.treesPlanted]}
              onValueChange={(v) => handleSliderChange("treesPlanted", v)}
              className="mt-2"
            />
          </div>
          <div>
            <Label htmlFor="farmEmissionsKgPerYear" className="text-lg">Farm Emissions: {input.farmEmissionsKgPerYear.toLocaleString()} kg/year</Label>
            <Slider
              id="farmEmissionsKgPerYear"
              min={5000} max={100000} step={1000}
              value={[input.farmEmissionsKgPerYear]}
              onValueChange={(v) => handleSliderChange("farmEmissionsKgPerYear", v)}
              className="mt-2"
            />
          </div>
        </div>

        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <MetricCard title="Total Carbon Sequestration" value={metric?.carbonSequestrationKgPerYear ?? 0} unit="kg/year" />
          <MetricCard title="Net Carbon Impact" value={metric?.netCarbonImpactKgPerYear ?? 0} unit="kg/year" />
          <MetricCard title="Carbon Negativity Score" value={metric?.carbonNegativityScore ?? 0} description="(Net Impact / Farm Acres)" />
          <MetricCard title="Qualitative Assessment" value={isPending ? "" : (metric?.qualitativeAssessment ?? "...")} />
          {error && (
            <Alert variant="destructive" className="md:col-span-2">
              <Terminal className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                {error}
              </AlertDescription>
            </Alert>
          )}
        </div>
      </div>
    </section>
  );
}
