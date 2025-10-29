
"use server";

import {
  generateCarbonNegativityMetric,
  type CarbonNegativityMetricInput,
  type CarbonNegativityMetricOutput,
} from "@/ai/flows/display-dynamic-carbon-negativity-metric";
import { getFirestoreAdmin } from "@/firebase/admin";
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

const careerApplicationSchema = z.object({
  applicantName: z.string().min(2, "Name must be at least 2 characters."),
  applicantEmail: z.string().email("Please enter a valid email address."),
  positionAppliedFor: z.string(),
  resumeUrl: z.string().url("Please enter a valid URL for your resume."),
  coverLetter: z.string().optional(),
});

export async function submitCareerApplication(
  prevState: any,
  formData: FormData
) {
  const validatedFields = careerApplicationSchema.safeParse({
    applicantName: formData.get("applicantName"),
    applicantEmail: formData.get("applicantEmail"),
    positionAppliedFor: formData.get("positionAppliedFor"),
    resumeUrl: formData.get("resumeUrl"),
    coverLetter: formData.get("coverLetter"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the errors below.",
      success: false,
    };
  }
  
  const firestore = getFirestoreAdmin();
  const applicationsRef = firestore.collection("career_applications");

  try {
    await applicationsRef.add({
      ...validatedFields.data,
      submissionDate: new Date().toISOString(),
    });

    return {
      message: "Thank you for your application! We will be in touch shortly.",
      success: true,
      errors: {},
    };
  } catch (error) {
    console.error("Error saving career application:", error);
    const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred.";
    return {
      message: `An unexpected error occurred: ${errorMessage}`,
      success: false,
      errors: {},
    };
  }
}
