export type NavLink = {
  label: string;
  href: string;
  variant?: "solid";
};

export type RotatingWord = {
  text: string;
  color: string;
};

export type Cta = {
  label: string;
  href: string;
};

export type ServiceItem = {
  icon: string;
  title: string;
  description: string;
};

export type MetricItem = {
  value: number;
  suffix: string;
  label: string;
};

export type Reason = {
  title: string;
  description: string;
};

export type ClientRow = {
  name: string;
  work: string;
  result: string;
};

export type Testimonial = {
  quote: string;
  initials: string;
  name: string;
  role: string;
  featured: boolean;
};

export type FooterLink = {
  label: string;
  href: string;
};

export type SiteContent = {
  meta: { title: string; description: string };
  brand: { name: string; email: string; copyright: string };
  nav: NavLink[];
  hero: {
    prefix: string;
    suffix: string;
    description: string;
    rotatingWords: RotatingWord[];
    primaryCta: Cta;
    secondaryCta: Cta;
  };
  marquee: string[];
  services: {
    heading: string;
    lead: string;
    items: ServiceItem[];
  };
  metrics: { ariaLabel: string; items: MetricItem[] };
  why: { heading: string; lead: string; reasons: Reason[] };
  clients: { heading: string; rows: ClientRow[] };
  testimonials: { heading: string; items: Testimonial[] };
  footer: {
    heading: string;
    lead: string;
    pagesHeading: string;
    pages: FooterLink[];
    socialHeading: string;
    social: FooterLink[];
  };
};
