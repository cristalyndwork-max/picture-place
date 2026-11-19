import { useState, type FormEvent } from "react";
import { useNavigate } from "@tanstack/react-router";
import { validateRegistration, type Registration } from "@/lib/event";

// GHL: point this at your form webhook / GHL form endpoint. While empty, nothing is sent or saved.
const GHL_FORM_ENDPOINT = "";

export function RegisterForm() {
  const nav = useNavigate();
  const [v, setV] = useState<Registration>({ firstName: "", email: "", bakeInterest: "", consent: false });
  const [errors, setErrors] = useState<ReturnType<typeof validateRegistration>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validateRegistration(v); setErrors(errs);
    if (Object.keys(errs).length) return;
    if (!GHL_FORM_ENDPOINT) { nav({ to: "/confirmation", search: { name: v.firstName.trim(), connected: false } }); return; }
    setStatus("loading");
    try {
      const res = await fetch(GHL_FORM_ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(v) });
      if (!res.ok) throw new Error();
      nav({ to: "/confirmation", search: { name: v.firstName.trim(), connected: true } });
    } catch { setStatus("error"); }
  }

  const set = (k: keyof Registration) => (e: { target: { value: string } }) => setV({ ...v, [k]: e.target.value });

  return (
    <form id="ghl-registration-form" onSubmit={onSubmit} noValidate className="space-y-8">
      <div>
        <label htmlFor="firstName" className="eyebrow">First name</label>
        <input id="firstName" name="first_name" autoComplete="given-name" className="field" value={v.firstName} onChange={set("firstName")} aria-invalid={!!errors.firstName} aria-describedby="firstName-err" />
        {errors.firstName && <p id="firstName-err" className="mt-2 text-sm text-destructive">{errors.firstName}</p>}
      </div>
      <div>
        <label htmlFor="email" className="eyebrow">Email address</label>
        <input id="email" name="email" type="email" autoComplete="email" className="field" value={v.email} onChange={set("email")} aria-invalid={!!errors.email} aria-describedby="email-err" />
        {errors.email && <p id="email-err" className="mt-2 text-sm text-destructive">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="bake" className="eyebrow">What would you love to learn to bake? <span className="normal-case tracking-normal text-muted-foreground">(optional)</span></label>
        <textarea id="bake" name="bake_interest" rows={2} className="field resize-none" value={v.bakeInterest} onChange={set("bakeInterest")} aria-invalid={!!errors.bakeInterest} placeholder="Sourdough, laminated pastry, celebration cakes…" />
        {errors.bakeInterest && <p className="mt-2 text-sm text-destructive">{errors.bakeInterest}</p>}
      </div>
      <label className="flex items-start gap-3 text-sm text-muted-foreground">
        <input type="checkbox" name="consent" checked={v.consent} onChange={(e) => setV({ ...v, consent: e.target.checked })} className="mt-1 h-4 w-4 shrink-0 accent-primary" aria-invalid={!!errors.consent} />
        <span>I agree to receive emails from The Flour Studio about this class and related offers. Unsubscribe anytime. Your details are never sold.</span>
      </label>
      {errors.consent && <p className="-mt-5 text-sm text-destructive">{errors.consent}</p>}
      {status === "error" && <p role="alert" className="text-sm text-destructive">Something went wrong sending your registration. Please try again in a moment.</p>}
      <button type="submit" className="btn-studio w-full justify-center sm:w-auto" disabled={status === "loading"}>
        {status === "loading" ? "Reserving…" : "Reserve my free seat"} <span aria-hidden>→</span>
      </button>
    </form>
  );
}
