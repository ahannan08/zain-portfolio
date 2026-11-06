type Props = {
  words: string[];
};

export function Marquee({ words }: Props) {
  const repeated = [...words, ...words, ...words, ...words];

  return (
    <div
      className="group mt-[72px] overflow-hidden border-y border-border bg-surface whitespace-nowrap"
      aria-hidden
    >
      <div className="inline-flex animate-marquee">
        {repeated.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className={cnMarquee(i)}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}

function cnMarquee(index: number) {
  const accent = index % 3 === 0;
  return [
    "px-7 py-[18px] font-display text-[22px] font-medium",
    accent ? "text-accent" : "text-muted",
  ].join(" ");
}
