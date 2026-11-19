// GHL: replace these with the real session details once the organizer confirms them.
export const EVENT = {
  title: "The Baker's Table — Free Masterclass by The Flour Studio",
  // ISO strings; leave null until confirmed. Calendar buttons stay disabled while null.
  startISO: null as string | null,
  endISO: null as string | null,
  dateLabel: "Date to be confirmed",
  timeLabel: "Time to be confirmed",
  location: "Online — link sent by email",
  description: "A free 60-minute online baking masterclass with Clara Bennett.",
};

const fmt = (iso: string) => new Date(iso).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");

export function googleCalendarUrl() {
  if (!EVENT.startISO || !EVENT.endISO) return null;
  const p = new URLSearchParams({ action: "TEMPLATE", text: EVENT.title, dates: `${fmt(EVENT.startISO)}/${fmt(EVENT.endISO)}`, details: EVENT.description, location: EVENT.location });
  return `https://calendar.google.com/calendar/render?${p}`;
}

export function icsContent() {
  if (!EVENT.startISO || !EVENT.endISO) return null;
  return ["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//The Flour Studio//EN","BEGIN:VEVENT",`UID:bakers-table@flourstudio`,`DTSTAMP:${fmt(new Date().toISOString())}`,`DTSTART:${fmt(EVENT.startISO)}`,`DTEND:${fmt(EVENT.endISO)}`,`SUMMARY:${EVENT.title}`,`DESCRIPTION:${EVENT.description}`,`LOCATION:${EVENT.location}`,"END:VEVENT","END:VCALENDAR"].join("\r\n");
}

export type Registration = { firstName: string; email: string; bakeInterest?: string; consent: boolean };
export function validateRegistration(r: Registration) {
  const e: Partial<Record<keyof Registration, string>> = {};
  if (!r.firstName.trim()) e.firstName = "Please share your first name.";
  else if (r.firstName.trim().length > 60) e.firstName = "That name is a little long.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(r.email.trim())) e.email = "Please enter a valid email address.";
  if ((r.bakeInterest ?? "").length > 300) e.bakeInterest = "Keep it under 300 characters.";
  if (!r.consent) e.consent = "Please agree so we can send your class details.";
  return e;
}
