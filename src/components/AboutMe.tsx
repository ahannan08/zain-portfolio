"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { SiteContent } from "@/types/site";
import { Container } from "@/components/Container";
import { cn } from "@/lib/cn";

type Props = {
  about: SiteContent["about"];
};

export function AboutMe({ about }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      aria-labelledby="about-heading"
      className="relative overflow-hidden border-y border-border bg-surface py-24 max-[820px]:py-16"
    >
      <div className="pointer-events-none absolute -left-[15%] top-1/4 h-[min(480px,55vw)] w-[min(480px,55vw)] rounded-full bg-accent/10 blur-3xl motion-reduce:blur-2xl" />
      <div className="pointer-events-none absolute -right-[10%] bottom-[10%] h-[min(360px,45vw)] w-[min(360px,45vw)] rounded-full bg-[#0E7490]/10 blur-3xl motion-reduce:blur-2xl" />

      <Container className="relative z-[1]">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div
            className={cn(
              "relative mx-auto w-full max-w-[420px] transition-[opacity,transform] duration-700 ease-out lg:mx-0 lg:max-w-none",
              visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
            )}
          >
            <div className="about-photo-frame relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border bg-tint shadow-md">
              <div className="pointer-events-none absolute -right-[20%] -bottom-[15%] h-[85%] w-[85%] rounded-full bg-gradient-to-tr from-accent/25 to-[#0E7490]/15 blur-2xl" />
              <div className="pointer-events-none absolute -top-[10%] -left-[15%] h-[60%] w-[60%] rounded-full bg-[#4D7C0F]/10 blur-2xl" />
              <div
                className="pointer-events-none absolute inset-0 animate-about-shimmer opacity-70 motion-reduce:animate-none motion-reduce:opacity-0"
                style={{
                  background:
                    "linear-gradient(115deg, transparent 35%, rgb(255 255 255 / 0.22) 50%, transparent 65%)",
                  backgroundSize: "200% 100%",
                }}
              />
              <Image
                src={about.image.src}
                alt={about.image.alt}
                fill
                className="object-cover object-center"
                sizes="(max-width:1024px) 420px, 50vw"
                priority={false}
              />
            </div>
            <div className="about-float-chip absolute -right-2 top-8 hidden rounded-full border border-border bg-bg/95 px-4 py-2 text-sm font-medium text-text shadow-sm backdrop-blur-sm sm:inline-flex lg:-right-4">
              Open to projects
            </div>
            <div className="about-float-chip2 absolute -left-1 bottom-12 rounded-2xl border border-border bg-surface/95 px-4 py-3 text-xs text-muted shadow-sm backdrop-blur-sm">
              <span className="font-display font-bold text-accent">40+</span> brands
              <span className="mx-1 text-border">·</span>
              Remote &amp; IST
            </div>
          </div>

          <div>
            <h2
              id="about-heading"
              className={cn(
                "font-display text-[clamp(30px,4vw,44px)] leading-[1.1] font-bold tracking-tight transition-[opacity,transform] duration-700 ease-out",
                visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
              )}
            >
              {about.heading}
            </h2>
            <p
              className={cn(
                "mt-3 max-w-[560px] text-lg text-muted transition-[opacity,transform] duration-700 ease-out [transition-delay:80ms]",
                visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
              )}
            >
              {about.lead}
            </p>
            <div className="mt-6 space-y-4 text-muted">
              {about.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className={cn(
                    "max-w-[560px] text-[15px] leading-relaxed transition-[opacity,transform] duration-700 ease-out",
                    visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                  )}
                  style={{ transitionDelay: `${120 + i * 60}ms` }}
                >
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {about.cards.map((card, i) => (
                <div
                  key={`${card.type}-${i}`}
                  className={cn(
                    "group rounded-2xl border border-border bg-bg p-5 shadow-sm transition-[opacity,transform,box-shadow] duration-500 ease-out hover:-translate-y-0.5 hover:border-accent/25 hover:shadow-md",
                    visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
                    card.type === "list" && "sm:col-span-2",
                  )}
                  style={{ transitionDelay: `${200 + i * 90}ms` }}
                >
                  {card.type === "stat" && <AboutStatCard card={card} />}
                  {card.type === "tags" && <AboutTagsCard card={card} />}
                  {card.type === "list" && <AboutListCard card={card} />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function AboutStatCard({ card }: { card: Extract<SiteContent["about"]["cards"][number], { type: "stat" }> }) {
  return (
    <>
      <p className="text-xs font-medium uppercase tracking-wider text-muted">{card.title}</p>
      <p className="mt-2 font-display text-3xl font-bold tracking-tight text-text transition-transform duration-300 group-hover:scale-[1.02]">
        {card.value}
      </p>
      <p className="mt-2 text-sm text-muted">{card.hint}</p>
    </>
  );
}

function AboutTagsCard({
  card,
}: {
  card: Extract<SiteContent["about"]["cards"][number], { type: "tags" }>;
}) {
  return (
    <>
      <p className="text-xs font-medium uppercase tracking-wider text-muted">{card.title}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {card.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border bg-surface px-2.5 py-1 text-xs font-medium text-text transition-colors duration-200 group-hover:border-accent/30 group-hover:bg-tint/80"
          >
            {tag}
          </span>
        ))}
      </div>
    </>
  );
}

function AboutListCard({
  card,
}: {
  card: Extract<SiteContent["about"]["cards"][number], { type: "list" }>;
}) {
  return (
    <>
      <p className="text-xs font-medium uppercase tracking-wider text-muted">{card.title}</p>
      <ul className="mt-4 space-y-4">
        {card.items.map((item) => (
          <li
            key={item.primary}
            className="flex flex-col gap-0.5 border-b border-border/80 pb-4 last:border-0 last:pb-0"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <span className="font-display font-semibold text-text">{item.primary}</span>
              {item.meta ? (
                <span className="text-xs tabular-nums text-muted">{item.meta}</span>
              ) : null}
            </div>
            <span className="text-sm text-muted">{item.secondary}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
