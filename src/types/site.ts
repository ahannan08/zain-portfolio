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

export type MetricItem = {
  value: number;
  suffix: string;
  label: string;
};

export type AboutStatCard = {
  type: "stat";
  title: string;
  value: string;
  hint: string;
};

export type AboutTagsCard = {
  type: "tags";
  title: string;
  tags: string[];
};

export type AboutListItem = {
  primary: string;
  secondary: string;
  meta?: string;
};

export type AboutListCard = {
  type: "list";
  title: string;
  items: AboutListItem[];
};

export type AboutCard = AboutStatCard | AboutTagsCard | AboutListCard;

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
  about: {
    heading: string;
    lead: string;
    paragraphs: string[];
    image: { src: string; alt: string };
    cards: AboutCard[];
  };
  metrics: { ariaLabel: string; items: MetricItem[] };
  why: { heading: string; lead: string; reasons: Reason[] };
  clients: { heading: string; lead: string; rows: ClientRow[] };
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
