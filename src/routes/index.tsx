import { createFileRoute, Link } from "@tanstack/react-router";
import { Header, Footer, Seal } from "@/components/studio/Chrome";
import { Reveal, Parallax } from "@/components/studio/Reveal";
import { RegisterForm } from "@/components/studio/RegisterForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import board from "@/assets/ingredients-board.jpg.asset.json";
import tray from "@/assets/cookies-tray.jpg.asset.json";
import dough from "@/assets/cookie-dough.jpg.asset.json";
import piping from "@/assets/piping-lesson.jpg.asset.json";
import table from "@/assets/class-table.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Baker's Table — Free Baking Masterclass | The Flour Studio" },
      { name: "description", content: "Join a free 60-minute online masterclass for home bakers: master the basics and explore your first steps toward a baking business." },
      { property: "og:title", content: "The Baker's Table — Free Baking Masterclass" },
      { property: "og:description", content: "A little flour. A lot of possibility. Save your free seat." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const problems = [
  ["01", "The guesswork", "Why does the same recipe turn out differently every time?"],
  ["02", "The confidence gap", "How do you know when your bakes are ready to share—or sell?"],
  ["03", "The starting point", "What should you focus on first if you want to turn baking into a small business?"],
];
const outcomes = [
  ["01", "Build Your Foundation", "Understand the essential techniques behind reliable baking results."],
  ["02", "Bake With Consistency", "Learn practical habits for improving texture, timing, and presentation."],
  ["03", "Find Your Signature Bake", "Discover how to choose a focused set of products to practice and develop."],
  ["04", "Explore Your First Sale", "Learn the basic considerations behind costing, pricing, and preparing to sell."],
];
const faqs = [
  ["Is the masterclass really free?", "Yes. The live class costs nothing to attend. At the end, Clara will briefly mention a paid course for those who want to go further—there's no obligation."],
  ["Do I need baking experience?", "No. The class is beginner-friendly, and intermediate bakers will find useful habits to sharpen their results."],
  ["What equipment do I need?", "Just a device with internet access and a notebook. You're welcome to bake along, but it isn't required."],
  ["How long is the class?", "About 60 minutes, including a short Q&A. The exact schedule will be confirmed by the organizer by email."],
  ["Will there be a replay?", "Replay availability will be confirmed by the organizer. Attending live is the best way to ask questions."],
] as const;

function Index() {
  return (
    <div className="overflow-x-hidden">
      <Header />

      {/* HERO */}
      <section className="relative mx-auto grid max-w-[1400px] gap-10 px-6 pb-24 pt-6 md:grid-cols-12 md:px-12 md:pt-12">
        <div className="relative z-10 md:col-span-6 md:pt-16">
          <p className="eyebrow rise">The Flour Studio presents</p>
          <h1 className="mt-6 text-[3.4rem] sm:text-7xl lg:text-[6.6rem]">
            <span className="rise block" style={{ animationDelay: "120ms" }}>A Little Flour.</span>
            <span className="rise block italic md:-mr-40 md:text-right lg:-mr-56" style={{ animationDelay: "260ms" }}>A Lot of Possibility.</span>
          </h1>
          <p className="rise mt-10 max-w-md font-display text-2xl leading-snug text-cocoa" style={{ animationDelay: "420ms" }}>
            Learn to bake with confidence—and turn what you love into something worth sharing.
          </p>
          <p className="rise mt-5 max-w-md text-[0.97rem] leading-relaxed text-muted-foreground" style={{ animationDelay: "520ms" }}>
            Join <em>The Baker's Table</em>, a free 60-minute online masterclass for home bakers ready to make beautiful bakes, master the basics, and explore their first steps toward a baking business.
          </p>
          <div className="rise mt-10" style={{ animationDelay: "640ms" }}>
            <a href="#register" className="btn-studio">Save my free seat <span aria-hidden>→</span></a>
            <p className="mt-4 text-xs tracking-wide text-muted-foreground">Free online class · Beginner-friendly · Limited session capacity</p>
          </div>
        </div>
        <div className="relative md:col-span-6 md:col-start-7">
          <div className="mask-reveal relative aspect-[4/5] md:aspect-[2/3]">
            <img src={board.url} alt="Baking ingredients laid out on a wooden board: flour, brown sugar, butter, eggs and chocolate" className="h-full w-full object-cover" />
          </div>
          <Seal className="absolute -left-8 bottom-10 h-28 w-28 rounded-full bg-background p-1 text-cocoa md:-left-14 md:h-32 md:w-32" />
          <p className="absolute -bottom-8 right-0 font-display text-lg italic text-accent">— everything begins here</p>
        </div>
      </section>

      {/* RELATE */}
      <section className="bg-card">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-6 py-28 md:grid-cols-12 md:px-12">
          <div className="md:col-span-5">
            <Parallax src={tray.url} alt="A tray of freshly baked chocolate chip cookies on parchment" className="aspect-[3/4]" />
            <p className="mt-3 text-xs text-muted-foreground">Fig. 1 — The batch your friends keep asking about.</p>
          </div>
          <div className="md:col-span-6 md:col-start-7 md:pt-12">
            <Reveal><p className="eyebrow">For the love of baking</p></Reveal>
            <Reveal delay={100}><h2 className="mt-5 text-5xl md:text-6xl">You know the joy of baking.<br /><em>Now imagine what comes next.</em></h2></Reveal>
            <Reveal delay={200}><p className="mt-8 max-w-lg leading-relaxed text-muted-foreground">You've saved the recipes. Watched the tutorials. Maybe even baked a few things your friends keep asking for. But knowing what to practice, how to get consistent results, and where to begin selling can feel like a recipe with half the instructions missing.</p></Reveal>
            <div className="mt-14">
              {problems.map(([n, t, q], i) => (
                <Reveal key={n} delay={i * 120} className="rule grid grid-cols-[3rem_minmax(0,1fr)] gap-4 py-7">
                  <span className="font-display text-xl italic text-primary">{n}</span>
                  <div><p className="eyebrow text-accent">{t}</p><p className="mt-2 font-display text-2xl leading-snug text-cocoa">“{q}”</p></div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
        <Reveal className="mx-auto max-w-4xl px-6 pb-28 text-center">
          <p className="font-display text-3xl leading-snug text-cocoa md:text-4xl">You don't need a professional kitchen to begin. <em className="text-primary">You need a better starting point.</em></p>
        </Reveal>
      </section>

      {/* INSPIRE */}
      <section className="mx-auto max-w-[1400px] px-6 py-28 md:px-12">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5 md:sticky md:top-10 md:self-start">
            <Reveal><p className="eyebrow">Inside the masterclass</p></Reveal>
            <Reveal delay={100}><h2 className="mt-5 text-5xl md:text-7xl">One hour.<br /><em>A fresh way to begin.</em></h2></Reveal>
            <Reveal delay={200} className="zoom-wrap mt-10 hidden aspect-square md:block"><img src={dough.url} alt="Chocolate chunk cookie dough in a scalloped bowl with butter, eggs and flour" loading="lazy" className="h-full w-full object-cover" /></Reveal>
          </div>
          <ol className="md:col-span-6 md:col-start-7">
            {outcomes.map(([n, t, d], i) => (
              <Reveal as="li" key={n} delay={i * 80} className="rule grid grid-cols-[minmax(0,1fr)] gap-3 py-10 sm:grid-cols-[6rem_minmax(0,1fr)]">
                <span className="font-display text-6xl leading-none text-primary/70">{n}</span>
                <div><h3 className="text-3xl">{t}</h3><p className="mt-3 max-w-md leading-relaxed text-muted-foreground">{d}</p></div>
              </Reveal>
            ))}
            <div className="rule pt-10"><a href="#register" className="btn-studio">I want a seat at the table <span aria-hidden>→</span></a></div>
          </ol>
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section className="mx-auto grid max-w-[1400px] grid-cols-12 gap-4 px-6 pb-28 md:px-12">
        <div className="zoom-wrap col-span-12 aspect-[16/9] md:col-span-8"><img src={table.url} alt="Students decorating small cakes together at a long studio table" loading="lazy" className="h-full w-full object-cover object-[50%_35%]" /></div>
        <div className="col-span-12 flex flex-col justify-end md:col-span-4">
          <p className="font-display text-3xl italic leading-snug text-cocoa">“Good things begin from scratch.”</p>
          <p className="eyebrow mt-4 text-accent">The studio, on a Saturday morning</p>
        </div>
      </section>

      {/* INSTRUCTOR */}
      <section className="bg-card">
        <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-6 py-28 md:grid-cols-12 md:px-12">
          <div className="md:col-span-6 md:col-start-7 md:row-start-1">
            {/* Portrait placeholder — replace with Clara's photo. */}
            <Parallax src={piping.url} alt="Instructor guiding a student as she pipes cream onto a small cake" className="aspect-square" strength={30} />
            <p className="mt-3 text-xs text-muted-foreground">Portrait placeholder — replace with instructor photo.</p>
          </div>
          <div className="md:col-span-5 md:row-start-1">
            <Reveal><p className="eyebrow">Your instructor</p></Reveal>
            <Reveal delay={100}><h2 className="mt-5 text-5xl md:text-6xl">Meet the baker <em>behind the table.</em></h2></Reveal>
            <Reveal delay={200}>
              <p className="mt-10 font-display text-3xl text-cocoa">Clara Bennett</p>
              <p className="eyebrow mt-2 text-accent">Baking Educator & Founder, The Flour Studio</p>
              <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">Clara believes that good baking starts with curiosity, patience, and a willingness to get your hands a little messy. At The Flour Studio, she helps home bakers develop practical skills and find their own rhythm in the kitchen.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* REGISTER */}
      <section id="register" className="mx-auto grid max-w-[1400px] gap-14 px-6 py-28 md:grid-cols-12 md:px-12">
        <div className="md:col-span-5">
          <Reveal><p className="eyebrow">Free registration</p></Reveal>
          <Reveal delay={100}><h2 className="mt-5 text-6xl md:text-7xl">Your seat <em>is waiting.</em></h2></Reveal>
          <Reveal delay={200}><p className="mt-8 max-w-sm font-display text-2xl leading-snug text-cocoa">A good bake starts with the right ingredients. Your next chapter starts with one free class.</p></Reveal>
          <dl className="mt-12 grid max-w-sm grid-cols-2 gap-6 text-sm">
            <div className="rule pt-3"><dt className="eyebrow text-accent">Length</dt><dd className="mt-1">60 minutes</dd></div>
            <div className="rule pt-3"><dt className="eyebrow text-accent">Where</dt><dd className="mt-1">Online</dd></div>
            <div className="rule pt-3"><dt className="eyebrow text-accent">Cost</dt><dd className="mt-1">Free</dd></div>
            <div className="rule pt-3"><dt className="eyebrow text-accent">Date</dt><dd className="mt-1">To be confirmed</dd></div>
          </dl>
        </div>
        <div className="border border-border bg-background p-8 md:col-span-6 md:col-start-7 md:p-12">
          <RegisterForm />
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto grid max-w-[1400px] gap-12 px-6 pb-28 md:grid-cols-12 md:px-12">
        <div className="md:col-span-4"><Reveal><p className="eyebrow">Questions</p><h2 className="mt-5 text-5xl">Before you <em>join us.</em></h2></Reveal></div>
        <Accordion type="single" collapsible className="md:col-span-7 md:col-start-6">
          {faqs.map(([q, a]) => (
            <AccordionItem key={q} value={q} className="border-border">
              <AccordionTrigger className="py-6 text-left font-display text-2xl font-normal text-cocoa hover:no-underline">{q}</AccordionTrigger>
              <AccordionContent className="max-w-lg pb-6 text-base leading-relaxed text-muted-foreground">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
      <div className="pb-16 text-center"><Link to="/course" className="link-underline eyebrow">Curious about the full course?</Link></div>
      <Footer />
    </div>
  );
}
