
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getFirestoreAdmin } from "@/firebase/admin";

export const runtime = "nodejs";

// 1) Define schemas per form
const ContactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
});

const EventRegistrationSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  eventId: z.string(),
});

// 2) Registry
const FORM_REGISTRY = {
  contact: {
    schema: ContactSchema,
    webhookEnv: "SLACK_WEBHOOK_CONTACT",
    title: "New Contact Inquiry",
  },
  eventRegistration: {
    schema: EventRegistrationSchema,
    webhookEnv: "SLACK_WEBHOOK_EVENT_REGISTRATION",
    title: "New Event Registration",
  },
} as const;

type FormType = keyof typeof FORM_REGISTRY;

function toBlocks(title: string, type: string, data: Record<string, unknown>, meta: Record<string, string | undefined>) {
  const fields = Object.entries(data).map(([k, v]) => ({
    type: "mrkdwn",
    text: `*${k}:*\n${String(v ?? "")}`,
  }));
  return [
    { type: "header", text: { type: "plain_text", text: title } },
    { type: "context", elements: [{ type: "mrkdwn", text: `Type: \`${type}\`` }] },
    { type: "section", fields },
    {
      type: "context",
      elements: [
        { type: "mrkdwn", text: `🌐 ${meta.url ?? "unknown"}` },
        { type: "mrkdwn", text: `🕒 ${meta.ts}` },
        { type: "mrkdwn", text: `🖥️ ${meta.ua?.slice(0, 60) ?? "unknown"}` },
        { type: "mrkdwn", text: `📍 ${meta.ip ?? "unknown"}` },
      ],
    },
  ];
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const type = body?.type as FormType;

    if (!type || !(type in FORM_REGISTRY)) {
      return NextResponse.json({ error: "Unknown form type" }, { status: 400 });
    }

    const cfg = FORM_REGISTRY[type];
    const parsed = cfg.schema.safeParse(body?.data ?? {});
    if (!parsed.success) {
      return NextResponse.json({ error: "Validation failed", issues: parsed.error.flatten() }, { status: 422 });
    }

    const webhook =
      process.env[cfg.webhookEnv] || process.env["SLACK_WEBHOOK_DEFAULT"];
    if (webhook) {
      // light metadata
      const meta = {
        url: req.headers.get("referer") ?? undefined,
        ip: req.headers.get("x-forwarded-for")?.split(",")[0],
        ua: req.headers.get("user-agent") ?? undefined,
        ts: new Date().toISOString(),
      };

      const payload = { blocks: toBlocks(cfg.title, type, parsed.data, meta) };

      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const text = await res.text();
        console.warn(`Slack webhook failed with status ${res.status}: ${text}`);
      }
    }


    // Also save to firestore as a backup
    try {
        const firestore = getFirestoreAdmin();
        const submissionsRef = firestore.collection("formSubmissions");

        const metaForFirestore = {
            url: req.headers.get("referer") ?? undefined,
            ip: req.headers.get("x-forwarded-for")?.split(",")[0],
            userAgent: req.headers.get("user-agent") ?? undefined,
        };

        await submissionsRef.add({
            type,
            data: parsed.data,
            submissionDate: new Date().toISOString(),
            metadata: metaForFirestore,
        });
    } catch (e: any) {
        console.error("Firestore write failed:", e);
        // We don't want to fail the whole request if only Firestore fails
        // but we should log it.
    }


    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message ?? "Server error" }, { status: 500 });
  }
}
