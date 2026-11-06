export function HeroBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <div className="hero-bg-grid absolute inset-0 opacity-[0.45]" />
      <div className="hero-orb hero-orb-a absolute -top-[20%] -right-[10%] h-[min(520px,70vw)] w-[min(520px,70vw)] rounded-full bg-accent/20 blur-3xl" />
      <div className="hero-orb hero-orb-b absolute top-[30%] -left-[15%] h-[min(440px,60vw)] w-[min(440px,60vw)] rounded-full bg-[#0E7490]/15 blur-3xl" />
      <div className="hero-orb hero-orb-c absolute -right-[5%] bottom-[10%] h-[min(380px,50vw)] w-[min(380px,50vw)] rounded-full bg-[#4D7C0F]/12 blur-3xl" />
      <div className="hero-orb hero-orb-d absolute top-[55%] left-[35%] h-[min(280px,40vw)] w-[min(280px,40vw)] rounded-full bg-stat/25 blur-3xl" />
      <div className="absolute inset-0 bg-linear-to-b from-bg/40 via-transparent to-bg" />
    </div>
  );
}
