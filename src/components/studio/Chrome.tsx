import { Link } from "@tanstack/react-router";
export function Seal({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-label="Made from scratch seal" role="img">
      <defs><path id="sealc" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" /></defs>
      <circle cx="60" cy="60" r="57" fill="none" stroke="currentColor" strokeWidth=".8" />
      <circle cx="60" cy="60" r="31" fill="none" stroke="currentColor" strokeWidth=".6" />
      <text fontSize="11" letterSpacing="4.2" fill="currentColor" fontFamily="DM Sans"><textPath href="#sealc">MADE FROM SCRATCH · MADE FROM SCRATCH ·</textPath></text>
      <text x="60" y="68" textAnchor="middle" fontSize="22" fontStyle="italic" fill="currentColor" fontFamily="Cormorant Garamond">FS</text>
    </svg>
  );
}
export function Header() {
  return (
    <header className="mx-auto grid max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-center gap-6 px-6 py-6 md:px-12">
      <Link to="/" className="min-w-0 truncate font-display text-xl tracking-[0.18em] text-cocoa">THE FLOUR STUDIO</Link>
      <nav className="flex items-center gap-6 text-[0.7rem] uppercase tracking-[0.22em]">
        <Link to="/course" className="link-underline hidden sm:inline-block">The Course</Link>
        <a href="/#register" className="link-underline text-primary">Save a seat</a>
      </nav>
    </header>
  );
}
export function Footer() {
  return (
    <footer className="bg-cocoa text-primary-foreground">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-20 md:grid-cols-[1.4fr_1fr] md:px-12">
        <div>
          <p className="font-display text-3xl tracking-[0.18em]">THE FLOUR STUDIO</p>
          <p className="mt-4 font-display text-2xl italic opacity-80">Made with patience. Shared with love.</p>
        </div>
        <ul className="grid grid-cols-2 gap-4 self-end text-[0.7rem] uppercase tracking-[0.22em] opacity-85">
          {/* GHL: replace each "#" with the real page once created. */}
          <li><a href="#" aria-label="Privacy Policy (page coming soon)" className="link-underline">Privacy Policy</a><span className="block normal-case tracking-normal opacity-60">Page coming soon</span></li>
          <li><a href="#" aria-label="Terms (page coming soon)" className="link-underline">Terms</a><span className="block normal-case tracking-normal opacity-60">Page coming soon</span></li>
          <li><a href="#" aria-label="Contact (details coming soon)" className="link-underline">Contact</a><span className="block normal-case tracking-normal opacity-60">Email to be added</span></li>
          <li><a href="#" aria-label="Instagram (handle coming soon)" className="link-underline">Instagram</a><span className="block normal-case tracking-normal opacity-60">Handle to be added</span></li>
        </ul>
      </div>
      <p className="mx-auto max-w-[1400px] px-6 pb-8 text-xs opacity-50 md:px-12">A portfolio demonstration. The Flour Studio is a fictional brand.</p>
    </footer>
  );
}
