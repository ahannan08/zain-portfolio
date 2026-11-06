import type { SiteContent } from "@/types/site";
import { Container } from "@/components/Container";

type Props = {
  why: SiteContent["why"];
};

export function Why({ why }: Props) {
  return (
    <section id="why" className="relative overflow-hidden bg-bg py-24 max-[820px]:py-16">
      {/* Layered animated background */}
      <div
        className="why-bg-mesh pointer-events-none absolute inset-0 opacity-90"
        aria-hidden
      />
      <div
        className="why-bg-grid pointer-events-none absolute inset-0 opacity-[0.55]"
        aria-hidden
      />
      <div className="why-bg-blob why-bg-blob-1 pointer-events-none absolute -left-[20%] top-[8%] h-[min(560px,75vw)] w-[min(560px,75vw)] rounded-full bg-accent/18 blur-3xl" />
      <div className="why-bg-blob why-bg-blob-2 pointer-events-none absolute -right-[18%] bottom-[0%] h-[min(480px,60vw)] w-[min(480px,60vw)] rounded-full bg-[#0E7490]/16 blur-3xl" />
      <div className="why-bg-blob why-bg-blob-3 pointer-events-none absolute left-[30%] top-[42%] h-[min(340px,45vw)] w-[min(340px,45vw)] rounded-full bg-[#4D7C0F]/12 blur-3xl" />
      <div className="why-bg-blob why-bg-blob-4 pointer-events-none absolute -left-[5%] bottom-[35%] h-[min(240px,35vw)] w-[min(240px,35vw)] rounded-full bg-accent/14 blur-2xl" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgb(247_250_249/0.65)_0%,transparent_35%,transparent_65%,rgb(247_250_249/0.5)_100%)]" />

      <Container className="relative z-[1]">
        <div className="mx-auto max-w-[720px] text-center min-[900px]:mx-0 min-[900px]:max-w-none min-[900px]:text-left">
          <h2 className="font-display text-[clamp(30px,4vw,44px)] leading-[1.1] font-bold tracking-tight">
            {why.heading}
          </h2>
          <p className="mt-4 max-w-[560px] text-lg text-muted min-[900px]:mx-0">
            {why.lead}
          </p>
        </div>
        <ul className="mt-14 grid gap-4 sm:grid-cols-2">
          {why.reasons.map((reason) => (
            <li
              key={reason.title}
              className="rounded-2xl border border-border bg-surface/80 p-6 shadow-sm backdrop-blur-sm transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:border-accent/20 hover:shadow-md"
            >
              <h3 className="font-display text-lg font-bold tracking-tight">{reason.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{reason.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
