"use client";

import { useEffect, useState } from "react";
import type { SiteContent } from "@/types/site";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { HeroBackground } from "@/components/HeroBackground";
import { Marquee } from "@/components/Marquee";
import { cn } from "@/lib/cn";

type Props = {
  hero: SiteContent["hero"];
  marquee: string[];
};

export function Hero({ hero, marquee }: Props) {
  const words = hero.rotatingWords;
  const [index, setIndex] = useState(0);
  const [out, setOut] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const id = window.setInterval(() => {
      setOut(true);
      window.setTimeout(() => {
        setIndex((i) => (i + 1) % words.length);
        setOut(false);
      }, 350);
    }, 2400);

    return () => window.clearInterval(id);
  }, [words.length]);

  const current = words[index];

  return (
    <section id="home" className="pb-0">
      <div className="relative overflow-hidden pt-[88px] pb-0">
        <HeroBackground />
        <Container className="relative z-10">
          <h1 className="max-w-[900px] font-display text-[clamp(42px,8vw,96px)] leading-[1.1] font-bold tracking-tight">
            {hero.prefix}{" "}
            <span
              className={cn(
                "inline-block transition-[color,opacity,transform] duration-300 motion-reduce:transition-none",
                out && "translate-y-[0.25em] opacity-0",
              )}
              style={{ color: current.color }}
            >
              {current.text}
            </span>{" "}
            {hero.suffix}
          </h1>
          <p className="mt-6 mb-8 max-w-[520px] text-lg text-muted">{hero.description}</p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={hero.primaryCta.href} variant="solid">
              {hero.primaryCta.label}
            </ButtonLink>
            <ButtonLink href={hero.secondaryCta.href} variant="ghost">
              {hero.secondaryCta.label}
            </ButtonLink>
          </div>
        </Container>
      </div>
      <Marquee words={marquee} />
    </section>
  );
}
