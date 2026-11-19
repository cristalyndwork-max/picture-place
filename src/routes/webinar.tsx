import { createFileRoute, Link } from "@tanstack/react-router";
import { Header, Footer } from "@/components/studio/Chrome";
import piping from "@/assets/piping-lesson.jpg.asset.json";
import table from "@/assets/class-table.jpg.asset.json";

export const Route = createFileRoute("/webinar")({
  head: () => ({
    meta: [
      { title: "Class Room — The Baker's Table Masterclass" },
      { name: "description", content: "Watch The Baker's Table live masterclass with Clara Bennett of The Flour Studio." },
      { property: "og:title", content: "The Baker's Table — Class Room" },
      { property: "og:description", content: "The live masterclass room for The Baker's Table." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Webinar,
});

const resources = ["Baking fundamentals worksheet", "Consistency checklist", "Signature bake planner"];

function Webinar() {
  return (
    <div>
      <Header />
      <main className="mx-auto max-w-[1400px] px-6 py-12 md:px-12">
        <p className="eyebrow">Live class room</p>
        <h1 className="mt-4 text-5xl md:text-7xl">The Baker's Table</h1>
        <div className="mt-10 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            {/* GHL: replace this block with the webinar embed (Zoom, YouTube Live, GHL Webinar, etc.) */}
            <div className="relative aspect-video overflow-hidden bg-cocoa">
              <img src={table.url} alt="" className="h-full w-full object-cover opacity-35" />
              <div className="absolute inset-0 grid place-items-center text-center text-primary-foreground">
                <div>
                  <span className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-current" aria-hidden>▶</span>
                  <p className="mt-5 eyebrow text-primary-foreground">The session will appear here</p>
                  <p className="mt-2 text-sm opacity-75">Date and time to be confirmed by the organizer.</p>
                </div>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-[4rem_minmax(0,1fr)] items-center gap-5">
              <img src={piping.url} alt="Clara Bennett" className="h-16 w-16 rounded-full object-cover object-[55%_20%]" />
              <div><p className="font-display text-2xl text-cocoa">Clara Bennett</p><p className="eyebrow text-accent">Baking Educator & Founder, The Flour Studio</p></div>
            </div>
          </div>
          <aside className="space-y-10 lg:col-span-4">
            <div>
              <p className="eyebrow">Learning resources</p>
              <ul className="mt-4">
                {resources.map((r) => (
                  <li key={r} className="rule flex items-center justify-between gap-4 py-4">
                    <span className="font-display text-xl text-cocoa">{r}</span>
                    <span className="shrink-0 text-xs text-muted-foreground">Shared during class</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card p-8">
              <p className="eyebrow">After class</p>
              <p className="mt-3 font-display text-3xl leading-tight text-cocoa">Ready to keep going? <em>Bake further with Clara.</em></p>
              <Link to="/course" className="btn-studio mt-6">See the full course <span aria-hidden>→</span></Link>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}
