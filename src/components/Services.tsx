import type { SiteContent } from "@/types/site";
import { Container } from "@/components/Container";
import { ServiceIcon } from "@/components/ServiceIcon";

type Props = {
  services: SiteContent["services"];
};

export function Services({ services }: Props) {
  return (
    <section id="services" className="py-24 max-[820px]:py-16">
      <Container>
        <h2 className="max-w-[640px] font-display text-[clamp(30px,4vw,44px)] leading-[1.1] font-bold tracking-tight">
          {services.heading}
        </h2>
        <p className="mt-3.5 max-w-[560px] text-muted">{services.lead}</p>
        <div className="mt-12 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5">
          {services.items.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-2xl border border-border bg-surface"
            >
              <div className="grid aspect-8/5 place-items-center bg-tint">
                <ServiceIcon icon={item.icon} />
              </div>
              <div className="px-[22px] pt-5 pb-6">
                <h3 className="mb-1.5 font-display text-[21px] font-bold tracking-tight">
                  {item.title}
                </h3>
                <p className="text-[15px] text-muted">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
