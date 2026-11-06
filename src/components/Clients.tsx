import type { SiteContent } from "@/types/site";
import { Container } from "@/components/Container";

type Props = {
  clients: SiteContent["clients"];
};

export function Clients({ clients }: Props) {
  return (
    <section
      id="clients"
      className="border-y border-border bg-surface py-24 max-[820px]:py-16"
    >
      <Container>
        <h2 className="max-w-[640px] font-display text-[clamp(30px,4vw,44px)] leading-[1.1] font-bold tracking-tight">
          {clients.heading}
        </h2>
        <p className="mt-2 max-w-[520px] text-muted">{clients.lead}</p>
        <div
          id="projects"
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4"
        >
          {clients.rows.map((row) => (
            <article
              key={row.name}
              className="group flex flex-col rounded-2xl border border-border bg-bg p-6 shadow-sm transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-accent/25 hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-xl font-bold tracking-tight text-text">
                  {row.name}
                </h3>
                <span
                  className="shrink-0 rounded-full bg-tint px-2.5 py-1 text-xs font-medium text-accent"
                  title="Scope"
                >
                  Project
                </span>
              </div>
              <p className="mt-4 text-[15px] font-medium leading-snug text-accent">{row.work}</p>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">{row.result}</p>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-accent/25 via-border to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
