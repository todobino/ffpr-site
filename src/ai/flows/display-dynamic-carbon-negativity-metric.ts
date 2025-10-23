'use server';

/**
 * @fileOverview A flow to generate a dynamic carbon negativity metric for Freedom Farms.
 *
 * - generateCarbonNegativityMetric - A function that generates the carbon negativity metric.
 * - CarbonNegativityMetricInput - The input type for the generateCarbonNegativityMetric function.
 * - CarbonNegativityMetricOutput - The return type for the generateCarbonNegativityMetric function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CarbonNegativityMetricInputSchema = z.object({
  farmSizeAcres: z.number().describe('The size of the farm in acres.'),
  treesPlanted: z.number().describe('The number of trees planted on the farm.'),
  averageTreeCarbonSequestrationKgPerYear: z
    .number()
    .describe(
      'The average amount of carbon dioxide sequestered by each tree per year in kilograms.'
    ),
  farmEmissionsKgPerYear: z
    .number()
    .describe('The total carbon emissions of the farm per year in kilograms.'),
});
export type CarbonNegativityMetricInput = z.infer<typeof CarbonNegativityMetricInputSchema>;

const CarbonNegativityMetricOutputSchema = z.object({
  carbonSequestrationKgPerYear: z
    .number()
    .describe('The total carbon sequestration of the farm per year in kilograms.'),
  netCarbonImpactKgPerYear: z
    .number()
    .describe('The net carbon impact of the farm per year in kilograms.'),
  carbonNegativityScore: z.number().describe(
    'A score representing the carbon negativity of the farm, calculated by (carbonSequestrationKgPerYear - farmEmissionsKgPerYear) / farmSizeAcres.'
  ),
  qualitativeAssessment: z
    .string()
    .describe(
      'A qualitative assessment of the farms carbon negativity, in one sentence.'
    ),
});
export type CarbonNegativityMetricOutput = z.infer<typeof CarbonNegativityMetricOutputSchema>;

export async function generateCarbonNegativityMetric(
  input: CarbonNegativityMetricInput
): Promise<CarbonNegativityMetricOutput> {
  return carbonNegativityMetricFlow(input);
}

const carbonNegativityMetricPrompt = ai.definePrompt({
  name: 'carbonNegativityMetricPrompt',
  input: {schema: CarbonNegativityMetricInputSchema},
  output: {schema: CarbonNegativityMetricOutputSchema},
  prompt: `You are an expert in environmental science and sustainable agriculture. You will be provided with data about Freedom Farms Puerto Rico, a high-elevation sustainable agriculture project. Your task is to calculate and assess the farm's carbon negativity status.

Farm Size: {{farmSizeAcres}} acres
Trees Planted: {{treesPlanted}}
Average Tree Carbon Sequestration: {{averageTreeCarbonSequestrationKgPerYear}} kg/year
Farm Emissions: {{farmEmissionsKgPerYear}} kg/year

Calculate the total carbon sequestration of the farm per year (carbonSequestrationKgPerYear). Calculate the net carbon impact of the farm per year (netCarbonImpactKgPerYear) by subtracting farm emissions from total carbon sequestration. Calculate the carbon negativity score (carbonNegativityScore) by dividing the net carbon impact by the farm size. Provide a qualitative assessment of the farm's carbon negativity status in one sentence.  This assessment should be positive and encouraging, highlighting the farm's contribution to carbon reduction. DO NOT output anything other than the data requested in the output schema.`,
});

const carbonNegativityMetricFlow = ai.defineFlow(
  {
    name: 'carbonNegativityMetricFlow',
    inputSchema: CarbonNegativityMetricInputSchema,
    outputSchema: CarbonNegativityMetricOutputSchema,
  },
  async input => {
    const {
      farmSizeAcres,
      treesPlanted,
      averageTreeCarbonSequestrationKgPerYear,
      farmEmissionsKgPerYear,
    } = input;

    // Calculate total carbon sequestration
    const carbonSequestrationKgPerYear = treesPlanted * averageTreeCarbonSequestrationKgPerYear;

    // Calculate net carbon impact
    const netCarbonImpactKgPerYear = carbonSequestrationKgPerYear - farmEmissionsKgPerYear;

    // Calculate carbon negativity score
    const carbonNegativityScore = netCarbonImpactKgPerYear / farmSizeAcres;

    const {output} = await carbonNegativityMetricPrompt({
      ...input,
      carbonSequestrationKgPerYear,
      netCarbonImpactKgPerYear,
      carbonNegativityScore,
    });
    return output!;
  }
);
