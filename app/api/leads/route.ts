import { NextResponse } from "next/server";

const appsScriptEndpoint = process.env.GOOGLE_APPS_SCRIPT_ENDPOINT;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type LeadPayload = {
  form_type?: string;
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  message?: string;
  origin?: string;
  data_consent?: string;
  website?: string;
};

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  if (!appsScriptEndpoint) {
    return NextResponse.json(
      { ok: false, error: "service_not_configured" },
      { status: 503 }
    );
  }

  let payload: LeadPayload;

  try {
    payload = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "invalid_json" },
      { status: 400 }
    );
  }

  const formType = clean(payload.form_type, 20);
  const email = clean(payload.email, 254).toLowerCase();
  const consent = clean(payload.data_consent, 20);
  const honeypot = clean(payload.website, 200);

  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  if (
    !["contact", "portfolio"].includes(formType) ||
    !emailPattern.test(email) ||
    consent !== "accepted"
  ) {
    return NextResponse.json(
      { ok: false, error: "invalid_request" },
      { status: 400 }
    );
  }

  const params = new URLSearchParams({
    form_type: formType,
    email,
    data_consent: consent,
    origin: clean(payload.origin, 150),
    website: "",
  });

  if (formType === "contact") {
    const name = clean(payload.name, 120);
    const phone = clean(payload.phone, 50);
    const message = clean(payload.message, 4000);

    if (!name || !phone || !message) {
      return NextResponse.json(
        { ok: false, error: "missing_contact_fields" },
        { status: 400 }
      );
    }

    params.set("name", name);
    params.set("phone", phone);
    params.set("company", clean(payload.company, 160));
    params.set("message", message);
  }

  try {
    const response = await fetch(appsScriptEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: params,
      redirect: "follow",
      signal: AbortSignal.timeout(12_000),
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Apps Script returned ${response.status}`);
    }

    const result = (await response.json()) as { ok?: boolean };

    if (!result.ok) {
      throw new Error("Apps Script rejected the lead");
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "submission_failed" },
      { status: 502 }
    );
  }
}
