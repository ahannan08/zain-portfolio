const stroke = "#047857";

type Props = { icon: string };

export function ServiceIcon({ icon }: Props) {
  const common = {
    viewBox: "0 0 160 100",
    fill: "none" as const,
    stroke,
    strokeWidth: 3,
    strokeLinecap: "round" as const,
    className: "h-auto w-[62%]",
  };

  switch (icon) {
    case "google-ads":
      return (
        <svg {...common}>
          <path d="M20 88h120M36 88V62M66 88V44M96 88V54M126 88V20" />
          <path d="M36 50l30-14 30 8 30-26" />
        </svg>
      );
    case "seo":
      return (
        <svg {...common}>
          <circle cx="70" cy="46" r="26" />
          <path d="M90 66l28 24" />
          <path d="M58 52v-8M70 52V36M82 52v-14" />
        </svg>
      );
    case "website":
      return (
        <svg {...common}>
          <rect x="20" y="14" width="120" height="72" rx="8" />
          <path d="M20 32h120M34 23h.1M44 23h.1M54 23h.1M36 48h50M36 60h34M100 46h24v28h-24z" />
        </svg>
      );
    case "ui-ux":
      return (
        <svg {...common} strokeLinejoin="round">
          <rect x="22" y="16" width="52" height="68" rx="6" />
          <path d="M32 30h32M32 42h32M32 54h20" />
          <rect x="88" y="16" width="50" height="30" rx="6" />
          <path d="M96 66l26 8-9 5 7 9-5 3-7-9-6 6z" />
        </svg>
      );
    case "digital-marketing":
      return (
        <svg {...common}>
          <circle cx="80" cy="50" r="12" />
          <circle cx="32" cy="26" r="8" />
          <circle cx="128" cy="26" r="8" />
          <circle cx="32" cy="76" r="8" />
          <circle cx="128" cy="76" r="8" />
          <path d="M39 31l31 13M121 31L90 44M39 71l31-13M121 71L90 58" />
        </svg>
      );
    case "analytics":
      return (
        <svg {...common} strokeLinejoin="round">
          <path d="M20 82V18M20 82h120" />
          <path d="M32 66l24-22 20 12 28-34 24 14" />
          <circle cx="56" cy="44" r="3" />
          <circle cx="76" cy="56" r="3" />
          <circle cx="104" cy="22" r="3" />
        </svg>
      );
    default:
      return null;
  }
}
