import { useEffect, useRef, useState } from "react";

// Revela elementos marcados con data-reveal cuando entran en viewport.
export function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) => entry.isIntersecting && entry.target.classList.add("is-visible"),
        ),
      { threshold: 0.14 },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}

export function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) return;
      const started = performance.now();
      const run = (now: number) => {
        const progress = Math.min((now - started) / 1000, 1);
        setCount(Math.round(value * (1 - Math.pow(1 - progress, 3))));
        if (progress < 1) frame = requestAnimationFrame(run);
      };
      frame = requestAnimationFrame(run);
      observer.disconnect();
    });
    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);
  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function SectionIntro({
  eyebrow,
  title,
  copy,
  light = false,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  light?: boolean;
}) {
  return (
    <div data-reveal className={`reveal max-w-3xl ${light ? "text-primary-foreground" : ""}`}>
      <p className={`section-kicker ${light ? "text-brand-orange-light" : ""}`}>{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">{title}</h2>
      {copy && (
        <p
          className={`mt-5 max-w-2xl text-base leading-7 ${light ? "text-primary-foreground/72" : "text-muted-foreground"}`}
        >
          {copy}
        </p>
      )}
    </div>
  );
}
