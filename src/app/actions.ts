"use server";

import {
  generateCarbonNegativityMetric,
  type CarbonNegativityMetricInput,
  type CarbonNegativityMetricOutput,
} from "@/ai/flows/display-dynamic-carbon-negativity-metric";
import { z } from "zod";

export async function getCarbonMetric(
  input: CarbonNegativityMetricInput
): Promise<CarbonNegativityMetricOutput> {
  try {
    const result = await generateCarbonNegativityMetric(input);
    return result;
  } catch (error) {
    console.error("Error generating carbon metric:", error);
    throw new Error(
      "Failed to generate carbon metric. The AI model may be temporarily unavailable."
    );
  }
}

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the errors below.",
      success: false,
    };
  }
  
  // In a real app, you would send an email, save to a DB, etc.
  console.log("New contact form submission:", validatedFields.data);

  return {
    message: "Thank you! Your message has been sent successfully.",
    success: true,
    errors: {},
  };
}
