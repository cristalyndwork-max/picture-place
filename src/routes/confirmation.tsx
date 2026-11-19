import { createFileRoute, Link } from "@tanstack/react-router";
import { Header, Footer, Seal } from "@/components/studio/Chrome";
import { EVENT, googleCalendarUrl, icsContent } from "@/lib/event";
import tray from "@/assets/cookies-tray.jpg.asset.json";

export const Route = createFileRoute("/confirmation")({
  validateSearch: (s: Record<string, unknown>) => ({ name: typeof s["name"] === "string" ? s["name"].slice(0, 60) : "", connected: s["connected"] === true || s["connected"] === "true" }),
  head: () => ({
    meta: [
      { title: "You're on the list — The Baker's Table" },
      { name: "description", content: "Your next steps for The Baker's Table free baking masterclass." },
      { property: "og:title", content: "Next steps — The Baker's Table" },
      { property: "og:description", content: "Save the date and check your inbox for class details." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Confirmation,
});

function Confirmation() {
  const { name, connected } = Route.useSearch();
  const gcal = googleCalendarUrl();
  const ics = icsContent();
  const downloadIcs = () => { if (!ics) return; const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([ics], { type: "text/calendar" })); a.download = "bakers-table.ics"; a.click(); };
  return (
    <div>
      <Header />
      <main className="mx-auto grid max-w-[1400px] gap-14 px-6 py-16 md:grid-cols-12 md:px-12 md:py-24">
        <div className="md:col-span-6">
          {!connected && (
            <p role="status" className="mb-10 border-l-2 border-primary bg-card px-5 py-4 text-sm">
              Preview mode: the registration form isn't connected yet, so your details were not saved and no email was sent.
            </p>
          )}
          <p className="eyebrow rise">{connected ? "You're on the list" : "Next steps"}</p>
          <h1 className="rise mt-6 text-6xl md:text-8xl" style={{ animationDelay: "120ms" }}>
            {name ? <>Thank you, <em>{name}.</em></> : <>A seat, <em>set aside.</em></>}
          </h1>
          <p className="rise mt-8 max-w-md font-display text-2xl text-cocoa" style={{ animationDelay: "240ms" }}>Pull up a chair—here's what to do before class.</p>

          <dl className="mt-12 grid max-w-md grid-cols-2 gap-6">
            <div className="rule pt-3"><dt className="eyebrow text-accent">Date</dt><dd className="mt-1 font-display text-2xl text-cocoa">{EVENT.dateLabel}</dd></div>
            <div className="rule pt-3"><dt className="eyebrow text-accent">Time</dt><dd className="mt-1 font-display text-2xl text-cocoa">{EVENT.timeLabel}</dd></div>
          </dl>

          <ol className="mt-12 max-w-md space-y-6">
            <li className="rule grid grid-cols-[2.5rem_minmax(0,1fr)] pt-5"><span className="font-display italic text-primary">i.</span><p><strong className="font-medium">Check your inbox.</strong> Your class link and details arrive by email once registration is live. Look in Promotions or Spam if you don't see it.</p></li>
            <li className="rule grid grid-cols-[2.5rem_minmax(0,1fr)] pt-5"><span className="font-display italic text-primary">ii.</span><p><strong className="font-medium">Save the date.</strong> Add the class to your calendar so it doesn't slip by.</p></li>
            <li className="rule grid grid-cols-[2.5rem_minmax(0,1fr)] pt-5"><span className="font-display italic text-primary">iii.</span><p><strong className="font-medium">Bring a notebook.</strong> Baking along is welcome, never required.</p></li>
          </ol>

          <div className="mt-12 flex flex-wrap items-center gap-6">
            {/* GHL: calendar buttons activate once EVENT.startISO/endISO are set in src/lib/event.ts */}
            {gcal ? <a href={gcal} target="_blank" rel="noreferrer" className="btn-studio">Save the event <span aria-hidden>→</span></a>
                  : <button disabled className="btn-studio" title="Available once the date is confirmed">Save the event</button>}
            <button onClick={downloadIcs} disabled={!ics} className="link-underline eyebrow disabled:opacity-50">Apple / Outlook (.ics)</button>
          </div>
          {!gcal && <p className="mt-3 text-xs text-muted-foreground">Calendar saving becomes available once the organizer confirms the date.</p>}
          <p className="mt-12"><Link to="/webinar" className="link-underline eyebrow">Preview the class room →</Link></p>
        </div>
        <div className="relative md:col-span-5 md:col-start-8">
          <div className="mask-reveal aspect-[3/4]"><img src={tray.url} alt="Fresh chocolate chip cookies cooling on a tray" className="h-full w-full object-cover" /></div>
          <Seal className="absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-background p-1 text-cocoa" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
