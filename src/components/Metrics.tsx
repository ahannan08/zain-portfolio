"use client";

import { useEffect, useRef, useState } from "react";
import type { SiteContent } from "@/types/site";
import { Container } from "@/components/Container";
import { useCountUp } from "@/lib/useCountUp";

type Props = {
  metrics: SiteContent["metrics"];
};

function Stat({
  value,
  suffix,
  label,
}: SiteContent["metrics"]["items"][number]) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          io.unobserve(el);
        }
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const display = useCountUp(value, suffix, active);

  return (
    <div ref={ref}>
      <strong className="block font-display text-[clamp(48px,6vw,72px)] leading-none font-bold tracking-tight text-stat">
        {display}
      </strong>
      <span className="text-stat-label">{label}</span>
    </div>
  );
}

export function Metrics({ metrics }: Props) {
  return (
    <section className="bg-text py-24 text-bg max-[820px]:py-16" aria-label={metrics.ariaLabel}>
      <Container>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-8">
          {metrics.items.map((item) => (
            <Stat key={item.label} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
