import { Clients } from "@/components/Clients";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Metrics } from "@/components/Metrics";
import { Nav } from "@/components/Nav";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Why } from "@/components/Why";
import { content } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Nav brandName={content.brand.name} links={content.nav} />
      <main>
        <Hero hero={content.hero} marquee={content.marquee} />
        <Services services={content.services} />
        <Metrics metrics={content.metrics} />
        <Why why={content.why} />
        <Clients clients={content.clients} />
        <Testimonials testimonials={content.testimonials} />
      </main>
      <Footer footer={content.footer} brand={content.brand} />
    </>
  );
}
