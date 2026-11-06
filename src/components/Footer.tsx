import Link from "next/link";
import type { SiteContent } from "@/types/site";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";

type Props = {
  footer: SiteContent["footer"];
  brand: SiteContent["brand"];
};

export function Footer({ footer, brand }: Props) {
  return (
    <footer id="contact" className="border-t border-border bg-surface pt-[72px] pb-8">
      <Container>
        <div className="grid grid-cols-1 gap-10 min-[821px]:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <h2 className="font-display text-[clamp(28px,3.5vw,40px)] leading-[1.1] font-bold tracking-tight">
              {footer.heading}
            </h2>
            <p className="mt-3.5 max-w-[560px] text-muted">{footer.lead}</p>
            <p className="mt-5">
              <ButtonLink href={`mailto:${brand.email}`} variant="solid">
                {brand.email}
              </ButtonLink>
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-[15px] font-medium">{footer.pagesHeading}</h4>
            <ul>
              {footer.pages.map((link) => (
                <li key={link.href} className="mb-2 text-muted">
                  <Link href={link.href} className="hover:text-accent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-[15px] font-medium">{footer.socialHeading}</h4>
            <ul>
              {footer.social.map((link) => (
                <li key={link.label} className="mb-2 text-muted">
                  <Link href={link.href} className="hover:text-accent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-14 border-t border-border pt-5 text-sm text-muted">
          {brand.copyright}
        </p>
      </Container>
    </footer>
  );
}
