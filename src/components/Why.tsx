import type { SiteContent } from "@/types/site";
import { Container } from "@/components/Container";

type Props = {
  why: SiteContent["why"];
};

export function Why({ why }: Props) {
  return (
    <section id="about" className="py-24 max-[820px]:py-16">
      <Container className="grid grid-cols-1 gap-16 min-[821px]:grid-cols-[1fr_1.2fr] min-[821px]:gap-16">
        <div>
          <h2 className="max-w-[640px] font-display text-[clamp(30px,4vw,44px)] leading-[1.1] font-bold tracking-tight">
            {why.heading}
          </h2>
          <p className="mt-3.5 max-w-[560px] text-muted">{why.lead}</p>
        </div>
        <ul>
          {why.reasons.map((reason, i) => (
            <li
              key={reason.title}
              className={`border-b border-border py-[22px] ${i === 0 ? "pt-0" : ""}`}
            >
              <h3 className="mb-1 font-display text-xl font-bold tracking-tight">
                {reason.title}
              </h3>
              <p className="text-muted">{reason.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
