import { useEffect, useRef, type ReactNode, type ElementType } from "react";
export function Reveal({ children, as: Tag = "div", className = "", delay = 0 }: { children: ReactNode; as?: ElementType; className?: string; delay?: number }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([en]) => { if (en?.isIntersecting) { el.classList.add("is-in"); io.disconnect(); } }, { threshold: 0.15 });
    io.observe(el); return () => io.disconnect();
  }, []);
  return <Tag ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</Tag>;
}
export function Parallax({ src, alt, className = "", strength = 40 }: { src: string; alt: string; className?: string; strength?: number }) {
  const ref = useRef<HTMLImageElement>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || window.innerWidth < 768) return;
    let raf = 0;
    const on = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(() => {
      const el = ref.current; if (!el) return; const r = el.parentElement!.getBoundingClientRect();
      const p = (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight;
      el.style.transform = `translateY(${p * -strength}px) scale(1.08)`; }); };
    on(); window.addEventListener("scroll", on, { passive: true }); return () => window.removeEventListener("scroll", on);
  }, [strength]);
  return <div className={`overflow-hidden ${className}`}><img ref={ref} src={src} alt={alt} loading="lazy" className="h-full w-full scale-[1.08] object-cover will-change-transform" /></div>;
}
