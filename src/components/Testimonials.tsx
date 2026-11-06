import type { SiteContent } from "@/types/site";
import { Container } from "@/components/Container";
import { cn } from "@/lib/cn";

type Props = {
  testimonials: SiteContent["testimonials"];
};

export function Testimonials({ testimonials }: Props) {
  const featured = testimonials.items.find((t) => t.featured);
  const rest = testimonials.items.filter((t) => !t.featured);

  return (
    <section id="testimonials" className="py-24 max-[820px]:py-16">
      <Container>
        <h2 className="max-w-[640px] font-display text-[clamp(30px,4vw,44px)] leading-[1.1] font-bold tracking-tight">
          {testimonials.heading}
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-5 min-[821px]:grid-cols-[1.3fr_1fr] min-[821px]:grid-rows-2">
          {featured && (
            <QuoteCard
              testimonial={featured}
              featured
              className="min-[821px]:col-start-1 min-[821px]:row-start-1 min-[821px]:row-end-3"
            />
          )}
          {rest.map((t, i) => (
            <QuoteCard
              key={`${t.initials}-${t.name}`}
              testimonial={t}
              className={cn(
                i === 0 && "min-[821px]:col-start-2 min-[821px]:row-start-1",
                i === 1 && "min-[821px]:col-start-2 min-[821px]:row-start-2",
              )}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

function QuoteCard({
  testimonial,
  featured = false,
  className,
}: {
  testimonial: SiteContent["testimonials"]["items"][number];
  featured?: boolean;
  className?: string;
}) {
  return (
    <figure
      className={cn(
        "flex flex-col justify-between gap-7 rounded-2xl border p-8",
        featured
          ? "border-accent bg-accent text-on-accent max-[820px]:row-auto"
          : "border-border bg-surface",
        className,
      )}
    >
      <blockquote
        className={cn(
          "font-display text-[19px] leading-normal font-medium tracking-tight text-text",
          featured &&
            "text-[clamp(24px,3vw,34px)] leading-[1.25] text-on-accent",
        )}
      >
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <figcaption
        className={cn(
          "flex items-center gap-3 text-[15px]",
          featured && "text-on-accent",
        )}
      >
        <i
          className={cn(
            "grid h-[42px] w-[42px] place-items-center rounded-full font-display text-[15px] font-bold not-italic",
            featured
              ? "bg-white/16 text-on-accent"
              : "bg-tint text-accent",
          )}
        >
          {testimonial.initials}
        </i>
        <span className={cn(!featured && "text-text")}>
          {testimonial.name}
          <small
            className={cn(
              "mt-0 block text-sm",
              featured ? "text-quote-sub" : "text-muted",
            )}
          >
            {testimonial.role}
          </small>
        </span>
      </figcaption>
    </figure>
  );
}
