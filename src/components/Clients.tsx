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
        <div id="projects" className="mt-10 border-t border-text">
          {clients.rows.map((row) => (
            <div
              key={row.name}
              className="grid grid-cols-1 items-baseline gap-1 border-b border-border py-[22px] min-[821px]:grid-cols-[1.1fr_1.4fr_1.5fr] min-[821px]:gap-6"
            >
              <h3 className="font-display text-[22px] font-bold tracking-tight">
                {row.name}
              </h3>
              <div className="font-medium text-accent">{row.work}</div>
              <div className="text-muted">{row.result}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
