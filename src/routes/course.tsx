import { createFileRoute } from "@tanstack/react-router";
import { Header, Footer } from "@/components/studio/Chrome";
import { Reveal, Parallax } from "@/components/studio/Reveal";
import dough from "@/assets/cookie-dough.jpg.asset.json";
import board from "@/assets/ingredients-board.jpg.asset.json";

export const Route = createFileRoute("/course")({
  head: () => ({
    meta: [
      { title: "The Studio Course — Beyond the Baker's Table | The Flour Studio" },
      { name: "description", content: "The full Flour Studio course: deeper technique, a signature menu, and practical steps toward selling your bakes." },
      { property: "og:title", content: "The Studio Course — The Flour Studio" },
      { property: "og:description", content: "Continue past the free class with a guided baking course." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Course,
});

const modules = [
  ["Module I", "The Baker's Method", "Ingredients, ratios, and the habits behind dependable bakes."],
  ["Module II", "Doughs & Batters", "Cookies, enriched doughs, and simple cakes—practiced until they're second nature."],
  ["Module III", "Finish & Presentation", "Texture, decoration, and photographing your work honestly and beautifully."],
  ["Module IV", "Your Signature Menu", "Choosing a small, focused set of bakes you can make well, again and again."],
  ["Module V", "From Kitchen to Customer", "Costing, pricing basics, packaging, and preparing for your first orders."],
];

function Course() {
  return (
    <div>
      <Header />
      <section className="mx-auto grid max-w-[1400px] gap-12 px-6 pb-24 pt-10 md:grid-cols-12 md:px-12">
        <div className="md:col-span-6 md:pt-10">
          <p className="eyebrow rise">Beyond the free class</p>
          <h1 className="rise mt-6 text-6xl md:text-8xl" style={{ animationDelay: "120ms" }}>The Studio <em>Course.</em></h1>
          <p className="rise mt-8 max-w-md font-display text-2xl text-cocoa" style={{ animationDelay: "240ms" }}>The masterclass opens the door. The course walks you through the kitchen, step by step.</p>
          <p className="rise mt-5 max-w-md leading-relaxed text-muted-foreground" style={{ animationDelay: "340ms" }}>A guided programme for home bakers who want deeper technique, a focused menu, and a practical, unhurried path toward selling what they make.</p>
        </div>
        <div className="mask-reveal aspect-[4/5] md:col-span-5 md:col-start-8"><img src={dough.url} alt="Cookie dough being mixed with a pink spatula" className="h-full w-full object-cover" /></div>
      </section>

      <section className="bg-card">
        <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-12">
          <Reveal><p className="eyebrow">Curriculum preview</p><h2 className="mt-5 text-5xl md:text-6xl">Five chapters, <em>one rhythm.</em></h2></Reveal>
          <ol className="mt-14">
            {modules.map(([n, t, d], i) => (
              <Reveal as="li" key={n} delay={i * 70} className="rule grid gap-2 py-8 md:grid-cols-[10rem_minmax(0,1fr)_minmax(0,1.2fr)] md:gap-8">
                <span className="eyebrow text-accent">{n}</span>
                <h3 className="text-3xl">{t}</h3>
                <p className="leading-relaxed text-muted-foreground">{d}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1400px] items-center gap-14 px-6 py-28 md:grid-cols-12 md:px-12">
        <Parallax src={board.url} alt="Ingredients ready on a wooden board" className="aspect-[3/4] md:col-span-5" />
        <div className="md:col-span-6 md:col-start-7">
          <p className="eyebrow">Enrolment</p>
          <h2 className="mt-5 text-5xl md:text-6xl">Join the <em>next cohort.</em></h2>
          <div className="rule mt-10 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-6 pt-6">
            <div><p className="eyebrow text-accent">Investment</p><p className="mt-2 font-display text-4xl text-cocoa">Price to be announced</p></div>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">Pricing, cohort dates and format will be confirmed by The Flour Studio.</p>
          {/* GHL: link this button to the order form / payment checkout once created. */}
          <button disabled className="btn-studio mt-10" title="Enrolment opens once checkout is connected">Enrol in the course <span aria-hidden>→</span></button>
          <p className="mt-3 text-xs text-muted-foreground">Enrolment opens soon — checkout isn't connected yet.</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
